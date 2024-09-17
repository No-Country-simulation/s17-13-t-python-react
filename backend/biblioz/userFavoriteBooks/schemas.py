from marshmallow import Schema, fields

class UserFavoriteBookSchema(Schema):
    book_ids = fields.List(fields.Integer)
