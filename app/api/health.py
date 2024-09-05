from fastapi import APIRouter
from typing import Dict

router = APIRouter()


@router.get("/healthcheck", response_model=Dict[str, str])
async def healthcheck() -> Dict[str, str]:
    return {"status": "alive"}
