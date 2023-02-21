from pymongo import MongoClient

# Set conection with db in mongo db
# user: root
# password: secret
# host: db_mongo
# port: 27017
conn = MongoClient('mongodb://root:secret@db_mongo:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true')