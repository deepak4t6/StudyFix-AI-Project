from pydantic import BaseModel
from typing import Optional

class MistakeLogBase(BaseModel):
    subject: str
    topic: str
    mistake_type: str
    question_text: str
    user_answer: Optional[str] = None
    correct_answer: str
    explanation: Optional[str] = None

class MistakeLogCreate(MistakeLogBase):
    pass

class MistakeLogResponse(MistakeLogBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
