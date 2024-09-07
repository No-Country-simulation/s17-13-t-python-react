from flask_restx import fields, Namespace

api = Namespace('book', description='Operaciones relacionadas con libros')

# Modelo para Book
book_model = api.model('Book', {
    'title': fields.String(required=True),
    'description': fields.String(equired=True),
    'img': fields.String(required=False),

    'genre_id': fields.Integer(required=True),
    'author_id': fields.Integer(required=True)
})


