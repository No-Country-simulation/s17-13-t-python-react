from flask import request, current_app
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.book.models import Book
from biblioz.genre.models import Genre
from biblioz.author.models import Author
from biblioz.book.schemas import BookSchema
from biblioz.book.swagger_models import api, book_model, get_book
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
        books_data = [
            {
                "id": book.id,
                "title": book.title,
                "description": book.description,
                "author": book.author,
                "genre": book.genre
            }
            for book in books
        ]

        return books


    @api.doc('create_book')
    @api.expect(book_model)
    @api.marshal_with(book_model, code=201)
    def post(self):
        """Crear un nuevo libro"""
        def allowed_file(filename):
            ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
            return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

        data = {
            'title': request.form.get('title'),
            'description': request.form.get('description'),
            'img': request.files.get('img').filename if request.files.get('img') else None,

            'genre_id': request.form.get('genre_id'),
            'author_id': request.form.get('author_id')
        }

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

                genre_id=validated_data.get('genre_id'),
                author_id=validated_data.get('author_id')
            )

            file = request.files.get('img')
            if file:
                if not allowed_file(file.filename):
                    return {'message': 'Archivo no permitido.'}, 400

                filename = secure_filename(file.filename)
                books_folder = os.path.join(current_app.config['UPLOAD_FOLDER'], 'books')

                if not os.path.exists(books_folder):
                    os.makedirs(books_folder)

                file_path = os.path.join(books_folder, filename)
                file.save(file_path)
                new_book.img = filename

            db.session.add(new_book)
            db.session.commit()

            return new_book, 201




@api.route('/<int:id>')
class BookResource(Resource):
    @api.doc('get_book')
    @api.marshal_with(get_book)
    def get(self, id):
        """Obtener un libro por ID"""
        book = Book.query.filter_by(id=id).first()
        if not book:
            api.abort(404, 'No existe el libro')

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
        def allowed_file(filename):
            ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
            return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

        book = Book.query.filter_by(id=id).first()
        if not book:
            api.abort(404, 'Libro no encontrado')

        data = request.form.to_dict()
        file = request.files.get('img')

        if file:
            data['img'] = file.filename

        try:
            book_schema = BookSchema()
            validated_data = book_schema.load(data, partial=True)
        except ValidationError as err:
            abort(400, str(err))

        book.title = validated_data.get('title', book.title)
        book.description = validated_data.get('description', book.description)

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

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            books_folder = os.path.join(current_app.config['UPLOAD_FOLDER'], 'books')

            if not os.path.exists(books_folder):
                os.makedirs(books_folder)
            file_path = os.path.join(books_folder, filename)
            file.save(file_path)
            book.img = filename

        elif file:
            abort(400, 'Archivo no permitido.')

        db.session.commit()
        return book
