from pydantic import BaseModel

from app.models.weather_response import WeatherResponse
from app.models.pollution_response import PollutionResponse


class LocationResponse(BaseModel):
    city: str
    country: str
    latitude: float
    longitude: float
    weather: WeatherResponse
    pollution: PollutionResponse
