from biblioz import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Relationship

class SearchHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    search_count = db.Column(db.Integer, default=1)

    # Relación muchos a uno con Book
    book_id = db.Column(db.Integer, db.ForeignKey('book.id',ondelete='SET NULL'), nullable=False)
    book = db.relationship('Book', back_populates='searches')
