from fastapi import APIRouter
from app.services.air_service import get_air_pollution
from app.models.pollution_response import PollutionResponse
router = APIRouter()


@router.get("/air-pollution", response_model=PollutionResponse)
async def read_air_pollution(lat: float, lon: float):
    return get_air_pollution(lat, lon)
