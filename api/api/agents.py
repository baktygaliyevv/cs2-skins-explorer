from fastapi import APIRouter, HTTPException
import httpx
import requests

router = APIRouter()

@router.get("/")
async def get_agents():
    async with httpx.AsyncClient() as client:
        response = await client.get("https://bymykel.github.io/CSGO-API/api/en/agents.json", timeout=10)
        if response.status_code == 200:
            all_agents = response.json()
            filtered_agents = [
                {
                    "id": agent["id"],
                    "name": agent["name"],
                    "description": agent["description"],
                    "rarity": agent["rarity"]["name"],
                    "image": agent["image"],
                    "collections": [
                        {
                            "id": collection["id"],
                            "name": collection["name"],
                            "image": collection["image"]
                        } for collection in agent["collections"]
                    ],
                    "team": agent["team"]["name"]
                }
                for agent in all_agents
            ]
            return filtered_agents
        else:
                raise HTTPException(status_code=response.status_code, detail="Failed to retrieve agents")
