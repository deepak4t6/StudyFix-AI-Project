from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from uuid import UUID
from datetime import datetime

class StudentSignupRequest(BaseModel):
    full_name: str = Field(..., example="Rahul Sharma")
    email: EmailStr = Field(..., example="rahul@college.edu")
    password: str = Field(..., min_length=6, example="secret123")
    user_type: str = Field(default="college_student", example="college_student")  # college_student / school_student
    college_or_school_name: str = Field(..., example="IIT Delhi")
    course: Optional[str] = Field(None, example="B.Tech Computer Science")
    semester: Optional[str] = Field(None, example="4th Semester")
    class_standard: Optional[str] = Field(None, example="Class 12")
    board: Optional[str] = Field(None, example="CBSE")
    subjects: Optional[List[str]] = Field(default=[], example=["Mathematics", "Computer Science"])

class StudentLoginRequest(BaseModel):
    email: EmailStr = Field(..., example="rahul@college.edu")
    password: str = Field(..., example="secret123")

class StudentProfileResponse(BaseModel):
    id: UUID
    full_name: str
    email: EmailStr
    user_type: str
    college_or_school_name: str
    course: Optional[str] = None
    semester: Optional[str] = None
    class_standard: Optional[str] = None
    board: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

class AuthTokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    student: StudentProfileResponse
