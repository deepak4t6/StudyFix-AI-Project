import uuid
from sqlalchemy import Column, String, Float, Integer, ForeignKey, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base

class WeakTopic(Base):
    __tablename__ = "weak_topics"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    student_id = Column(UUID(as_uuid=True), ForeignKey("students.id", ondelete="CASCADE"), nullable=False, index=True)
    topic_id = Column(UUID(as_uuid=True), ForeignKey("topics.id", ondelete="CASCADE"), nullable=False, index=True)
    accuracy = Column(Float, default=0.0, nullable=False)
    wrong_attempts = Column(Integer, default=0, nullable=False)
    status = Column(String, default="weak", nullable=False)  # weak / improving / strong
    last_updated = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    student = relationship("Student", back_populates="weak_topics")
    topic = relationship("Topic", back_populates="weak_topics")
