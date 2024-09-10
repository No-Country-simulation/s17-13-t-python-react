from marshmallow import Schema, fields, ValidationError, validates

class UserProfileSchema(Schema):
    img = fields.String(required=False)
    biography = fields.String(required=False)

    @validates('biography')
    def validate_biography(self, value):
        if value and len(value) > 500:
            raise ValidationError("La biografía no puede exceder los 500 caracteres.")
