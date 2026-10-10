from pydantic import BaseModel
from typing import List, Optional

class QuizQuestionOption(BaseModel):
    id: int
    text: str

class QuizQuestionResponse(BaseModel):
    id: int
    subject: str
    topic: str
    question: str
    options: List[str]
    correct_answer: int
    explanation: str
    similar_practice: Optional[str] = None

class QuizSubmissionRequest(BaseModel):
    subject: str
    topic: str
    score: int
    total_questions: int
    time_taken_seconds: int

class QuizSubmissionResponse(BaseModel):
    id: int
    user_id: int
    score: int
    accuracy_percentage: float
    message: str
