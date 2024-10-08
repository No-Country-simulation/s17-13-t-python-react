from flask_restx import Resource, abort
from flask import request , current_app
from biblioz import db
from biblioz.utils import changes_image_url
from biblioz.userProfile.models import UserProfile
from biblioz.user.models import User
from biblioz.userProfile.swagger_models import api, user_profile_model
from werkzeug.utils import secure_filename
import os
from marshmallow import ValidationError
from biblioz.userProfile.schemas import UserProfileSchema

@api.route('/<int:user_id>')
class UserProfileResource(Resource):
    @api.doc('get_user_profile')
    @api.marshal_with(user_profile_model)
    def get(self, user_id):
        """Obtener la información del perfil del usuario por ID"""
        user = User.query.get(user_id)
        if user is None:
            api.abort(404, 'Usuario no encontrado')
            
        user_profile = user.user_profile
        if not user_profile:
            api.abort(404, 'Perfil de usuario no encontrado')

        return {
            'img': user_profile.img,
            'city': user_profile.city,
            'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email,
            }
        }

    @api.doc('update_profile')
    @api.expect(user_profile_model)
    @api.marshal_with(user_profile_model, 201)
    def put(self, user_id):
        """Actualizar la información del perfil del usuario por ID"""
        user = User.query.get(user_id)
        if user is None:
            api.abort(404, 'Usuario no encontrado.')

        user_profile = UserProfile.query.filter_by(user_id=user_id).first()
        if user_profile is None:
            api.abort(404, 'Perfil de usuario no encontrado.')

        schema = UserProfileSchema()
        errors = {}

        img_url = request.json.get('img')
        city = request.json.get('city')

        user_data = request.json.get('user', {})
        name = user_data.get('name')
        email = user_data.get('email')

        if img_url:
            img_url = changes_image_url(img_url)
            user_profile.img = img_url

        if city:
            try:
                schema.load({'city': city})
                user_profile.city = city
            except ValidationError as err:
                errors.update(err.messages)

        if name:
            user.name = name

        if email:
            existing_user = User.query.filter_by(email=email).first()
            if existing_user and existing_user.id != user.id:
                errors['email'] = ['El correo electrónico ya está en uso.']
            else:
                user.email = email

        if errors:
            abort(400, errors)

        db.session.commit()
        
        return {
            'img': user_profile.img,
            'city': user_profile.city,
            'user': {
                'id': user_profile.user.id,
                'name': user_profile.user.name,
                'email': user_profile.user.email
            }
        }
