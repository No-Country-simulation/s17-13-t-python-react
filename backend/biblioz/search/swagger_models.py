from flask_restx import fields, Namespace

api = Namespace('search', description='Busquedas de libros por genero, titulo y autor')

search_model = api.model('SearchHistory',{

    'name_genre': fields.String(required=False),
    'name_author': fields.String(required=False),
    'title': fields.String(required=False)
})
