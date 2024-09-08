from biblioz import db
from sqlalchemy import ForeignKey

class UserFavoriteGenre(db.Model):

    __tablename__ = 'user_favorite_genres'

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'), primary_key=True)