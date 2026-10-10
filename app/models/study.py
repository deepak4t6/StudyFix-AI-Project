from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.database import Base

class WeakTopic(Base):
    __tablename__ = "weak_topics"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    subject = Column(String, nullable=False)
    topic_name = Column(String, nullable=False)
    accuracy_percentage = Column(Float, default=0.0)
    mistakes_count = Column(Integer, default=0)
    severity = Column(String, default="medium")  # 'high', 'medium', 'low'
    last_mistake_reason = Column(String, nullable=True)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
