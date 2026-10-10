from typing import Generator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.database import SessionLocal
from app.core.security import decode_access_token
from app.models.student import Student

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/auth/login")

def get_db() -> Generator:
    """SQLAlchemy database session dependency"""
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

def get_current_student(
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
) -> Student:
    """Dependency that decodes JWT token and fetches current logged-in Student"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    payload = decode_access_token(token)
    if not payload:
        raise credentials_exception
        
    student_email: str = payload.get("sub")
    if not student_email:
        raise credentials_exception
        
    student = db.query(Student).filter(Student.email == student_email).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student profile not found"
        )
        
    return student
