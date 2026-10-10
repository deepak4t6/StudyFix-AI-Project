from fastapi import APIRouter
from app.ml.recommendation_engine import recommendation_engine

router = APIRouter(prefix="/progress", tags=["Mistake & Weekly Analytics"])

@router.get("/summary")
def get_progress_summary():
    rec = recommendation_engine.generate_daily_plan([])
    return {
        "status": "success",
        "data": {
            "this_week_accuracy": 78.0,
            "last_week_accuracy": 71.0,
            "improvement": "+7%",
            "streak_days": 5,
            "questions_completed": 100,
            "recommendation": rec
        }
    }
