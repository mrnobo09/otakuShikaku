from flask import Blueprint
from flask_jwt_extended import jwt_required
from flask import jsonify,request
from models import User,db
from jikanpy import Jikan

MAL_routes = Blueprint('MAL_routes',__name__)


@MAL_routes.route('/this_season',methods = ["GET"])
@jwt_required()
def this_season():
    jikan = Jikan()
    current_season = jikan.seasons(extension='now')
    print(current_season)
    return current_season






