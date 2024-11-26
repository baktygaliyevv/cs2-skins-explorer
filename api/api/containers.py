from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()

@router.get("/")
async def get_containers():
    response = requests.get("https://bymykel.github.io/CSGO-API/api/en/crates.json")
    if response.status_code == 200:
        all_containers = response.json()
        filtered_containers = []

        for container in all_containers:
            if "Case" in container["name"]:
                container_data = {
                    "name": container["name"],
                    "image": container["image"],
                    "skins": [
                        {
                            "name": skin["name"],
                            "rarity": skin["rarity"]["name"],
                            "image": skin["image"]
                        }
                        for skin in container["contains"]
                    ]
                }
                filtered_containers.append(container_data)

        return filtered_containers
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to retrieve containers")
