from flask_restx import fields, Namespace

api = Namespace('profile', description='Gestión de perfiles de usuario')

user_profile_model = api.model('UserProfile', {
    'img': fields.String(required=False),
    'biography': fields.String(required=False),
    'user': fields.Nested(api.model('User', {
        'id': fields.String(),
        'name': fields.String(required=True),
        'email': fields.String(required=True)
    }))
})
