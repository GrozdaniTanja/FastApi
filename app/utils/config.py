import os
from dotenv import load_dotenv

load_dotenv()

WEATHER_URL = os.getenv("WEATHER_URL")
AIR_POLLUTION_URL = os.getenv("AIR_POLLUTION_URL")
API_KEY = os.getenv("API_KEY")
GEO_API_URL = os.getenv("GEO_API_URL")
GEO_API_KEY = os.getenv("GEO_API_KEY")
