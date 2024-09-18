from flask import request, current_app
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.utils import changes_image_url
from biblioz.book.models import Book
from biblioz.genre.models import Genre
from biblioz.author.models import Author
from biblioz.book.schemas import BookSchema
from biblioz.book.swagger_models import api, book_model, get_book, get_book_id
from werkzeug.utils import secure_filename
import os
from marshmallow import ValidationError


@api.route('/')
class BookListResource(Resource):
    @api.doc('get_books')
    @api.marshal_list_with(get_book)
    def get(self):
        """Obtener todos los libros"""
        books = Book.query.all()
        if not books:
            api.abort(404, 'No hay libros disponibles')

        return books


    @api.doc('create_book')
    @api.expect(book_model)
    @api.marshal_with(book_model, code=201)
    def post(self):
        """Crear un nuevo libro"""

        data = request.json

        if 'img' in data:
            data['img'] = changes_image_url(data['img'])

        book_schema = BookSchema()
        errors = book_schema.validate(data)
        
        if errors:
            abort(400, errors)

        else:
            
            validated_data = book_schema.load(data)

            if not Genre.query.get(validated_data.get('genre_id')):
                abort(400, 'Género no válido.')
            if not Author.query.get(validated_data.get('author_id')):
                abort(400, 'Autor no válido.')

            new_book = Book(
                title=validated_data.get('title'),
                description=validated_data.get('description'),
                img=validated_data.get('img'),
                pages=validated_data.get('pages'), 
                publisher=validated_data.get('publisher'),

                genre_id=validated_data.get('genre_id'),
                author_id=validated_data.get('author_id')
            )

            db.session.add(new_book)
            db.session.commit()

            return new_book, 201


@api.route('/<int:id>')
class BookResource(Resource):
    @api.doc('get_book')
    @api.marshal_with(get_book_id)
    def get(self, id):
        """Obtener un libro por ID"""
        book = Book.query.filter_by(id=id).first()
        if not book:
            api.abort(404, 'No existe el libro')

        book.author_name = book.author.name
        return book


    @api.doc('delete_book')
    def delete(self, id):
        """Eliminar un libro por ID"""
        book = Book.query.filter_by(id=id).first()
        if not book:
            api.abort(404, 'Libro no encontrado')
        else:
            db.session.delete(book)
            db.session.commit()
            return {'message': 'Libro eliminado'}, 200

        
    @api.doc('update_book')
    @api.expect(book_model)
    @api.marshal_with(book_model)
    def put(self, id):
        """Actualizar un libro por ID"""

        book = Book.query.filter_by(id=id).first()
        if not book:
            api.abort(404, 'Libro no encontrado')

        data = request.json

        if 'img' in data:
            data['img'] = changes_image_url(data['img'])

        try:
            book_schema = BookSchema()
            validated_data = book_schema.load(data)
        except ValidationError as err:
            abort(400, str(err))

        book.title = validated_data.get('title', book.title)
        book.description = validated_data.get('description', book.description)

        if 'img' in data:
            book.img = data['img']

        book.pages = validated_data.get('pages', book.pages)
        book.publisher = validated_data.get('publisher', book.publisher) 

        genre_id = validated_data.get('genre_id', book.genre_id)
        author_id = validated_data.get('author_id', book.author_id)

        if genre_id:
            if not Genre.query.get(genre_id):
                abort(400, 'Género no válido.')
            book.genre_id = genre_id
        
        if author_id:
            if not Author.query.get(author_id):
                abort(400, 'Autor no válido.')
            book.author_id = author_id

        db.session.commit()
        
        return book
