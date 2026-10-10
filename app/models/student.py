import uuid
from sqlalchemy import Column, String, DateTime, Enum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.database import Base

class Student(Base):
    __tablename__ = "students"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    user_type = Column(String, default="college_student", nullable=False)  # college_student / school_student
    college_or_school_name = Column(String, nullable=False)
    course = Column(String, nullable=True)
    semester = Column(String, nullable=True)
    class_standard = Column(String, nullable=True)
    board = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    quiz_attempts = relationship("QuizAttempt", back_populates="student", cascade="all, delete-orphan")
    weak_topics = relationship("WeakTopic", back_populates="student", cascade="all, delete-orphan")
    chat_messages = relationship("ChatMessage", back_populates="student", cascade="all, delete-orphan")
    uploaded_notes = relationship("UploadedNote", back_populates="student", cascade="all, delete-orphan")
    exams = relationship("Exam", back_populates="student", cascade="all, delete-orphan")
    assignments = relationship("Assignment", back_populates="student", cascade="all, delete-orphan")
    backlogs = relationship("Backlog", back_populates="student", cascade="all, delete-orphan")
    progress_reports = relationship("ProgressReport", back_populates="student", cascade="all, delete-orphan")
    placement_attempts = relationship("PlacementAttempt", back_populates="student", cascade="all, delete-orphan")
