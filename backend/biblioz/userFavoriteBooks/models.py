from biblioz import db
from sqlalchemy import ForeignKey

class UserFavoriteBooks(db.Model):

    __tablename__ = 'user_favorite_books'

    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)