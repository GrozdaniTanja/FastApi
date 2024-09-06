import requests
from app.utils.config import GEO_API_URL, GEO_API_KEY, WEATHER_URL, AIR_POLLUTION_URL, API_KEY
from app.models.base import Location
from app.models.air_res import PollutionResponse
from app.models.weather_res import WeatherResponse
from app.services.weather_service import get_weather
from app.services.air_service import get_air_pollution
from app.services.air_service import get_air_pollution


async def get_location_and_data() -> (Location, WeatherResponse, PollutionResponse):
    ip_client = requests.get(GEO_API_URL, params={"apiKey": GEO_API_KEY})
    if ip_client.status_code != 200:
        raise Exception(f"Error fetching IP location data: {
                        ip_client.status_code}")

    ip_data = ip_client.json()
    latitude = ip_data["latitude"]
    longitude = ip_data["longitude"]
    location = Location(lat=latitude, lon=longitude)

    weather = get_weather(location)
    pollution = get_air_pollution(location)

    return location, weather, pollution
