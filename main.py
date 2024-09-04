from fastapi import FastAPI
from app.api import weather, air, search

app = FastAPI()

app.include_router(weather.router, tags=["weather"])
app.include_router(air.router, tags=["air-pollution"])
app.include_router(search.router, tags=["search-location"])
