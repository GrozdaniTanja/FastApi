import requests
from app.utils.config import Config


def fetch_data_from_apis(lat: float, lon: float):
    weather_url = f"{Config.WEATHER_URL}?lat={
        lat}&lon={lon}&appid={Config.API_KEY}"
    air_pollution_url = f"{Config.AIR_POLLUTION_URL}?lat={
        lat}&lon={lon}&appid={Config.API_KEY}"

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
