from flask import request, session
from flask_restx import Resource, Namespace, fields
from biblioz import db
from biblioz.user.models import User
from biblioz.userProfile.models import UserProfile
from biblioz.user.schemas import UserSchema, UserLoginSchema
<<<<<<< tasks_Joel
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
=======
from biblioz.user.swagger_models import api, user_register_model, user_login_model
from werkzeug.security import generate_password_hash, check_password_hash
>>>>>>> develop


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

<<<<<<< tasks_Joel
        # hashed_password = generate_password_hash(data['password'])
        # new_user = User(name=data['name'], email=data['email'], password=hashed_password)
        new_user = User(name=data['name'], email=data['email'], password=data['password'])
=======
        hashed_password = generate_password_hash(data['password'])
        new_user = User(name=data['name'], email=data['email'], password=hashed_password)
>>>>>>> develop
        db.session.add(new_user)
        db.session.commit()
        
        new_user_profile = UserProfile(user_id=new_user.id)
        db.session.add(new_user_profile)
        db.session.commit()

<<<<<<< tasks_Joel
        # return schema.dump(new_user), 201
        return {'message':'Registro exitoso'}, 201
=======
        return schema.dump(new_user), 201
>>>>>>> develop

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
<<<<<<< tasks_Joel
        # if not user or not check_password_hash(user.password, data['password']):
        if not user.password == data['password']:
            return {'message': 'Credenciales inválidas'}, 401

        session['user_id'] = user.id
        res = session['user_id']
        return {'message': 'Inicio de sesión exitoso'}, 200
        # return {
        #     'name': user.name,
        #     'email': user.email
        # },200
=======
        if not user or not check_password_hash(user.password, data['password']):
            return {'message': 'Credenciales inválidas'}, 401

        session['user_id'] = user.id
        return {'message': 'Inicio de sesión exitoso'}, 200
>>>>>>> develop
