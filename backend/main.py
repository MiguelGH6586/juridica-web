from fastapi import FastAPI
from routes.client import client
from docs import tags_metadata

app = FastAPI(
    title="API Project Web",
    description="This is a API to do tests",
    version="0.0.1",
    openapi_tags=tags_metadata
)

app.include_router(client)

