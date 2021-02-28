from flask import jsonify, make_response
from app import app

@app.errorhandler(404)
def notFound(error):
    return make_response(jsonify({'error':'Not found'}),404)