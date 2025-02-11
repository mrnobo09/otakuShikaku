from flask import Blueprint
from flask_jwt_extended import create_access_token,create_refresh_token
from flask import jsonify,request
from models import User,db
from flask_bcrypt import bcrypt

main_routes = Blueprint('main_routes',__name__)

@main_routes.route('/login',methods = ["POST"])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password'].encode('utf-8')
    print(f'Recieved data {data}')

    user  = User.query.filter_by(email = email).first()

    if user and bcrypt.checkpw(password,user.password.encode('utf-8')):
        access_token = create_access_token(identity = user.id)
        refresh_token = create_refresh_token(identity = user.id)
        userData = {
            "username":user.username,
            "firstname":user.firstname,
            "lastname":user.lastname,
            "email":user.email
        }
        return jsonify({'message':'Login Success', 'access_token':access_token,'refresh_token':refresh_token,'user_data': userData })
    else:
        return jsonify({'message': 'Login Failed'}),401
    
@main_routes.route('/signup',methods = ['POST'])
def create_user():
    data = request.get_json()
    new_user = User(
        username = data['username'],
        firstname = data['firstname'],
        lastname = data['lastname'],
        email = data['email'],
        password = bcrypt.hashpw(data['password'].encode('utf-8'),bcrypt.gensalt())
    )

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "Error creating user", "error": str(e)}), 400
    

