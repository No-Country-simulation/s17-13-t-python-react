from flask_restx import fields, Namespace

api = Namespace('genre', description='Operaciones relacionadas con generos')

genre_model = api.model('Genre',{
    'name': fields.String(required=False)

})