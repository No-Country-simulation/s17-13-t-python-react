from flask_restx import fields, Namespace

api = Namespace('genre', description='Operaciones relacionadas con generos')

genre_model = api.model('Genre',{
    'name': fields.String(required=False)

<<<<<<< tasks_Joel
})

get_genre = api.model('GenreGet',{

    'id' : fields.Integer(),
    'name': fields.String(required=False)

=======
>>>>>>> develop
})