from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.models.student import Student
from app.schemas.auth import StudentSignupRequest
from app.core.security import get_password_hash, verify_password

class AuthService:
    @staticmethod
    def get_student_by_email(db: Session, email: str) -> Student:
        """Finds student record by email address"""
        return db.query(Student).filter(Student.email == email).first()

    @staticmethod
    def create_student(db: Session, signup_data: StudentSignupRequest) -> Student:
        """Hashes password with bcrypt and creates new Student in database"""
        existing_student = AuthService.get_student_by_email(db, signup_data.email)
        if existing_student:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Student with this email address already exists."
            )

        hashed_pwd = get_password_hash(signup_data.password)

        new_student = Student(
            full_name=signup_data.full_name,
            email=signup_data.email,
            password_hash=hashed_pwd,
            user_type=signup_data.user_type,
            college_or_school_name=signup_data.college_or_school_name,
            course=signup_data.course,
            semester=signup_data.semester,
            class_standard=signup_data.class_standard,
            board=signup_data.board,
        )
        
        db.add(new_student)
        db.commit()
        db.refresh(new_student)
        return new_student

    @staticmethod
    def authenticate_student(db: Session, email: str, password: str) -> Student:
        """Verifies email and bcrypt password match"""
        student = AuthService.get_student_by_email(db, email)
        if not student:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email or password."
            )
            
        if not verify_password(password, student.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email or password."
            )
            
        return student

auth_service = AuthService()
