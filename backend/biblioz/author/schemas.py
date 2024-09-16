from marshmallow import Schema, fields, ValidationError, validates

class AuthorSchema(Schema):
    name = fields.String(required=True)
    biography = fields.String(validate=fields.Length(max=1000))
    img = fields.String(required=False)

    @validates('name')
    def validate_name(self, value):
        if value is None or value.strip() == '':
            raise ValidationError("El nombre es obligatorio")
        elif len(value) < 3:
            raise ValidationError("El nombre debe al menos 3 caracteres")
        elif len(value) > 50:
            raise ValidationError("El nombre no puede exceder los 50 caracteres")

    @validates('biography')
    def validate_biography(self, value):
        if value is None or value.strip() == '':
            raise ValidationError("La biografia es obligatoria")
        elif len(value) > 1000:
            raise ValidationError("La biografia no puede exceder los 1000 caracteres")