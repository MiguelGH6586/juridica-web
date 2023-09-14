# Standard library imports
from pymongo import MongoClient
from dotenv.main import load_dotenv
load_dotenv()
import os 

MONGO_CONNECTION = os.environ.get("MONGO_CONNECTION")
MONGO_USER = os.environ.get("MONGO_USER")
MONGO_PW = os.environ.get("MONGO_PW")
MONGO_CLUSTER = os.environ.get("MONGO_CLUSTER")
MONGO_QUERY = os.environ.get("MONGO_QUERY")

URI = f"{MONGO_CONNECTION}://{MONGO_USER}:{MONGO_PW}@{MONGO_CLUSTER}/?{MONGO_QUERY}"

# Set conection with db in mongo db
# user: root
# password: secret
# host: db_mongo
# port: 27017
conn = MongoClient(URI)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)