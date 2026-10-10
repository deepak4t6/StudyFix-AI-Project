from sqlalchemy.orm import Session
from app.models.quiz import QuizSubmission
from app.schemas.quiz import QuizSubmissionRequest

class QuizService:
    @staticmethod
    def save_submission(db: Session, user_id: int, request: QuizSubmissionRequest):
        accuracy = Math_Round = round((request.score / request.total_questions) * 100, 2)
        submission = QuizSubmission(
            user_id=user_id,
            subject=request.subject,
            topic=request.topic,
            score=request.score,
            total_questions=request.total_questions,
            accuracy_percentage=accuracy,
            time_taken_seconds=request.time_taken_seconds
        )
        db.add(submission)
        db.commit()
        db.refresh(submission)
        return submission

quiz_service = QuizService()
