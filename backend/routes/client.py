from fastapi import APIRouter, Response, status
from config.db import conn
from schemas.client import clientEntity, clientsEntity
from models.client import Client
from bson import ObjectId
from starlette.status import HTTP_204_NO_CONTENT

client = APIRouter()

# Get all clients from table "clients" in db
@client.get('/clients', response_model = list[Client], tags= ["clients"])
def find_all_clients():
    return clientsEntity(conn.local.clients.find())

# Insert new client in table "clients" in db
@client.post('/clients', response_model = Client, tags= ["clients"])
def create_client(client: Client):
    new_client = dict(client)
    id = conn.local.clients.insert_one(new_client).inserted_id
    user = conn.local.clients.find_one({"_id": id})
    return clientEntity(user)

# Get specific client from table "clients" in db
@client.get('/clients/{id}', response_model = Client, tags= ["clients"])
def find_client(id: str):
    return clientEntity(conn.local.clients.find_one({"_id": ObjectId(id)}))

# Update specific client from table "clients" in db
@client.put('/clients/{id}', response_model = Client, tags= ["clients"])
def update_client(id: str, client: Client):
    conn.local.clients.find_one_and_update({"_id": ObjectId(id)},{"$set": dict(client)})
    return clientEntity(conn.local.clients.find_one({"_id": ObjectId(id)}))
    
# Delete specific client in table "clients" in db
@client.delete('/clients/{id}', status_code = status.HTTP_204_NO_CONTENT, tags= ["clients"])
def delete_client(id: str):
    clientEntity(conn.local.clients.find_one_and_delete({"_id": ObjectId(id)}))
    return Response(status_code=HTTP_204_NO_CONTENT)