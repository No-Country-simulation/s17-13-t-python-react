import re
from marshmallow import Schema, fields, validates, ValidationError

class UserSchema(Schema):
    name = fields.String(required=True)
    email = fields.String(required=True)
    password = fields.String(required=True)

    @validates('name')
    def validate_name(self, value):
        if len(value) < 3:
            raise ValidationError("El nombre debe tener mínimo 3 caracteres.")

    @validates('email')
    def validate_email(self, value):
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, value):
            raise ValidationError("Correo electrónico inválido.")

    @validates('password')
    def validate_password(self, value):
        if len(value) < 8:
            raise ValidationError("La contraseña debe tener mínimo 8 caracteres.")
            
class UserLoginSchema(Schema):
    email = fields.String(
        required=True,
        error_messages={"required": "El correo electrónico es obligatorio."}
    )
    password = fields.String(
        required=True,
        error_messages={"required": "La contraseña es obligatoria."}
    )

    @validates('email')
    def validate_email(self, value):
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not value:
            raise ValidationError("El correo es obligatoria.")
        if not re.match(email_regex, value):
            raise ValidationError("Correo electrónico inválido.")
    
    @validates('password')
    def validate_password(self, value):
        if not value:
            raise ValidationError("La contraseña es obligatoria.")
        if len(value) < 8:
            raise ValidationError("La contraseña debe tener mínimo 8 caracteres.")
