from flask_restx import Resource, abort
from flask import request , current_app
from biblioz import db
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
            'biography': user_profile.biography,
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
        def allowed_file(filename):
            ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
            return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

        user = User.query.get(user_id)
        if user is None:
            api.abort(404, 'Usuario no encontrado.')

        user_profile = UserProfile.query.filter_by(user_id=user_id).first()
        if user_profile is None:
            api.abort(404, 'Perfil de usuario no encontrado.')

        user_profile_folder = os.path.join(current_app.config['UPLOAD_FOLDER'], 'userProfile')
        if not os.path.exists(user_profile_folder):
            os.makedirs(user_profile_folder)

        schema = UserProfileSchema()
        errors = {}

        if 'img' in request.files:
            file = request.files['img']
            if file.filename == '':
                abort(400, 'No se seleccionó ningún archivo.')
            elif not allowed_file(file.filename):
                abort(400, 'Archivo no permitido.')
            else:
                filename = secure_filename(file.filename)
                file_path = os.path.join(user_profile_folder, filename)
                file.save(file_path)
                user_profile.img = filename

        biography = request.form.get('biography')
        # if biography:
        #     user_profile.biography = biography
        if biography is not None:
            try:
                schema.load({'biography': biography})
                user_profile.biography = biography
            except ValidationError as err:
                errors.update(err.messages)


        name = request.form.get('name')
        email = request.form.get('email')
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
            'biography': user_profile.biography,
            'user': {
                'id': user_profile.user.id,
                'name': user_profile.user.name,
                'email': user_profile.user.email
            }
        }