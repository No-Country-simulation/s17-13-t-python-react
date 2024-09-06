from flask import request
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.review.models import Review
from biblioz.review.schemas import ReviewSchema
from biblioz.review.swagger_models import api, review_model
from marshmallow import ValidationError

@api.route('/')
class ReviewList(Resource):

    @api.doc('get_reviews')
    @api.marshal_list_with(review_model)
    def get(self):
        """Obtener todas las reseñas"""
        reviews = Review.query.all()
        if not reviews:
            api.abort(404,'No hay reseñas disponibles')

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
            review = Review(
                rating=review_data['rating'],
                comment=review_data.get('comment')
            )
            db.session.add(review)
            db.session.commit()
            return review, 201
        except ValidationError as err:
            # return jsonify(err.messages), 400
            api.abort(400, str(err))

@api.route('/<int:id>')
class ReviewResource(Resource):
    @api.doc('get_review')
    @api.marshal_with(review_model)
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

            review.rating = review_data['rating']
            review.comment = review_data.get('comment')
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
