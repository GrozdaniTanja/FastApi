import requests
from app.utils.config import AIR_POLLUTION_URL, API_KEY
from app.services.shared_service import fetch_data_from_apis
from app.models.air_res import PollutionResponse
from app.models.base import Location


def get_air_pollution(location: Location) -> PollutionResponse:
    _, air_pollution_data = fetch_data_from_apis(location)

    air_data = air_pollution_data["list"][0]

    return PollutionResponse(
        air_quality_index=air_data["main"]["aqi"],
        carbon_monoxide=air_data["components"]["co"],
        nitric_oxide=air_data["components"]["no"],
        nitrogen_dioxide=air_data["components"]["no2"],
        ozone=air_data["components"]["o3"],
        sulfur_dioxide=air_data["components"]["so2"],
        pm2_5=air_data["components"]["pm2_5"],
        pm10=air_data["components"]["pm10"],
        ammonia=air_data["components"]["nh3"]
    )
