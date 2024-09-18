from flask_restx import fields, Namespace

api = Namespace('book', description='Operaciones relacionadas con libros')

book_model = api.model('Book', {
    'title': fields.String(required=True),
    'description': fields.String(required=True),
    'img': fields.String(required=False),
    'pages': fields.Integer(required=True),
    'publisher': fields.String(required=True),

    'genre_id': fields.Integer(required=True),
    'author_id': fields.Integer(required=True)
})

get_book = api.model('BookGet', {

    'id': fields.Integer(),
    'title': fields.String(required=True),
    'description': fields.String(equired=True),
    'img': fields.String(required=False),
    'pages': fields.Integer(required=False),
    'publisher': fields.String(required=False),

    'genre_id': fields.Integer(required=True),
    'author_id': fields.Integer(required=True)
})

get_book_id = api.model('BookGetID', {

    'id': fields.Integer(),
    'title': fields.String(required=True),
    'description': fields.String(equired=True),
    'img': fields.String(required=False),
    'pages': fields.Integer(required=False),
    'publisher': fields.String(required=False),

    'genre_id': fields.Integer(required=True),
    'author_id': fields.Integer(required=True),
    'author_name': fields.String(required=False)
})
