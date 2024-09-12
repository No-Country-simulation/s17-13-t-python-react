from flask_restx import fields, Namespace

api = Namespace('userPreferences', description='Operaciones relacionadas con la recomendacion automatica')

user_preferences_model = api.model('UserFavoriteGenre', {
    'genre_ids': fields.List(fields.Integer)
})
