from pydantic import BaseModel, Field
from typing import Optional, List
from uuid import UUID
from datetime import datetime

class ChatHistoryItem(BaseModel):
    role: str = Field(..., example="student")  # 'student' or 'ai'
    message: str = Field(..., example="Process scheduling samajh nahi aata.")

class ChatAskRequest(BaseModel):
    message: str = Field(..., example="Process scheduling samajh nahi aata.")
    subject: str = Field(default="General", example="Operating Systems")
    student_class_or_semester: Optional[str] = Field(default="4th Semester", example="4th Semester")
    chat_history: Optional[List[ChatHistoryItem]] = Field(default=[], example=[])
    uploaded_note_id: Optional[UUID] = Field(default=None, example=None)

class ChatMessageResponse(BaseModel):
    id: UUID
    student_id: UUID
    role: str
    message: str
    subject: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

class ChatAskResponse(BaseModel):
    status: str = "success"
    ai_response: str
    practice_question: Optional[str] = None
    student_message: ChatMessageResponse
    ai_message: ChatMessageResponse
