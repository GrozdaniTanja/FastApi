from app.services.fetch_data_service import fetch_data_from_apis
from app.models.weather_response import WeatherResponse


def get_weather(lat: float, lon: float) -> WeatherResponse:
    weather_data, _ = fetch_data_from_apis(lat, lon)

    temperature_celsius = weather_data["main"]["temp"] - 273.15
    max_temperature_celsius = weather_data["main"]["temp_max"] - 273.15
    min_temperature_celsius = weather_data["main"]["temp_min"] - 273.15
    wind_speed_mph = weather_data["wind"]["speed"] * 2.237
    visibility_km = weather_data["visibility"] / 1000
    rain_mm_per_hour = weather_data.get("rain", {}).get("1h", 0.0)

    return WeatherResponse(
        temperature_celsius=round(temperature_celsius, 2),
        max_temperature_celsius=round(max_temperature_celsius, 2),
        min_temperature_celsius=round(min_temperature_celsius, 2),
        description=weather_data["weather"][0]["description"],
        wind_speed_mph=round(wind_speed_mph, 2),
        humidity_percent=weather_data["main"]["humidity"],
        cloud_cover_percent=weather_data["clouds"]["all"],
        visibility_km=round(visibility_km, 2),
        city_name=weather_data["name"],
        country=weather_data["sys"]["country"],
        rain_mm_per_hour=rain_mm_per_hour,
    )
