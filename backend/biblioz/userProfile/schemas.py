from marshmallow import Schema, fields, ValidationError, validates

class UserProfileSchema(Schema):
    img = fields.String(required=False)
    city = fields.String(required=False)

    @validates('city')
    def validate_city(self, value):
        if value and len(value) > 500:
            raise ValidationError("La direccion no puede exceder los 150 caracteres.")
