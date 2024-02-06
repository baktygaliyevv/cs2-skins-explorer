from django.http import JsonResponse
import requests

def get_skins(request, category, skin_type=None):
    response = requests.get('https://bymykel.github.io/CSGO-API/api/en/skins.json')
    if response.status_code == 200:
        all_items = response.json()
        filtered_items = [
            {
                'name': item['name'],
                'rarity': item['rarity']['name'],
                'image': item['image']
            }
            for item in all_items 
            if category.lower() in item['category']['name'].lower()
        ]
        if skin_type:
            filtered_items = [item for item in filtered_items if skin_type.lower() in item['name'].lower()]

        return JsonResponse(filtered_items, safe=False)
    else:
        return JsonResponse({'error': 'Failed to retrieve items'}, status=response.status_code)
