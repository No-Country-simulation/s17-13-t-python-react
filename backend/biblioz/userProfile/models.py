from biblioz import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class UserProfile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.String(255))
    biography = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relación uno a uno con User
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', back_populates='user_profile')
