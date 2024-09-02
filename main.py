from fastapi import FastAPI
import os
import requests
from dotenv import load_dotenv
from app.api import weather, air

app = FastAPI()

app.include_router(weather.router, prefix="/weather", tags=["weather"])
app.include_router(air.router, prefix="/air-pollution",
                   tags=["air-pollution"])

'''
load_dotenv()

AIR_POLLUTION_URL = os.getenv('AIR_POLLUTION_URL')
WEATHER_URL = os.getenv('WEATHER_URL')
API_KEY = os.getenv('API_KEY')


@app.get("/")
def read_root():
    return {"Hi": "world"}


def get_weather(lat: float, lon: float):
    url = f"{WEATHER_URL}?lat={lat}&lon={lon}&appid={API_KEY}"
    response = requests.get(url)
    return response.json()


def get_air_pollution(lat: float, lon: float):
    url = f"{AIR_POLLUTION_URL}?lat={lat}&lon={lon}&appid={API_KEY}"
    response = requests.get(url)
    return response.json()


@app.get("/weather")
def read_weather(lat: float, lon: float):
    return get_weather(lat, lon)


@app.get("/air-pollution")
def read_air_pollution(lat: float, lon: float):
    return get_air_pollution(lat, lon)

'''
