import requests
from app.utils.config import WEATHER_URL, AIR_POLLUTION_URL, API_KEY
from app.models.base import Location


def fetch_data_from_apis(location: Location):
    weather_url = f"{WEATHER_URL}?lat={
        location.lat}&lon={location.lon}&appid={API_KEY}"
    air_pollution_url = f"{AIR_POLLUTION_URL}?lat={
        location.lat}&lon={location.lon}&appid={API_KEY}"

    weather_response = requests.get(weather_url)

    if weather_response.status_code != 200:
        raise Exception(f"Error fetching weather data: {
                        weather_response.status_code}")
    weather_data = weather_response.json()

    air_pollution_response = requests.get(air_pollution_url)

    if air_pollution_response.status_code != 200:
        raise Exception(f"Error fetching air pollution data: {
                        air_pollution_response.status_code}")
    air_pollution_data = air_pollution_response.json()

    return weather_data, air_pollution_data
