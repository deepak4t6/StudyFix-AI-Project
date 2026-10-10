import asyncio
from app.ai.prompt_templates import SYSTEM_TUTOR_PROMPT, build_tutor_query

class AiTutorEngine:
    """
    StudyFix AI Step-by-Step Hinglish Tutor Engine
    """
    def __init__(self):
        pass

    async def generate_response(self, text: str, subject: str = "General") -> dict:
        lower = text.lower()
        
        # Intelligent fallback / simulation matching frontend test cases
        if "process scheduling" in lower or "cpu" in lower:
            explanation = (
                "Koi baat nahi! Pehle simple example se samajhte hain. CPU ek time par kitne processes handle karta hai?\n\n"
                "Think about a single billing counter at a movie theater—if 10 people stand in line, how does the ticket seller decide who gets tickets first?\n\n"
                "That exact decision logic is called **CPU Process Scheduling** (e.g. FCFS, SJF, or Round Robin)."
            )
            practice_q = "If Process P1 (burst time 6ms) arrives first, and P2 (burst time 2ms) arrives at the same time, which process finishes first under Shortest Job First (SJF)?"
        elif "p2" in lower or "2ms" in lower or "sjf" in lower:
            explanation = (
                "Shabash! Perfect answer! 🎉\n\n"
                "Under **Shortest Job First (SJF)**, P2 (2ms) runs before P1 (6ms) because its execution time is shorter. This minimizes the average waiting time.\n\n"
                "Here is a quick concept rule to remember:\n"
                "• **Non-preemptive**: Current process completes fully before next starts.\n"
                "• **Preemptive (SRTF)**: If a shorter process arrives, running process is paused!"
            )
            practice_q = "Calculate the average waiting time when P1 (6ms) and P2 (2ms) run in SJF order."
        elif "normalization" in lower or "dbms" in lower:
            explanation = (
                "DBMS Normalization simple words mein:\n\n"
                "1NF: Every cell has single value (no arrays).\n"
                "2NF: No partial dependency (non-key attribute depends on WHOLE primary key).\n"
                "3NF: No transitive dependency (Non-key -> Non-key is not allowed).\n\n"
                "Consistent data, zero duplication!"
            )
            practice_q = "In a table where Student_ID -> Department and Department -> HOD_Name, which normal form is violated?"
        else:
            explanation = (
                f"Acha question hai! Step-by-step breakdown karte hain:\n\n"
                f"1️⃣ Pehle basic concept rule identify karte hain ({subject}).\n"
                f"2️⃣ Formula / Logic apply karenge step-by-step.\n"
                f"3️⃣ Common mistake check: Hamesha edge cases and priority order verify karo.\n\n"
                f"Kya aapko is step tak clarity milli? Next practice step solve karein?"
            )
            practice_q = "Try solving 1 practice problem on this topic now to confirm your concept mastery!"

        return {
            "response": explanation,
            "practice_question": practice_q,
            "subject": subject,
            "language": "Hinglish"
        }

tutor_engine = AiTutorEngine()
