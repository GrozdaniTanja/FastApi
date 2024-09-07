from fastapi import APIRouter
from app.services.geocoding import get_city_name_by_coordinates
from app.services.air_service import get_air_pollution
from app.services.weather_service import get_weather
from app.models.base import LocationResponse

router = APIRouter()


@router.get("/current-location", response_model=LocationResponse)
async def get_current_location(latitude: float, longitude: float):
    location_data = get_city_name_by_coordinates(latitude, longitude)
    weather_data = get_weather(
        location_data['latitude'], location_data['longitude'])
    pollution_data = get_air_pollution(
        location_data['latitude'], location_data['longitude'])

    return LocationResponse(
        city=location_data["city"],
        country=location_data["country"],
        latitude=latitude,
        longitude=longitude,
        weather=weather_data,
        pollution=pollution_data
    )
