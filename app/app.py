from flask import Flask, jsonify, request
from app.database import *
from flask_cors import CORS
import ast

app = Flask(__name__)
cors = CORS(app, resources={r'/api/*' : {'origins' : 'https://quiz.ourvoy.fr'}})
#cors = CORS(app, resources={r'*' : {'origins' : 'http://localhost:3000'}})

@app.route('/country/<int:id>', methods=['GET'])
def get_country(id):
    return jsonify(database_get_country(id))

@app.route('/leaderboard/', methods=['GET'])
def get_leaderboard():
    return jsonify(database_get_leaderboard())

@app.route('/leaderboard/', methods=['POST'])
def post_leaderboard():
    """
    if (request.json == None):
        data = request.data
        data = ast.literal_eval(data.decode("utf-8"))
    else:
        data = request.json
    """
    data = request.json
    name = data["name"]
    score = data["score"]
    database_post_leaderboard(name, score)
    return {'request': 'sucess'}