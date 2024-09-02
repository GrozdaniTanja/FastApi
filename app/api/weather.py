from fastapi import APIRouter
from app.services.weather_service import get_weather

router = APIRouter()


@router.get("/")
async def read_weather(lat: float, lon: float):
    return get_weather(lat, lon)
