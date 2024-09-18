from flask import request
from flask_restx import Resource
from biblioz import db
from biblioz.book.models import Book
from biblioz.user.models import User
from biblioz.userFavs.models import UserFavoriteBook
from biblioz.userFavs.schemas import UserFavoriteBookSchema
from biblioz.userFavs.swagger_models import api, user_favorites_model
from biblioz.book.swagger_models import get_book
from flask_restx import Namespace, Resource, abort


@api.route('/<int:user_id>/favorites')
class UserFavorites(Resource):
    @api.doc('get_books_favorites')
    def get(self, user_id):
        """Obtener los libros favoritos de un usuario"""
        user = User.query.get(user_id)
        if not user:
            return {"message": "User no existe"}, 404

        favorite_books = UserFavoriteBook.query.filter_by(user_id=user_id).all()
        if not favorite_books:
            return {"message": "El user no tiene libros favoritos"}, 200
        
        book_ids = [favorite.book_id for favorite in favorite_books]
        books = Book.query.filter(Book.id.in_(book_ids)).all()

        return api.marshal(books, get_book), 200


@api.route('/<int:user_id>/favorites/<int:book_id>')
class DeleteBookResource(Resource):

    @api.response(404, 'Libro no esta dentro de favoritos')
    def delete(self, user_id, book_id):
        """Eliminar un libro de la lista de favoritos del usuario"""
        
        fav_book = UserFavoriteBook.query.filter_by(user_id=user_id, book_id=book_id).first()
        if not fav_book:
            return {"message": "Libro no encontrado en favoritos"}, 404

        db.session.delete(fav_book)
        db.session.commit()

        return {"message": "Libro eliminado de favoritos"}, 200


    # @api.expect(user_favorites_model)
    @api.doc('add_book_favorite')
    def post(self, user_id, book_id):
        """Agregar un libro a la lista de favoritos de un usuario"""

        book = Book.query.get(book_id)
        if not book:
            return {"message": "El libro no existe"}, 404

        existing_favorite = UserFavoriteBook.query.filter_by(user_id=user_id, book_id=book_id).first()
        if existing_favorite:
            return {"message": "El libro ya está en favoritos"}, 400

        new_favorite = UserFavoriteBook(user_id=user_id, book_id=book_id)
        db.session.add(new_favorite)
        db.session.commit()

        return {"message": "Libro agregado a favoritos"}, 201
