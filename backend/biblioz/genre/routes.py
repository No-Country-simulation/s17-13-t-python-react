from flask import current_app, request
from flask_restx import Resource, Namespace, abort
from biblioz import db
from biblioz.genre.models import Genre
from biblioz.genre.swagger_models import api, genre_model, get_genre
from biblioz.genre.schemas import GenreSchema
from werkzeug.utils import secure_filename
import os
from marshmallow import ValidationError

@api.route('/')
class GenreListResource(Resource):
    @api.doc('get_genres')
    @api.marshal_list_with(get_genre)
    def get(self):
        """Obtener todos los generos"""
        genres = Genre.query.all()
        if not genres:
            api.abort(404,'No hay generos disponibles')
        return genres

    
    @api.doc('create_genre')
    @api.expect(genre_model)
    @api.marshal_with(genre_model, code=201)
    def post(self):
        """Crear un nuevo genero"""
        json_data = request.get_json()
        try:
            data = GenreSchema().load(json_data)
        except ValidationError as err:
            api.abort(400, str(err))

        if Genre.query.filter_by(name=data['name']).first():
            api.abort(400, 'El género ya existe')

        genre = Genre(name=data['name'])
        db.session.add(genre)
        db.session.commit()
        
        return genre, 201


@api.route('/<int:id>')
class GenreResource(Resource):
    @api.doc('get_genre')
    @api.marshal_with(get_genre)
    def get(self, id):
        """Obtener genero por ID""" 
        genre = Genre.query.filter_by(id=id).first()
        if not genre:
            api.abort(404, 'Genero no encontrado')

        return genre

    @api.doc('delete_genre')
    def delete(self, id):
        """Eliminar genero por ID""" 
        genre = Genre.query.filter_by(id=id).first()
        if not genre:
            api.abort(404,'Genero no existe')
        else:

            db.session.delete(genre)
            db.session.commit()

            return {'message':'Genero eliminado'}


    @api.doc('update_genre')
    @api.expect(genre_model)
    @api.marshal_with(genre_model)
    def put(self, id):
        """Actualizar datos del genero por ID""" 
        json_data = request.get_json()
        try:
            data = GenreSchema().load(json_data, partial=True)
        except ValidationError as err:
            api.abort(400, str(err))

        genre = Genre.query.filter_by(id=id).first()
        if not genre:
            api.abort(404, 'Genero no encontrado')

        if 'name' in data:
            if Genre.query.filter_by(name=data['name']).first():
                api.abort(400, 'El genero con el nombre ya existe')
            genre.name = data['name']

        db.session.commit()
        return genre
