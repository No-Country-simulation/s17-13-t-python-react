from marshmallow import Schema, fields, ValidationError, validates

class BookSchema(Schema):
    title = fields.String(required=True)
    description = fields.String(validate=fields.Length(max=1500), allow_none=True)
    img = fields.String(required=False)
    pages = fields.Int(required=False)
    publisher = fields.String(required=False)

    genre_id = fields.Int(required=True)
    author_id = fields.Int(required=True)

    @validates('title')
    def validate_title(self, value):
        if value is None or value.strip() == '':
            raise ValidationError("El título es obligatorio.")
        elif len(value) < 3:
            raise ValidationError("El título debe tener al menos 3 caracteres.")
        elif len(value) > 50:
            raise ValidationError("El título no puede exceder los 50 caracteres.")

    @validates('description')
    def validate_description(self, value):
        if value is None or value.strip() == '':
            raise ValidationError("La descripción es obligatoria.")
        if len(value) > 1500:
            raise ValidationError("La descripción no puede exceder los 1500 caracteres.")

    @validates('pages')
    def validate_pages(self, value):
        if value <= 0:
            raise ValidationError("El numero de paginas debe ser mayor a 0.")

    
    