from fastapi import APIRouter, Response, status
from config.db import conn
from schemas.client import clientEntity, clientsEntity
from models.client import Client
from bson import ObjectId
from starlette.status import HTTP_204_NO_CONTENT

client = APIRouter()
database = conn.projectweb.clients

# Get all clients from table "clients" in db
@client.get('/clients', response_model = list[Client], tags= ["clients"])
async def find_all_clients():
    return clientsEntity(database.find())

# Insert new client in table "clients" in db
@client.post('/clients', response_model = Client, tags= ["clients"])
async def create_client(client: Client):
    new_client = dict(client)
    id = database.insert_one(new_client).inserted_id
    user = database.find_one({"_id": id})
    return clientEntity(user)

# Get specific client from table "clients" in db
@client.get('/clients/{id}', response_model = Client, tags= ["clients"])
async def find_client(id: str):
    return clientEntity(database.find_one({"_id": ObjectId(id)}))

# Update specific client from table "clients" in db
@client.put('/clients/{id}', response_model = Client, tags= ["clients"])
async def update_client(id: str, client: Client):
    database.find_one_and_update({"_id": ObjectId(id)},{"$set": dict(client)})
    return clientEntity(database.find_one({"_id": ObjectId(id)}))
    
# Delete specific client in table "clients" in db
@client.delete('/clients/{id}', status_code = status.HTTP_204_NO_CONTENT, tags= ["clients"])
async def delete_client(id: str):
    clientEntity(database.find_one_and_delete({"_id": ObjectId(id)}))
    return Response(status_code=HTTP_204_NO_CONTENT)

# route of test
@client.get('/test', tags=["clients"])
async def test_api() -> dict:
    return {'message': 'success call'}