from biblioz import db
from sqlalchemy import func
from flask_restx import Resource, abort, Namespace
from biblioz.book.models import Book
from biblioz.review.models import Review
from biblioz.search.models import SearchHistory
from biblioz.author.models import Author
from biblioz.book.swagger_models import api, book_model, get_book

api_services = Namespace('servicesBook', description='Servicios adicionales para libros')

# @api.route('/newBook')
@api_services.route('/newBook')
class NewBooksResource(Resource):
    @api.doc('get_new_books')
    @api.marshal_list_with(get_book)
    def get(self):
        """Obtener los libros más nuevos"""
        books = Book.query.order_by(Book.created_at.desc()).limit(7).all()

        if not books:
            api.abort(404, 'No hay libros nuevos disponibles')

        return books


@api_services.route('/topRated')
class TopTenBooksResource(Resource):
    @api.doc('get_top_books')
    @api.marshal_list_with(get_book)
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


@api_services.route('/wantedBooks')
class SearchedBooksResource(Resource):
    @api.doc('get_search_books')
    @api.marshal_list_with(get_book)
    def get(self):
        """Obtener los libros más buscados"""
        books = Book.query.join(SearchHistory).order_by(SearchHistory.search_count.desc()).limit(10).all()
        if not books:
            api.abort(404,'No hay busquedas realizadas')
        return books


@api_services.route('/booksOfAuthor/<int:author_id>')
class BooksAuthorResource(Resource):
    @api.doc('get_books_author')
    @api.marshal_list_with(get_book)
    def get(self, author_id):
        """Obtener los libros que tiene el author"""
        author = Author.query.get(author_id)
        if not author:
            api.abort(404, 'Author no encontrado')

        books = author.books
        if not books:
            api.abort(404,'El autor no tiene libros aun')

        return books


@api_services.route('/randomBooks')
class BooksRandomsResource(Resource):
    @api.doc('get_books_randoms')
    @api.marshal_list_with(get_book)
    def get(self):
        """Obtener libros randoms recomendados por biblioz"""
        books = Book.query.order_by(func.random()).limit(10).all()
        return books



@api_services.route('/book/<int:book_id>')
class BookRatingIDResource(Resource):
    @api.doc('get_book')
    # @api.marshal_with(get_book)
    def get(self, book_id):
        """Obtener info del libro con todos los campos"""
        book = Book.query.get(book_id)
        if not book:
            return{"message":"Libro no encontrado"}, 400
        
        avg_rating = db.session.query(
            db.func.avg(Review.rating).label('avg_rating')
        ).filter(Review.book_id == book_id).scalar()

        if avg_rating is None:
            avg_rating = 0 

        return {
            'id': book.id,
            'title': book.title,
            'description': book.description,
            'img': book.img,
            'pages': book.pages,
            'publisher': book.publisher,
            'avg_rating': avg_rating
        }
