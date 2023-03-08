# Framework FASTAPI imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Local application imports
from .routes.client import client
from .docs import tags_metadata

app = FastAPI(
    title="API Project Web",
    description="This is a API to do tests",
    version="0.0.1",
    openapi_tags=tags_metadata
)

origins = [
    "http://backend_web:80",
    "http://frontapp_c:3000",
    "http://localhost:3000",
    "http://localhost:8080"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(client)
