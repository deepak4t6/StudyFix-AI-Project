from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import get_password_hash, verify_password

class UserService:
    @staticmethod
    def get_by_email(db: Session, email: str):
        return db.query(User).filter(User.email == email).first()

    @staticmethod
    def create_user(db: Session, user_in: UserCreate):
        db_user = User(
            full_name=user_in.full_name,
            email=user_in.email,
            hashed_password=get_password_hash(user_in.password),
            user_type=user_in.user_type,
            institution_name=user_in.institution_name,
            course=user_in.course,
            semester_or_class=user_in.semester_or_class
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user

    @staticmethod
    def authenticate(db: Session, email: str, password: str):
        user = UserService.get_by_email(db, email)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

user_service = UserService()
