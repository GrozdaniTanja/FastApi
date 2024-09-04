import requests
from app.utils.config import WEATHER_URL, API_KEY
from app.models.base import Location


def get_coordinates_by_location_name(location_name: str) -> Location:
    url = f"{WEATHER_URL}?q={location_name}&appid={API_KEY}"
    response = requests.get(url)

    if response.status_code != 200:
        raise Exception(f"Error fetching data: {response.status_code}")

    data = response.json()

    latitude = data["coord"]["lat"]
    longitude = data["coord"]["lon"]

    return Location(lat=latitude, lon=longitude)
