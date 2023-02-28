from pymongo import MongoClient

#from urllib.parse import quote_plus
#username = quote_plus('miguelg97')
#password = quote_plus('fhmJdWjsw8Kh7dhi')
#cluster = 'testproject.vpctwpw.mongodb.net'
#authSource = '<authSource>'
#authMechanism = '<authMechanism>'
#uri = 'mongodb+srv://' + username + ':' + password + '@' + cluster + '/?authSource=' + authSource + '&authMechanism=' + authMechanism
#client = MongoClient(uri)
#result = client["<dbName"]["<collName>"].find()

#"mongodb+srv://miguelg97:fhmJdWjsw8Kh7dhi@testproject.vpctwpw.mongodb.net/?retryWrites=true&w=majority"
#"mongodb://root:secret@db_mongo:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true"

# Set conection with db in mongo db
# user: root
# password: secret
# host: db_mongo
# port: 27017
conn = MongoClient('mongodb://root:secret@db_mongo:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true')
#conn = MongoClient("mongodb+srv://miguelg97:fhmJdWjsw8Kh7dhi@testproject.vpctwpw.mongodb.net/?retryWrites=true&w=majority")