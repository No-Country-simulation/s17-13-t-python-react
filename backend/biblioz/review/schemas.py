from marshmallow import Schema, fields, ValidationError, validates

class ReviewSchema(Schema):
    rating = fields.Int()  
    comment = fields.Str()

    user_id = fields.Int(required=True)
    book_id = fields.Int(required=True)

    @validates('rating')
    def validate_rating(self, value):

        if not (1 <= value <= 5): 
            raise ValidationError("El rating debe estar entre 1 y 5 estrellas")

    @validates('comment')
    def validate_comment(self, value):
        if value and len(value) < 3:
            raise ValidationError("El comentario debe tener al menos 3 caracteres")
        elif value and len(value) > 255:
            raise ValidationError("El comentario no puede exceder los 255 caracteres")
