from pydantic import BaseModel
from typing import Optional

class WeakTopicBase(BaseModel):
    subject: str
    topic_name: str
    accuracy_percentage: float
    mistakes_count: int
    severity: str = "medium"
    last_mistake_reason: Optional[str] = None

class WeakTopicCreate(WeakTopicBase):
    pass

class WeakTopicResponse(WeakTopicBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
