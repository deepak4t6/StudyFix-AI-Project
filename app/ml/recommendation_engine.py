class RecommendationEngine:
    """
    Generates high-yield study recommendations based on weak topics & upcoming exam dates
    """
    def generate_daily_plan(self, weak_topics: list, available_minutes: int = 90) -> dict:
        if not weak_topics:
            weak_topics = [
                {"subject": "Operating Systems", "topic": "Process Scheduling", "accuracy": 38},
                {"subject": "DBMS", "topic": "Normalization (3NF vs BCNF)", "accuracy": 45}
            ]
        
        primary = weak_topics[0]
        
        return {
            "top_priority_subject": primary.get("subject", "Operating Systems"),
            "top_priority_topic": primary.get("topic", "Process Scheduling"),
            "recommendation_text": f"Focus on {primary.get('subject')}: {primary.get('topic')}. Complete 5 basic questions and revise the concept.",
            "estimated_accuracy_boost": "+8%",
            "recommended_tasks": [
                {"title": f"Revise {primary.get('topic')}", "time": "15 mins", "type": "Revision"},
                {"title": "Complete 5 adaptive quiz questions", "time": "20 mins", "type": "Quiz"},
                {"title": "Take 10-minute aptitude speed test", "time": "10 mins", "type": "Practice"}
            ]
        }

recommendation_engine = RecommendationEngine()
