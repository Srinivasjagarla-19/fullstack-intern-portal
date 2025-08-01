from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../frontend')
CORS(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/dashboard', methods=['GET'])
def get_dashboard_data():
    data = {
        'name': 'Srinivas',
        'referral_code': 'SheCanFoundation2025',
        'donations_raised': 1500
    }
    return jsonify(data)

@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard_data():
    leaderboard = [
        {'name': 'Alex', 'donations_raised': 2500},
        {'name': 'Jamie', 'donations_raised': 2200},
        {'name': 'Srinivas', 'donations_raised': 1500},
        {'name': 'Taylor', 'donations_raised': 1200},
        {'name': 'Casey', 'donations_raised': 950}
    ]
    return jsonify(leaderboard)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
