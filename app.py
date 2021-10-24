from flask import Flask, jsonify, request, abort
from flask.wrappers import Response
import database
import ast

app = Flask(__name__)

@app.route('/api/country/<int:id>', methods=['GET'])
def get_country(id):
    return jsonify(database.get_country(id))

@app.route('/api/leaderboard/', methods=['GET'])
def get_leaderboard():
    return jsonify(database.get_leaderboard())

@app.route('/api/leaderboard', methods=['POST'])
def post_leaderboard():
    if (request.json == None):
        data = request.data
        data = ast.literal_eval(data.decode("utf-8"))
    else:
        data = request.json
    name = data["name"]
    score = data["score"]
    database.post_leaderboard(name, score)
    #reponse = Response()
    #reponse.headers.add('Access-Control-Allow-Origin', '*')
    return {'request': 'sucess'}
    



@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

if __name__ == '__main__':
    app.run()