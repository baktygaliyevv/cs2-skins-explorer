import requests
import time

url = "https://bymykel.github.io/CSGO-API/api/en/skins.json"

try:
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    latency = end_time - start_time

    if response.status_code == 200:
        print(f"API available. Latency: {latency:.2f}s")
    else:
        print(f"API unavailable. Status: {response.status_code}")
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")
