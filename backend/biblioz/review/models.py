from biblioz import db
from sqlalchemy.orm import relationship

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(255), nullable=True)  
    created_at = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=db.func.now(), server_default=db.func.now())

    # Relacion de muchos a uno con el libro
    # book_id = db.Column(db.Integer, db.ForeignKey('book.id'))
    # book = relationship('Book', back_populates='reviews')