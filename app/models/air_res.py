from pydantic import BaseModel
from typing import List


class PollutionResponse(BaseModel):
    air_quality_index: float
    carbon_monoxide: float
    nitric_oxide: float
    nitrogen_dioxide: float
    ozone: float
    sulfur_dioxide: float
    pm2_5: float
    pm10: float
    ammonia: float
