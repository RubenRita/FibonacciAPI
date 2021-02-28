from flask import Flask
from config import Config

app = Flask(__name__)

from app.net import api, errors
app.config.from_object(Config)