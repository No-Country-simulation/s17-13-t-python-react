<<<<<<< tasks_Joel
from flask import current_app, request, url_for
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.author.models import Author
from biblioz.author.swagger_models import api, author_model, get_author
=======
from flask import current_app, request
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.author.models import Author
from biblioz.author.swagger_models import api, author_model
>>>>>>> develop
from biblioz.author.schemas import AuthorSchema
from werkzeug.utils import secure_filename
import os
from marshmallow import ValidationError

@api.route('/')
class AuthorListResource(Resource):
    @api.doc('get_authors')
<<<<<<< tasks_Joel
    @api.marshal_list_with(get_author)
=======
    @api.marshal_list_with(author_model)
>>>>>>> develop
    def get(self):
        """Obtener todos los autores"""
        authors = Author.query.all()
        if not authors:
            api.abort(404,'No hay autores disponibles')
<<<<<<< tasks_Joel

        for author in authors:
            if author.img:
                author.img_url = url_for('uploaded_file', filename=f'authors/{author.img}', _external=True)
            else:
                author.img_url = None

=======
>>>>>>> develop
        return authors

    
    @api.doc('create_author')
    @api.expect(author_model)
    @api.marshal_with(author_model, code=201)
    def post(self):
        """Crear un nuevo autor""" 
        def allowed_file(filename):
            ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
            return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

        data = {
            'name': request.form.get('name'),
            'biography': request.form.get('biography')
        }
        
        author_schema = AuthorSchema()
        errors = author_schema.validate(data)

        if errors:
            abort(400, errors)

        else:

            validated_data = author_schema.load(data)
            new_author = Author(
                name = validated_data.get('name'),
                biography = validated_data.get('biography'),
            )

            file = request.files.get('img')
            if file:
                if not allowed_file(file.filename):
                    return {'message': 'Archivo no permitido.'}, 400

                filename = secure_filename(file.filename)
                authors_folder = os.path.join(current_app.config['UPLOAD_FOLDER'], 'authors')

                if not os.path.exists(authors_folder):
                    os.makedirs(authors_folder)

                file_path = os.path.join(authors_folder, filename)
                file.save(file_path)
                new_author.img = filename
            
            db.session.add(new_author)
            db.session.commit()

<<<<<<< tasks_Joel
            if new_author.img:
                new_author.img_url = url_for('uploaded_file', filename=f'authors/{new_author.img}', _external=True)
            else:
                new_author.img_url = None

=======
>>>>>>> develop
            return new_author, 201


@api.route('/<int:id>')
class AuthorResource(Resource):
    @api.doc('get_author')
<<<<<<< tasks_Joel
    @api.marshal_with(get_author)
=======
    @api.marshal_with(author_model)
>>>>>>> develop
    def get(self, id):
        """Obtener author por ID""" 
        author = Author.query.filter_by(id=id).first()
        if not author:
            api.abort(404, 'Author no encontrado')

<<<<<<< tasks_Joel
        if author.img:
            author.img_url = url_for('uploaded_file', filename=f'authors/{author.img}', _external=True)
        else:
            author.img_url = None

=======
>>>>>>> develop
        return author

    
    @api.doc('delete_author')
    def delete(self, id):
        """Eliminar author por ID""" 
        author = Author.query.filter_by(id=id).first()
        if not author:
            api.abort(404, 'Author no existe')
        else:

            db.session.delete(author)
            db.session.commit()
            return {'message':'Author eliminado'}, 200

    
    @api.doc('update_author')
    @api.expect(author_model)
    @api.marshal_with(author_model)
    def put(self, id):
        """Actualizar datos de author por ID""" 
        def allowed_file(filename):
            ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
            return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

        author = Author.query.filter_by(id=id).first()
        if not author:
            api.abort(404, 'Author no encontrado')

        data = request.form.to_dict()
        file = request.files.get('img')

        if file:
            data['img'] = file.filename

        try:
            author_schema = AuthorSchema()
            validated_data = author_schema.load(data)
        except ValidationError as err:
            abort(400, str(err))

        author.name = validated_data.get('name', author.name)
        author.biography = validated_data.get('biography', author.biography)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            authors_folder = os.path.join(current_app.config['UPLOAD_FOLDER'], 'authors')

            if not os.path.exists(authors_folder):
                os.makedirs(authors_folder)
            file_path = os.path.join(authors_folder, filename)
            file.save(file_path)
            author.img = filename

        elif file:
            abort(400, 'Archivo no permitido.')

        db.session.commit()

<<<<<<< tasks_Joel
        if author.img:
            author.img_url = url_for('uploaded_file', filename=f'authors/{author.img}', _external=True)
        else:
            author.img_url = None

=======
>>>>>>> develop
        return author