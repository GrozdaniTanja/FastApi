from pydantic import BaseModel
from typing import Optional


class WeatherResponse(BaseModel):
    temperature_celsius: float
    max_temperature_celsius: float
    min_temperature_celsius: float
    description: str
    wind_speed_mph: float
    humidity_percent: int
    cloud_cover_percent: int
    visibility_km: float
    city_name: str
    country: str
    rain_mm_per_hour: Optional[float] = None
