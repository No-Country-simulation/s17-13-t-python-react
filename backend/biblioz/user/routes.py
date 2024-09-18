from flask import request, session
from flask_restx import Resource, Namespace, fields
from biblioz import db
from biblioz.user.models import User
from biblioz.userProfile.models import UserProfile
from biblioz.user.schemas import UserSchema, UserLoginSchema
from biblioz.user.swagger_models import api, user_register_model, user_login_model, get_users
from werkzeug.security import generate_password_hash, check_password_hash



@api.route('/')
class UserListResource(Resource):
    @api.doc('get_users')
    @api.marshal_list_with(get_users)
    def get(self):
        """Obtener todos los usuarios"""
        users = User.query.all()
        if not users:
            api.abort(404,'No hay usuarios creados')

        return users


# Rutas
@api.route('/register')
class Register(Resource):
    @api.doc('register_user')
    @api.expect(user_register_model)
    def post(self):
        """Registrar un nuevo usuario"""
        data = request.json
        schema = UserSchema()
        errors = schema.validate(data)
        print(errors)
        if errors:
            return {'errors': errors}, 400

        if User.query.filter_by(email=data['email']).first():
            return {'message': 'El email ya está en uso'}, 400

        new_user = User(name=data['name'], email=data['email'], password=data['password'])

        db.session.add(new_user)
        db.session.commit()
        
        new_user_profile = UserProfile(user_id=new_user.id)
        db.session.add(new_user_profile)
        db.session.commit()

        return {'message':'Registro exitoso'}, 201


@api.route('/login')
class Login(Resource):
    @api.doc('login_user')
    @api.expect(user_login_model)
    def post(self):
        """Iniciar sesión de un usuario"""
        data = request.json
        schema = UserLoginSchema()
        errors = schema.validate(data)
        if errors:
            return {'errors': errors}, 400

        user = User.query.filter_by(email=data['email']).first()

        if not user.password == data['password']:
            return {'message': 'Credenciales inválidas'}, 401

        session['user_id'] = user.id
        preferences_completed = len(user.genres) > 0

        return {
            'id':user.id,
            'name': user.name,
            'email': user.email,
            'preferences': preferences_completed

        },200


