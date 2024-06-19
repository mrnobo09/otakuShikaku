from flask import Blueprint
from flask_jwt_extended import jwt_required,create_access_token
from flask import jsonify,request
from models import User
from flask_bcrypt import bcrypt

main_routes = Blueprint('main_routes',__name__)

@main_routes.route('/login')
def login():
    data = request.get_json
    email = data['username']
    password = data['password']
    print(f'Recieved data {data}')

    user  = User.query.filter_by(email = email).first()

    if user and bcrypt.checkpw(user.password,password):
        access_token = create_access_token(identity = user.id)
        return jsonify({'message':'Login Success', 'access_token':access_token,'User Data': user })
    else:
        return jsonify({'message': 'Login Failed'}),401
    
@main_routes.route('/signup')
def create_user():
    data = request.get_json
    new_user = User(
        username = data['username'],
        firstname = data['firstname'],
        lastname = data['lastname'],
        email = data['email'],
        password = bcrypt.hashpw(data['password'],bcrypt.gensalt())
    )
