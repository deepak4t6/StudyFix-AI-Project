from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.database import Base

class MistakeLog(Base):
    __tablename__ = "mistake_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    subject = Column(String, nullable=False)
    topic = Column(String, nullable=False)
    mistake_type = Column(String, nullable=False)  # 'Conceptual', 'Calculation', 'Misread', 'Lack of Revision'
    question_text = Column(String, nullable=False)
    user_answer = Column(String, nullable=True)
    correct_answer = Column(String, nullable=False)
    explanation = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
