from app.services.weather_service import get_weather
from app.models.base import Location
from fastapi import APIRouter, HTTPException
from app.services.location_service import get_location_and_data
from app.models.weather_res import WeatherResponse
from app.models.air_res import PollutionResponse

router = APIRouter()


@router.get("/current-location", response_model=dict)
async def get_current_location():
    try:
        location, weather, pollution = await get_location_and_data()
        return {
            "location": location,
            "weather": weather,
            "pollution": pollution
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
