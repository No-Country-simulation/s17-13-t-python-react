from flask_restx import fields, Namespace

api = Namespace('author', description='Operaciones relacionadas con author')

author_model = api.model('Author',{
    'name': fields.String(required=True),
    'biography': fields.String(required=True),
    'img': fields.String(required=False),

})