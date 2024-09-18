from flask_restx import fields, Namespace

api = Namespace('auth', description='Operaciones de autenticación')

user_register_model = api.model('UserRegister', {
    'name': fields.String(required=True),
    'email': fields.String(required=True),
    'password': fields.String(required=True)
})

user_login_model = api.model('UserLogin', {
    'email': fields.String(required=True),
    'password': fields.String(required=True)

})

get_users = api.model('UserGet', {

    'id':fields.Integer(),
    'name': fields.String(required=True),
    'email': fields.String(required=True),
    'password': fields.String(required=True)

})