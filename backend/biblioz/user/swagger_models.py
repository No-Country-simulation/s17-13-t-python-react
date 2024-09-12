from flask_restx import fields, Namespace

# Definir el Namespace
api = Namespace('auth', description='Operaciones de autenticación')

# Modelos para Swagger (Solo para documentación)
user_register_model = api.model('UserRegister', {
    'name': fields.String(required=True),
    'email': fields.String(required=True),
    'password': fields.String(required=True)
})

user_login_model = api.model('UserLogin', {
    'email': fields.String(required=True),
    'password': fields.String(required=True)
})