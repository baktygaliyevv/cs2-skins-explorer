from django.http import JsonResponse
import requests

def get_containers(request):
    response = requests.get('https://bymykel.github.io/CSGO-API/api/en/crates.json')
    if response.status_code == 200:
        all_containers = response.json()
        filtered_containers = []

        for container in all_containers:
            if 'Case' in container['name']:
                container_data = {
                    'name': container['name'],
                    'image': container['image'],
                    'skins': []
                }

                for skin in container['contains']:
                    skin_data = {
                        'name': skin['name'],
                        'rarity': skin['rarity']['name'],
                        'image': skin['image']
                    }
                    container_data['skins'].append(skin_data)

                filtered_containers.append(container_data)

        return JsonResponse(filtered_containers, safe=False)
    else:
        return JsonResponse({'error': 'Failed to retrieve containers'}, status=response.status_code)
