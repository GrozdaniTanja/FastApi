from fastapi import APIRouter
from app.services.air_service import get_air_pollution
from app.models.air_res import PollutionResponse
from app.models.base import Location
router = APIRouter()


@router.get("/air-pollution", response_model=PollutionResponse)
async def read_air_pollution(lat: float, lon: float):
    location = Location(lat=lat, lon=lon)
    return get_air_pollution(location)
