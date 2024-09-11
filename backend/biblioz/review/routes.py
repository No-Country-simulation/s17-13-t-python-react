from flask import request
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.review.models import Review
from biblioz.user.models import User
from biblioz.book.models import Book
from biblioz.review.schemas import ReviewSchema
from biblioz.review.swagger_models import api, review_model, get_review
from marshmallow import ValidationError

@api.route('/')
class ReviewList(Resource):

    @api.doc('get_reviews')
    @api.marshal_list_with(get_review)

    def get(self):
        """Obtener todas las reseñas"""
        reviews = Review.query.all()
        if not reviews:
            api.abort(404,'No hay reseñas disponibles')
            
        reviews_data = [
            {
                "id": review.id,
                "rating": review.rating,
                "comment": review.comment,
                "user": review.user,  
                "book": review.book
            }
            for review in reviews
        ]

        return reviews,200


    @api.doc('create_review')
    @api.expect(review_model)
    @api.marshal_with(review_model, code=201)
    def post(self):
        """Crear una nueva reseña"""
        review_schema = ReviewSchema()
        try:
            data = request.json
            review_data = review_schema.load(data)

            user = User.query.get(review_data['user_id'])
            book = Book.query.get(review_data['book_id'])

            if not user:
                api.abort(404, 'Usuario no encontrado')
            if not book:
                api.abort(404, 'Libro no encontrado')

            existing_review = Review.query.filter_by(user_id=review_data['user_id'], book_id=review_data['book_id']).first()
            if existing_review:
                api.abort(404, 'Ya has reseñado este libro')

            review = Review(
                rating=review_data['rating'],
                comment=review_data.get('comment'),

                user_id=review_data['user_id'],
                book_id=review_data['book_id']
            )
            db.session.add(review)
            db.session.commit()
            return review, 201

        except ValidationError as err:
            api.abort(400, str(err))


@api.route('/<int:id>')
class ReviewResource(Resource):
    @api.doc('get_review')
    @api.marshal_with(get_review)
    def get(self, id):
        """Obtener una reseña por ID"""
        review = Review.query.filter_by(id=id).first()
        if not review:
            api.abort(404,'Reseña no encontrada')
        return review, 200


    @api.doc('update_review')
    @api.expect(review_model)
    @api.marshal_with(review_model)
    def put(self, id):
        """Actualizar una reseña por ID"""
        review_schema = ReviewSchema()
        data = request.json
        try:
            review_data = review_schema.load(data)
            review = Review.query.filter_by(id=id).first()
            if not review:
                api.abort(404,'Reseña no encontrada')

            user = User.query.get(review_data.get('user_id'))
            book = Book.query.get(review_data.get('book_id'))

            if review_data.get('user_id') and not user:
                api.abort(404, 'Usuario no encontrado')
            if review_data.get('book_id') and not book:
                api.abort(404, 'Libro no encontrado')

<<<<<<< tasks_Joel
            # review.rating = review_data['rating']
            review.comment = review_data.get('comment')

            # review.user_id = review_data.get('user_id', review.user_id)
            # review.book_id = review_data.get('book_id', review.book_id)
=======
            review.rating = review_data['rating']
            review.comment = review_data.get('comment')

            review.user_id = review_data.get('user_id', review.user_id)
            review.book_id = review_data.get('book_id', review.book_id)
>>>>>>> develop

            db.session.commit()
            return review, 200

        except ValidationError as err:
            api.abort(400, str(err))


    @api.doc('delete_review')
    def delete(self, id):
        """Eliminar una reseña por ID"""
        review = Review.query.filter_by(id=id).first()
        if not review:
            api.abort(404,'Reseña no encontrada')
        else:
            db.session.delete(review)
            db.session.commit()

            return {'message':'Reseña eliminada'}
