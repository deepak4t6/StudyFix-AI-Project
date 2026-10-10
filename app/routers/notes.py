from fastapi import APIRouter, UploadFile, File
from app.ai.pdf_extractor import pdf_extractor

router = APIRouter(prefix="/notes", tags=["PDF & Notes Chat"])

@router.post("/upload")
async def upload_notes_file(file: UploadFile = File(...)):
    res = pdf_extractor.extract_and_summarize(file.filename)
    return {
        "status": "success",
        "message": f"Successfully processed {file.filename}",
        "data": res
    }
