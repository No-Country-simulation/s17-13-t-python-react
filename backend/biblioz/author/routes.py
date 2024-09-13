from flask import current_app, request, url_for
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.utils import changes_image_url
from biblioz.author.models import Author
from biblioz.author.swagger_models import api, author_model, get_author
from biblioz.author.schemas import AuthorSchema
from werkzeug.utils import secure_filename
import os
from marshmallow import ValidationError

@api.route('/')
class AuthorListResource(Resource):
    @api.doc('get_authors')
    @api.marshal_list_with(get_author)
    def get(self):
        """Obtener todos los autores"""
        authors = Author.query.all()
        if not authors:
            api.abort(404,'No hay autores disponibles')

        return authors

    
    @api.doc('create_author')
    @api.expect(author_model)
    @api.marshal_with(author_model, code=201)
    def post(self):
        """Crear un nuevo autor""" 

        data = request.json
        
        if 'img' in data:
            data['img'] = changes_image_url(data['img'])

        author_schema = AuthorSchema()
        errors = author_schema.validate(data)

        if errors:
            abort(400, errors)

        else:

            validated_data = author_schema.load(data)
            new_author = Author(
                name = validated_data.get('name'),
                biography = validated_data.get('biography'),
                img=validated_data.get('img')
            )
            
            db.session.add(new_author)
            db.session.commit()
            
            return new_author, 201


@api.route('/<int:id>')
class AuthorResource(Resource):
    @api.doc('get_author')
    @api.marshal_with(get_author)
    def get(self, id):
        """Obtener author por ID""" 
        author = Author.query.filter_by(id=id).first()
        if not author:
            api.abort(404, 'Author no encontrado')

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

        author = Author.query.filter_by(id=id).first()
        if not author:
            api.abort(404, 'Author no encontrado')

        data = request.json
        
        if 'img' in data:
            data['img'] = changes_image_url(data['img'])

        try:
            author_schema = AuthorSchema()
            validated_data = author_schema.load(data)
        except ValidationError as err:
            abort(400, str(err))

        author.name = validated_data.get('name', author.name)
        author.biography = validated_data.get('biography', author.biography)

        if 'img' in data:
            author.img = data['img']

        db.session.commit()
        
        return author