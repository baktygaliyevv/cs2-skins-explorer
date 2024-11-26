from django.http import JsonResponse
import requests

def get_agents(request):
    response = requests.get('https://bymykel.github.io/CSGO-API/api/en/agents.json')
    if response.status_code == 200:
        all_agents = response.json()
        filtered_agents = [{
            'id': agent['id'],
            'name': agent['name'],
            'description': agent['description'],
            'rarity': agent['rarity']['name'],
            'image': agent['image'],
            'collections': [{
                'id': collection['id'],
                'name': collection['name'],
                'image': collection['image']
            } for collection in agent['collections']],
            'team': agent['team']['name']
        } for agent in all_agents]

        return JsonResponse(filtered_agents, safe=False)
    else:
        return JsonResponse({'error': 'Failed to retrieve items'}, status=response.status_code)
