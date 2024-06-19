from flask import Flask
from flask_jwt_extended import JWTManager
from models import db
from Blueprints.main_routes import main_routes
import pymysql 
pymysql.install_as_MySQLdb()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:yolo0009@localhost/otakushikaku_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    app.config['JWT_SECRET_KEY'] = 'your_secret_key'
    app.config['JWT_TOKEN_LOCATION'] = ['headers']

    db.init_app(app)

    with app.app_context():
        db.create_all()

    jwt = JWTManager(app)

    app.register_blueprint(main_routes)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
