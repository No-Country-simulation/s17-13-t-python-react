from flask_restx import fields, Namespace

api = Namespace('book', description='Operaciones relacionadas con libros')

# Modelo para Book
book_model = api.model('Book', {
    'title': fields.String(required=True),
    'description': fields.String(equired=True),
    'img': fields.String(required=False),
    # 'genre': fields.Nested(genre_model, description='Género del libro'),
    # 'author': fields.Nested(author_model, description='Autor del libro')
})


