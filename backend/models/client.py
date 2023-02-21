from typing import Optional
from pydantic import BaseModel

class Client(BaseModel):
    id: Optional[str]
    cc: str
    first_name: str
    last_name: str
    cellphone: str
    email: str