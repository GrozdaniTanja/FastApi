import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    WEATHER_URL = os.getenv("WEATHER_URL")
    AIR_POLLUTION_URL = os.getenv("AIR_POLLUTION_URL")
    API_KEY = os.getenv("API_KEY")
    GEOCODING_API_URL = os.getenv("GEOCODING_API_URL")
    GEOCODING_REVERSE_API_URL = os.getenv("GEOCODING_REVERSE_API_URL")


config = Config()
