from flask_restx import fields, Namespace

api = Namespace('userFavorites', description='Libros favoritos del usuario')

user_favorites_model = api.model('UserFavoriteBook', {
    'book_ids': fields.List(fields.Integer)
})
