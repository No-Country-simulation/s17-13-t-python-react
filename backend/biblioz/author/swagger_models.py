from flask_restx import fields, Namespace

api = Namespace('author', description='Operaciones relacionadas con author')

author_model = api.model('Author',{
    'name': fields.String(required=True),
    'biography': fields.String(required=True),
    'img': fields.String(required=False) # Este campo es solo para respuestas

})

get_author = api.model('AuthorGet', {
    'id': fields.Integer(),
    'name': fields.String(required=True),
    'biography': fields.String(required=True),
    'img': fields.String(required=False)
})