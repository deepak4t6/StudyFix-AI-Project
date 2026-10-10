from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.core.dependencies import get_db, get_current_student
from app.schemas.auth import (
    StudentSignupRequest,
    StudentLoginRequest,
    AuthTokenResponse,
    StudentProfileResponse
)
from app.services.auth_service import auth_service
from app.core.security import create_access_token
from app.models.student import Student

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post(
    "/signup",
    response_model=AuthTokenResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register a new student"
)
def signup(signup_data: StudentSignupRequest, db: Session = Depends(get_db)):
    """
    Registers a new College or School student in StudyFix AI.
    Hashes password using bcrypt and returns JWT access token.
    """
    new_student = auth_service.create_student(db, signup_data)
    access_token = create_access_token(new_student.email)
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "student": new_student
    }

@router.post(
    "/login",
    response_model=AuthTokenResponse,
    summary="Log in student and get JWT access token"
)
def login(login_data: StudentLoginRequest, db: Session = Depends(get_db)):
    """
    Authenticates student credentials and returns a JWT access token.
    """
    student = auth_service.authenticate_student(db, login_data.email, login_data.password)
    access_token = create_access_token(student.email)
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "student": student
    }

@router.get(
    "/me",
    response_model=StudentProfileResponse,
    summary="Get current logged-in student profile"
)
def get_me(current_student: Student = Depends(get_current_student)):
    """
    Protected endpoint: Returns current authenticated student profile (without password hash).
    """
    return current_student

@router.post(
    "/logout",
    summary="Log out student"
)
def logout():
    """
    Logs out student (client should remove JWT token from local storage / cookies).
    """
    return {
        "status": "success",
        "message": "Successfully logged out. Please remove token from client storage."
    }
