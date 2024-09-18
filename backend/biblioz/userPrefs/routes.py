from flask import request, session
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.user.models import User
from biblioz.genre.models import Genre
from biblioz.book.models import Book
from biblioz.userPrefs.models import UserFavoriteGenre
from biblioz.userPrefs.schemas import UserFavoriteGenreSchema
from biblioz.userPrefs.swagger_models import api , user_preferences_model
from biblioz.book.swagger_models import get_book


@api.route('/books/recommended')
class RecommendedBooksResource(Resource):
    @api.doc('get_recommended_books')
    @api.param('user_id', 'Id del user', type=int, required=True)  
    @api.marshal_list_with(get_book)
    def get(self):
        """Obtener libros recomendados segun los géneros seleccionados por el usuario"""
        user_id = request.args.get('user_id', type=int)

        if not user_id:
            api.abort(400, 'Se requiere el ID del usuario')

        user = User.query.get(user_id)
        if not user:
            api.abort(404, 'Usuario no encontrado')

        genre_ids = [genre.id for genre in user.genres]

        if not genre_ids:
            api.abort(400, 'No se proporcionaron IDs de géneros')

        books = Book.query.filter(Book.genre_id.in_(genre_ids)).all()
        if not books:
            api.abort(404, 'No hay libros disponibles para los géneros seleccionados')

        return books



@api.route('/user/<int:user_id>/preferences/create')
class UserPreferencesCreate(Resource):
    @api.doc('create_user_preferences')
    @api.expect(user_preferences_model)
    def post(self, user_id):
        """Crear preferencias de género para un nuevo usuario"""
        user_preferences = UserFavoriteGenreSchema().load(request.json)

        user = User.query.get(user_id)
        if not user:
            api.abort(404, 'Usuario no encontrado')

        genre_ids = user_preferences['genre_ids']
        genres = Genre.query.filter(Genre.id.in_(genre_ids)).all()

        user.genres = genres
        db.session.commit()

        return {'message': 'Preferencias creadas'}, 201



@api.route('/user/<int:user_id>/preferences')
class UserPreferencesResource(Resource):
    @api.doc('update_user_preferences')
    @api.expect(user_preferences_model)
    def put(self, user_id):
        """Actualizar preferencias de género para un usuario existente"""
        user_preferences = UserFavoriteGenreSchema().load(request.json)

        user = User.query.get(user_id)
        if not user:
            api.abort(404, 'Usuario no encontrado')

        genre_ids = user_preferences['genre_ids']
        genres = Genre.query.filter(Genre.id.in_(genre_ids)).all()

        user.genres = genres
        db.session.commit()

        return {'message': 'Preferencias actualizadas'}, 200



