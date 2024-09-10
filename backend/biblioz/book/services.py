from biblioz import db
from flask_restx import Resource, abort, Namespace
from biblioz.book.models import Book
from biblioz.review.models import Review
from biblioz.book.swagger_models import api, book_model

api_services = Namespace('servicesBook', description='Servicios adicionales para libros')

# @api.route('/newBook')
@api_services.route('/newBook')
class NewBooksResource(Resource):
    @api.doc('get_new_books')
    @api.marshal_list_with(book_model)
    def get(self):
        """Obtener los libros más nuevos"""
        books = Book.query.order_by(Book.created_at.desc()).limit(5).all()

        if not books:
            api.abort(404, 'No hay libros nuevos disponibles')

        return books


@api_services.route('/topRated')
class TopTenBooksResource(Resource):
    @api.doc('get_top_books')
    @api.marshal_list_with(book_model)
    def get(self):
        """Obtener el Top 10 de libros mejor calificados"""
        top_books = db.session.query(
            Book,
            db.func.avg(Review.rating).label('avg_rating')
        ).join(Review).group_by(Book.id).order_by(db.desc('avg_rating')).limit(10).all()

        print(top_books)

        if not top_books:
            api.abort(404, 'No hay libros con suficientes ratings')

        return [book for book, avg_rtgs in top_books]
