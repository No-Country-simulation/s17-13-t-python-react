from biblioz import db
from sqlalchemy.orm import relationship
from sqlalchemy import ForeignKey

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(255), nullable=True)  
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relación muchos a uno con User
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    user = db.relationship('User', back_populates='reviews')

    # Relación muchos a uno con Book
    book_id = db.Column(db.Integer, ForeignKey('book.id'))
    book = db.relationship('Book', back_populates='reviews')
