import uuid
from sqlalchemy import Column, String, Text, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.db.database import Base

class PlacementQuestion(Base):
    __tablename__ = "placement_questions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    category = Column(String, index=True, nullable=False)  # aptitude / reasoning / quantitative / coding / communication
    question_text = Column(Text, nullable=False)
    options = Column(JSON, nullable=False)  # JSON array or dict of choices
    correct_option = Column(String, nullable=False)
    difficulty = Column(String, default="medium", nullable=False)  # easy / medium / hard
    explanation = Column(Text, nullable=True)

    # Relationships
    placement_attempts = relationship("PlacementAttempt", back_populates="question", cascade="all, delete-orphan")
