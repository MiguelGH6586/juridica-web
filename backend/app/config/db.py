# Standard library imports
from pymongo import MongoClient
from dotenv.main import load_dotenv
load_dotenv()
import os 

MONGO_CONNECTION = os.environ["MONGO_CONNECTION"]
MONGO_USER = os.environ["MONGO_USER"]
MONGO_PW = os.environ["MONGO_PW"]
MONGO_CLUSTER = os.environ["MONGO_CLUSTER"]
MONGO_QUERY = os.environ["MONGO_QUERY"]

URI = f"{MONGO_CONNECTION}://{MONGO_USER}:{MONGO_PW}@{MONGO_CLUSTER}/?{MONGO_QUERY}"

# Set conection with db in mongo db
# user: root
# password: secret
# host: db_mongo
# port: 27017
conn = MongoClient(URI)
#conn = MongoClient("mongodb+srv://miguelg97:fhmJdWjsw8Kh7dhi@testproject.vpctwpw.mongodb.net/?retryWrites=true&w=majority")