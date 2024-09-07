
import requests
from fastapi import HTTPException
from app.utils.config import Config


def get_coordinates_by_city_name(city_name: str):
    geocode_url = f"{Config.GEOCODING_API_URL}?q={
        city_name}&limit=1&appid={Config.API_KEY}"
    response = requests.get(geocode_url)
    if response.status_code != 200 or not response.json():
        raise HTTPException(status_code=404, detail="Location not found")

    geocode_data = response.json()[0]
    return {
        "city": geocode_data["name"],
        "country": geocode_data["country"],
        "latitude": geocode_data["lat"],
        "longitude": geocode_data["lon"]
    }


def get_city_name_by_coordinates(latitude: float, longitude: float):
    reverse_geocode_url = f"{Config.GEOCODING_REVERSE_API_URL}?lat={
        latitude}&lon={longitude}&limit=1&appid={Config.API_KEY}"
    response = requests.get(reverse_geocode_url)
    if response.status_code != 200 or not response.json():
        raise HTTPException(status_code=404, detail="Location not found")

    location_data = response.json()[0]
    return {
        "city":  location_data["name"],
        "country": location_data["country"],
        "latitude": location_data["lat"],
        "longitude": location_data["lon"]
    }
