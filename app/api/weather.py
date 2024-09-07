from fastapi import APIRouter
from app.services.weather_service import get_weather
from app.models.weather_response import WeatherResponse


router = APIRouter()


@router.get("/weather", response_model=WeatherResponse)
async def read_weather(lat: float, lon: float):
    return get_weather(lat, lon)
