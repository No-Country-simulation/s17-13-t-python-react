from flask_restx import fields, Namespace

api = Namespace('review', description='Operaciones relacionadas con reseñas')

review_model = api.model('Review', {
    'rating': fields.Integer(required=True),
    'comment': fields.String()
})
