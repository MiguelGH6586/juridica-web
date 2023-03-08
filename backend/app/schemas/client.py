def clientEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "cc": item["cc"],
        "first_name": item["first_name"],
        "last_name": item["last_name"],
        "cellphone": item["cellphone"],
        "email": item["email"]
    }

def clientsEntity(entity) -> list:
    return [clientEntity(item) for item in entity]