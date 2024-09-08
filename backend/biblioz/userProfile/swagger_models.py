from flask_restx import fields, Namespace

# Definir el Namespace para UserProfile
api = Namespace('profile', description='Gestión de perfiles de usuario')

# Modelos para Swagger
user_profile_model = api.model('UserProfile', {
    'img': fields.String(required=False),
    'biography': fields.String(required=False),
    'user': fields.Nested(api.model('User', {
        'name': fields.String(required=True),
        'email': fields.String(required=True)
    }))
})
