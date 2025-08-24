import os
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from models import db
from Blueprints.main_routes import main_routes
from Blueprints.MAL_routes import MAL_routes
import pymysql
from dotenv import load_dotenv

pymysql.install_as_MySQLdb()
load_dotenv()  # ✅ ensures .env is loaded

def create_app():
    app = Flask(__name__)
    CORS(app)

    # ✅ Try both DATABASE_URL and SQLALCHEMY_DATABASE_URI
    db_url = os.getenv("DATABASE_URL") or os.getenv("SQLALCHEMY_DATABASE_URI")

    if not db_url:
        raise RuntimeError("❌ DATABASE_URL is not set in environment or .env file")

    app.config['SQLALCHEMY_DATABASE_URI'] = db_url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        "connect_args": {
            "ssl": {
                "ssl_mode": "REQUIRED"
            }
        }
    }

    app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY", "your_secret_key")
    app.config['JWT_TOKEN_LOCATION'] = ['headers']

    db.init_app(app)

    with app.app_context():
        db.create_all()

    jwt = JWTManager(app)

    app.register_blueprint(main_routes)
    app.register_blueprint(MAL_routes)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
