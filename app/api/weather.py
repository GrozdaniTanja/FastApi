from fastapi import APIRouter
from app.services.weather_service import get_weather
from app.models.weather_res import WeatherResponse
from app.models.base import Location


router = APIRouter()


@router.get("/weather", response_model=WeatherResponse)
async def read_weather(lat: float, lon: float):
    location = Location(lat=lat, lon=lon)
    return get_weather(location)
