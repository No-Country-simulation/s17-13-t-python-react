from flask import request
from flask_restx import Namespace, Resource, fields
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User
from biblioz import db

api = Namespace('users', description='User related operations')

# Definir el modelo de datos para la documentación
user_model = api.model('User', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of the user'),
    'name': fields.String(required=True, description='The user\'s name'),
    'email': fields.String(required=True, description='The email address'),
    'author_favorite': fields.String(required=True, description='The favorite author'),
    'genre_favorite': fields.String(required=True, description='The favorite genre'),
    'created_at': fields.DateTime(description='The creation time of the user record'),
    'updated_at': fields.DateTime(description='The last update time of the user record')
})

register_model = api.model('Register', {
    'name': fields.String(required=True, description='The user\'s name'),
    'email': fields.String(required=True, description='The email address'),
    'password': fields.String(required=True, description='The password'),
    'author_favorite': fields.String(required=True, description='The favorite author'),
    'genre_favorite': fields.String(required=True, description='The favorite genre')
})

login_model = api.model('Login', {
    'email': fields.String(required=True, description='The email address'),
    'password': fields.String(required=True, description='Contraseña')
})

@api.route('/register')
class Register(Resource):
    @api.expect(register_model)
    def post(self):
        data = request.json
        if User.query.filter_by(email=data['email']).first():
            return {'message': 'El usuario ya existe'}, 400
        
        hashed_password = generate_password_hash(data['password'])
        user = User(
            name=data['name'],
            email=data['email'],
            password=hashed_password,
            author_favorite=data['author_favorite'],
            genre_favorite=data['genre_favorite']
        )
        db.session.add(user)
        db.session.commit()
        
        return {'message': 'Se creo la cuenta exitosamente'}, 201

@api.route('/login')
class Login(Resource):
    @api.expect(login_model)
    def post(self):
        data = request.json
        user = User.query.filter_by(email=data['email']).first()
        if user and check_password_hash(user.password, data['password']):
            return {'message': 'Inicio de sesion exitoso'}, 200
        
        return {'message': 'Credenciales invalidas'}, 401
