from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello world"

@app.route('/login')
def login():
    return True


if __name__ == '__main__':
    app.run(debug=True)
