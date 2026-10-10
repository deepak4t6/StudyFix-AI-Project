from fastapi import APIRouter
from app.schemas.quiz import QuizQuestionResponse
from typing import List

router = APIRouter(prefix="/quiz", tags=["Adaptive Quiz"])

SAMPLE_QUIZ = [
    {
        "id": 1,
        "subject": "Operating Systems",
        "topic": "Process Scheduling",
        "question": "Under Shortest Job First (SJF) scheduling, if Process P1 has burst time 6ms and P2 has burst time 2ms (both arriving at t=0), which process runs first?",
        "options": [
            "P1 runs first because it has a larger burst time",
            "P2 runs first because SJF prioritizes the shortest execution time",
            "Both run simultaneously on single core CPU",
            "Execution order is random"
        ],
        "correct_answer": 1,
        "explanation": "SJF selects the process with smallest execution time. Since P2 (2ms) < P1 (6ms), P2 executes first.",
        "similar_practice": "What happens if P3 (1ms) arrives at t=1ms under Preemptive SRTF?"
    }
]

@router.get("/questions", response_model=List[QuizQuestionResponse])
def get_quiz_questions(subject: str = "All", limit: int = 10):
    return SAMPLE_QUIZ
