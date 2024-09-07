
from fastapi import APIRouter
from app.services.geocoding import get_coordinates_by_city_name
from app.services.air_service import get_air_pollution
from app.services.weather_service import get_weather
from app.models.base import LocationResponse

router = APIRouter()


@router.get("/location/{city_name}", response_model=LocationResponse)
def get_weather_and_pollution_by_city(city_name: str):
    location_data = get_coordinates_by_city_name(city_name)
    weather_data = get_weather(
        location_data['latitude'], location_data['longitude'])
    pollution_data = get_air_pollution(
        location_data['latitude'], location_data['longitude'])

    return {
        "city": location_data["city"],
        "country": location_data["country"],
        "latitude": location_data["latitude"],
        "longitude": location_data["longitude"],
        "weather": weather_data,
        "pollution": pollution_data
    }
