from flask import request, current_app
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.book.models import Book
from biblioz.book.schemas import BookSchema
from biblioz.book.swagger_models import api, book_model
from werkzeug.utils import secure_filename
import os
from marshmallow import ValidationError


@api.route('/')
class BookListResource(Resource):
    @api.doc('get_books')
    @api.marshal_list_with(book_model)
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
        def allowed_file(filename):
            ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
            return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

        data = {
            'title': request.form.get('title'),
            'description': request.form.get('description'),
            'img': request.files.get('img').filename if request.files.get('img') else None
        }
        print(f"Datos recibidos: {data}")

        book_schema = BookSchema()
        errors = book_schema.validate(data)
        
        if errors:
            abort(400, errors)

        else:
            
            validated_data = book_schema.load(data)
            new_book = Book(
                title=validated_data.get('title'),
                description=validated_data.get('description'),
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
    @api.marshal_with(book_model)
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
            
        # book.genre_id = data.get('genre_id', book.genre_id)
        # book.author_id = data.get('author_id', book.author_id)

        db.session.commit()
        return book
