from flask import Flask, jsonify, request, abort
import database

app = Flask(__name__)

@app.route('/api/country/<int:id>', methods=['GET'])
def get_country(id):
    return jsonify(database.get_country(id))

@app.route('/api/leaderboard/', methods=['GET'])
def get_leaderboard():
    return jsonify(database.get_leaderboard())

@app.route('/api/leaderboard', methods=['POST'])
def post_leaderboard():
    data = request.json
    name = data["name"]
    score = data["score"]
    return database.post_leaderboard(name, score)

if __name__ == '__main__':
    app.run()