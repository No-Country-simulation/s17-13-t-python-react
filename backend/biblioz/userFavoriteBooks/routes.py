from flask import request, session, Blueprint
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.user.models import User
from biblioz.genre.models import Genre
from biblioz.book.models import Book
from biblioz.userFavoriteBooks.models import UserFavoriteBooks
from biblioz.userFavoriteBooks.schemas import UserFavoriteBookSchema
from biblioz.userFavoriteBooks.swagger_models import api , user_favorite_model
from biblioz.book.swagger_models import book_model

main = Blueprint("favorite_routes",__name__)


#Buscar favoritos del usuario

@main.route("/hola")
def get():
    return("exito")


# @api.route('/user/<user_id>/favoriteBooks/search')
# class FavoriteBooksResource(Resource):
#     @api.doc('get_favorite_books')
#     @api.param('user_id', 'Id del user', type=int, required=True)  
#     @api.marshal_list_with(book_model)
#     def get(self):
#         """Obtener libros favoritos del usuario"""
#         user_id = request.args.get('user_id', type=int)

#         if not user_id:
#             api.abort(400, 'Se requiere el ID del usuario')

#         user = User.query.get(user_id)
#         if not user:
#             api.abort(404, 'Usuario no encontrado')

#         book_ids = [book.id for book in user.books]

#         if not book_ids:
#             api.abort(400, 'No se proporcionaron IDs de libros')

#         books = Book.query.filter(Book.id.in_(book_ids)).all()
#         if not books:
#             api.abort(404, 'No hay libros favoritos guardados')

#         return books

# #Añadir favoritos del usuario

# @api.route('/user/<int:user_id>/favoriteBooks/add')
# class UserPreferencesCreate(Resource):
#     @api.doc('add_favorite_books')
#     @api.expect(user_favorite_model)
#     def post(self, user_id):
#         """Añadir libros a la lista de favoritos"""
#         user_favorites = UserFavoriteBookSchema().load(request.json)

#         user = User.query.get(user_id)
#         if not user:
#             api.abort(404, 'Usuario no encontrado')

#         book_ids = user_favorites['book_ids']
#         genres = Genre.query.filter(Genre.id.in_(book_ids)).all()

#         user.genres = genres
#         db.session.commit()

#         return {'message': 'Preferencias creadas'}, 201

# #Eliminar favoritos del usuario

# @api.route('/user/<int:user_id>/favoriteBooks/remove')
# class UserPreferencesCreate(Resource):
#     @api.doc('add_favorite_books')
#     @api.expect(user_favorite_model)
#     def post(self, user_id):
#         """Eliminar libros a la lista de favoritos"""
#         user_favorites = UserFavoriteBookSchema().load(request.json)

#         user = User.query.get(user_id)
#         if not user:
#             api.abort(404, 'Usuario no encontrado')

#         book_ids = user_favorites['book_ids']
#         genres = Genre.query.filter(Genre.id.in_(book_ids)).all()

#         user.genres = genres
#         db.session.commit()

#         return {'message': 'Preferencias creadas'}, 201


# # @api.route('/user/<int:user_id>/preferences')
# # class UserPreferencesResource(Resource):
# #     @api.doc('update_user_preferences')
# #     @api.expect(user_preferences_model)
# #     def put(self, user_id):
# #         """Actualizar preferencias de género para un usuario existente"""
# #         user_preferences = UserFavoriteGenreSchema().load(request.json)

# #         user = User.query.get(user_id)
# #         if not user:
# #             api.abort(404, 'Usuario no encontrado')

# #         genre_ids = user_preferences['genre_ids']
# #         genres = Genre.query.filter(Genre.id.in_(genre_ids)).all()

# #         user.genres = genres
# #         db.session.commit()

# #         return {'message': 'Preferencias actualizadas'}, 200



