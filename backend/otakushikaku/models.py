from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    firstname = db.Column(db.String(155))
    lastname = db.Column(db.String(155))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    anime_list = db.relationship('AnimeList',back_populates = 'user' , lazy=True)

    def __repr__(self):
        return f'<User {self.username}>'
    
class AnimeList(db.Model):
    anime_id = db.Column(db.Integer,primary_key = True)
    animename = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'),nullable = False)

    user = db.relationship('User',back_populates = 'anime_list',lazy=True)

    def __repr__(self):
        return f'<UserID {self.user_id} <anime_id {self.anime_id}>'
