from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()

@router.get("/{category}/")
async def get_skins_by_category(category: str):
    response = requests.get("https://bymykel.github.io/CSGO-API/api/en/skins.json")
    if response.status_code == 200:
        all_items = response.json()
        filtered_items = []

        for item in all_items:
            if item.get("category") and item["category"].get("name"):
                item_category_name = item["category"]["name"].lower()
                if category.lower() in item_category_name:
                    filtered_items.append({
                        "name": item["name"],
                        "rarity": item["rarity"]["name"],
                        "image": item["image"]
                    })

        return filtered_items
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to retrieve items")


@router.get("/{category}/{skin_type}/")
async def get_specific_skin(category: str, skin_type: str):
    response = requests.get("https://bymykel.github.io/CSGO-API/api/en/skins.json")
    if response.status_code == 200:
        all_items = response.json()
        filtered_items = []

        for item in all_items:
            if item.get("category") and item["category"].get("name") and item.get("name"):
                item_category_name = item["category"]["name"].lower()
                item_name = item["name"].lower()
                if category.lower() in item_category_name and skin_type.lower() in item_name:
                    filtered_items.append({
                        "name": item["name"],
                        "rarity": item["rarity"]["name"],
                        "image": item["image"]
                    })

        return filtered_items
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to retrieve items")
