from biblioz import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    biography = db.Column(db.Text)
    img = db.Column(db.String(255))
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relación uno a muchos con Book
    books = db.relationship('Book', back_populates='author')