from marshmallow import Schema, fields, ValidationError, validates

class GenreSchema(Schema):
    name = fields.String(required=False)

    @validates('name')
    def validate_name(self, value):
        if value is None or value.strip() == '':
            raise ValidationError("El nombre es obligatorio")
        elif len(value) < 3:
            raise ValidationError("El nombre debe tener al menos 3 caracteres")
        elif len(value) > 50:
            raise ValidationError("El nombre no puede exceder los 50 caracteres")