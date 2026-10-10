from sqlalchemy.orm import Session
from app.models.mistake import MistakeLog
from app.schemas.mistake import MistakeLogCreate

class MistakeService:
    @staticmethod
    def log_mistake(db: Session, user_id: int, mistake_in: MistakeLogCreate):
        log = MistakeLog(
            user_id=user_id,
            subject=mistake_in.subject,
            topic=mistake_in.topic,
            mistake_type=mistake_in.mistake_type,
            question_text=mistake_in.question_text,
            user_answer=mistake_in.user_answer,
            correct_answer=mistake_in.correct_answer,
            explanation=mistake_in.explanation
        )
        db.add(log)
        db.commit()
        db.refresh(log)
        return log

    @staticmethod
    def get_user_mistakes(db: Session, user_id: int):
        return db.query(MistakeLog).filter(MistakeLog.user_id == user_id).all()

mistake_service = MistakeService()
