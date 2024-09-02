from fastapi import APIRouter
from app.services.air_service import get_air_pollution

router = APIRouter()


@router.get("/")
async def read_air_pollution(lat: float, lon: float):
    return get_air_pollution(lat, lon)
