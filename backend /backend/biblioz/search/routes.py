from flask import request
from biblioz import db
from flask_restx import Resource, abort
from biblioz.search.models import SearchHistory
from biblioz.book.models import Book
from biblioz.genre.models import Genre
from biblioz.author.models import Author
from biblioz.search.swagger_models import api, search_model
from biblioz.book.swagger_models import book_model


@api.route('/')
class BookSearchResource(Resource):
    @api.expect(search_model)
    @api.marshal_list_with(book_model)
    def post(self):
        """Buscar libros por género, autor y título"""
        search_data = request.json
        query = Book.query

        if 'name_genre' in search_data:
            query = query.join(Genre).filter(Genre.name.ilike(f"%{search_data['name_genre']}%"))
        if 'name_author' in search_data:
            query = query.join(Author).filter(Author.name.ilike(f"%{search_data['name_author']}%"))
        if 'title' in search_data:
            query = query.filter(Book.title.ilike(f"%{search_data['title']}%"))

        books = query.all()

        if not books:
            abort(404, 'No se encontraron libros que coincidan con la busqueda realizada')

        for book in books:
            search = SearchHistory.query.filter_by(book_id=book.id).first()
            if search:
                search.search_count += 1
            else:
                new_search = SearchHistory(book_id=book.id, search_count=1)
                db.session.add(new_search)
        
        db.session.commit()
        
        return books
