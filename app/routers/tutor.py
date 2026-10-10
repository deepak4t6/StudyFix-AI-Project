from fastapi import APIRouter
from pydantic import BaseModel
from app.ai.tutor_engine import tutor_engine

router = APIRouter(prefix="/tutor", tags=["AI Tutor"])

class TutorQueryRequest(BaseModel):
    query: str
    subject: str = "General"

@router.post("/query")
async def ask_ai_tutor(request: TutorQueryRequest):
    res = await tutor_engine.generate_response(request.query, request.subject)
    return {
        "status": "success",
        "data": res
    }
