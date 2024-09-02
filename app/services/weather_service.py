# Logic to fetch weather data
import requests
from app.utils.config import WEATHER_URL, API_KEY


def get_weather(lat: float, lon: float):
    url = f"{WEATHER_URL}?lat={lat}&lon={lon}&appid={API_KEY}"
    response = requests.get(url)
    return response.json()
