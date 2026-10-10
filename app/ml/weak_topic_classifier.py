class WeakTopicClassifier:
    """
    Classifies student error patterns into categories:
    - Conceptual Mistake
    - Calculation Mistake
    - Misread Question
    - Lack of Revision
    """
    def classify(self, user_answer: str, correct_answer: str, time_taken_sec: int) -> dict:
        if time_taken_sec < 5:
            mistake_type = "Misread Question"
            reason = "Answered in less than 5 seconds. Question keywords like 'NOT' or 'Preemptive' might be missed."
        elif "calc" in user_answer.lower() or "formula" in user_answer.lower():
            mistake_type = "Calculation Mistake"
            reason = "Arithmetic or unit conversion error detected."
        else:
            mistake_type = "Conceptual Mistake"
            reason = "Fundamental priority rule or definition confusion."

        return {
            "mistake_type": mistake_type,
            "reason": reason,
            "recommended_action": "Review step-by-step SFAI Hinglish explanation"
        }

weak_classifier = WeakTopicClassifier()
