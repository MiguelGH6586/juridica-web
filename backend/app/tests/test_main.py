# Framework FASTAPI imports
from fastapi.testclient import TestClient

# Local application imports
from ..main import app

client = TestClient(app)

def test_create_client():
    response = client.post(
        "/clients",
        json={
            "cc": "333333",
            "first_name": "test3",
            "last_name": "test3",
            "cellphone": "333333",
            "email": "333333@gmail.com"
        }
    )
    assert response.status_code == 200
    assert response.json() == {
        "cc": "333333",
        "first_name": "test3",
        "last_name": "test3",
        "cellphone": "333333",
        "email": "333333@gmail.com"
    }