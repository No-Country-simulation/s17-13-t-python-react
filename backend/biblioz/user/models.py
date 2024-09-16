from biblioz import db
from sqlalchemy.orm import relationship
from biblioz.userPrefs.models import UserFavoriteGenre

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relacion uno a uno con UserProfile
    user_profile = db.relationship('UserProfile', back_populates='user', uselist=False)

    # Relación uno a muchos con Review
    reviews = db.relationship('Review', back_populates='user')

    # Relación muchos a muchos con Genre
    genres = db.relationship('Genre', secondary=UserFavoriteGenre.__tablename__ , back_populates='users')