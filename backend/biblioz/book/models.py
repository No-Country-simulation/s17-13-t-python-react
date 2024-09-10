from biblioz import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    img = db.Column(db.String(200))
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relación uno a muchos con Review
    reviews = db.relationship('Review', back_populates='book')

    # Relación muchos a uno con Genre
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'), nullable=False)
    genre = db.relationship('Genre', back_populates='books')

    # # Relación muchos a uno con Author
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'), nullable=False)
    author = db.relationship('Author', back_populates='books')

# class BookImage(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     filename = db.Column(db.String(255), nullable=False)
#     book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
#     book = db.relationship('Book', backref=db.backref('images', lazy=True))
