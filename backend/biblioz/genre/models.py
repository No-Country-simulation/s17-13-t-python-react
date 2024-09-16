from biblioz import db
from sqlalchemy.orm import relationship
from biblioz.userPrefs.models import UserFavoriteGenre

class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relación uno a muchos con Book
    books = db.relationship('Book', back_populates='genre')

    # Relación muchos a muchos con User
    users = db.relationship('User', secondary=UserFavoriteGenre.__tablename__ , back_populates='genres')