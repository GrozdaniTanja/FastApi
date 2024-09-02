# Logic to fetch air data
import requests
from app.utils.config import AIR_POLLUTION_URL, API_KEY


def get_air_pollution(lat: float, lon: float):
    url = f"{AIR_POLLUTION_URL}?lat={lat}&lon={lon}&appid={API_KEY}"
    response = requests.get(url)
    return response.json()
