from fastapi import FastAPI
from app.api import weather, air, search, health, current_search
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow these origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

app.include_router(weather.router, tags=["weather"])
app.include_router(air.router, tags=["air-pollution"])
app.include_router(search.router, tags=["search-location"])
app.include_router(health.router, tags=["health"])
app.include_router(current_search.router)
