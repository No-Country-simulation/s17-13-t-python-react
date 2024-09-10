from flask_restx import fields, Namespace

api = Namespace('userFavoriteBooks', description='Recursos para visualizar la lista de favoritos del usuario')

user_favorite_model = api.model('UserFavoriteBook', {
    'book_ids': fields.List(fields.Integer)
})
