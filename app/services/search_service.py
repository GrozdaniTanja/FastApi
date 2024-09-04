from app.utils.location_utils import get_coordinates_by_location_name
from app.services.weather_service import get_weather
from app.services.air_service import get_air_pollution


def search_data_by_location(location_name: str):
    location = get_coordinates_by_location_name(location_name)

    weather_data = get_weather(location)
    air_pollution_data = get_air_pollution(location)

    return {
        "weather": weather_data,
        "air_pollution": air_pollution_data
    }
