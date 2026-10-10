import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "StudyFix AI (SFAI) Backend API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security & Tokens
    SECRET_KEY: str = "super_secret_studyfix_ai_jwt_key_2026_change_in_production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 Days
    
    # Database
    DATABASE_URL: str = "sqlite:///./studyfix_ai.db"
    
    # AI / LLM Integrations
    AI_MODEL_NAME: str = "gemini-1.5-flash"
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "placeholder_key")

    class Config:
        case_sensitive = True

settings = Settings()
