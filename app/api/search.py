
from fastapi import APIRouter
from app.services.search_service import search_data_by_location

router = APIRouter()


@router.get("/search")
def search_location(location: str):
    return search_data_by_location(location)
