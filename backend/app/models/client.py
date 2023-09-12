# Standard library imports
from typing import Optional
from pydantic import BaseModel

class Client(BaseModel):
    id: Optional[str] | None = None
    cc: str
    first_name: str
    last_name: str
    cellphone: str
    email: str