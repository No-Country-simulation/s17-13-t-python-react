from marshmallow import Schema, fields

class UserFavoriteGenreSchema(Schema):
    genre_ids = fields.List(fields.Integer)
