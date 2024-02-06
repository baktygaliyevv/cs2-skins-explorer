# from django.http import JsonResponse
# import requests

# def get_skins(request, category):
#     response = requests.get('https://bymykel.github.io/CSGO-API/api/en/skins.json')
#     if response.status_code == 200:
#         all_items = response.json()
#         filtered_items = [
#             {
#                 'name': item['name'],
#                 'rarity': item['rarity']['name'],
#                 'image': item['image']
#             }
#             for item in all_items if item['category']['name'] == category
#         ]
#         return JsonResponse(filtered_items, safe=False)
#     else:
#         return JsonResponse({'error': 'Failed to retrieve items'}, status=response.status_code)
from django.http import JsonResponse
import requests

def get_skins(request, category):
    item_filter = request.GET.get('filter', '') 
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
            if item['category']['name'].lower() == category.lower() and item_filter.lower() in item['name'].lower()
        ]
        return JsonResponse(filtered_items, safe=False)
    else:
        return JsonResponse({'error': 'Failed to retrieve items'}, status=response.status_code)

