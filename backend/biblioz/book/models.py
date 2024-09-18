from biblioz import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from biblioz.userFavs.models import UserFavoriteBook

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    img = db.Column(db.String(200))
    pages = db.Column(db.Integer, nullable=True)
    publisher = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relación uno a muchos con Review
    reviews = db.relationship('Review', back_populates='book')

    # Relación muchos a uno con Genre
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id', ondelete='SET NULL'), nullable=False)
    genre = db.relationship('Genre', back_populates='books')

    # # Relación muchos a uno con Author
    author_id = db.Column(db.Integer, db.ForeignKey('author.id', ondelete='SET NULL'), nullable=False)
    author = db.relationship('Author', back_populates='books')

    # Relación uno a muchos con SearchHistory
    searches = db.relationship('SearchHistory', back_populates='book')

    # Relación muchos a muchos con User
    users = db.relationship('User', secondary=UserFavoriteBook.__tablename__ , back_populates='books')