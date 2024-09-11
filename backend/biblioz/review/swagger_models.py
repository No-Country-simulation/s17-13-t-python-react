from flask_restx import fields, Namespace

api = Namespace('review', description='Operaciones relacionadas con reseñas')

review_model = api.model('Review', {
    'rating': fields.Integer(required=True),
    'comment': fields.String(),

    'user_id': fields.Integer(required=True),
    'book_id': fields.Integer(required=True)
})

<<<<<<< tasks_Joel
get_review = api.model('ReviewGet', {
    'id': fields.Integer(),
    'rating': fields.Integer(required=True),
    'comment': fields.String(),

    'user_id': fields.Integer(required=True),
    'book_id': fields.Integer(required=True)
})
=======
>>>>>>> develop
