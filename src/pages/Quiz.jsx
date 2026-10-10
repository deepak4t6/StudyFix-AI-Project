import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import QuizOption from '../components/QuizOption';
import QuizResultCard from '../components/QuizResultCard';
import ProgressBar from '../components/ProgressBar';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { quizQuestions } from '../data/quizQuestions';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  Sparkles, 
  Target, 
  RotateCcw,
  BookOpen
} from 'lucide-react';

/**
 * Quiz Page Component for StudyFix AI (SFAI)
 */
export const Quiz = ({ setActiveTab }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  // Timer state (seconds)
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished]);

  const currentQ = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectOption = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;

    setIsSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQ.id,
        subject: currentQ.subject,
        topic: currentQ.topic,
        selectedOption,
        correctAnswer: currentQ.correctAnswer,
        isCorrect,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRetryQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setIsFinished(false);
    setSecondsElapsed(0);
  };

  // Flagged weak topics based on wrong answers
  const weakTopics = userAnswers
    .filter((ans) => !ans.isCorrect)
    .map((ans) => ({
      topic: ans.topic,
      subject: ans.subject,
    }));

  return (
    <DashboardLayout activeTab="quiz" setActiveTab={setActiveTab}>
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        
        {isFinished ? (
          /* Final Results Screen */
          <QuizResultCard
            score={score}
            total={totalQuestions}
            timeTaken={formatTime(secondsElapsed)}
            weakTopics={weakTopics}
            onRetry={handleRetryQuiz}
            onPracticeWeak={() => setActiveTab && setActiveTab('ai-tutor')}
            onAskAi={() => setActiveTab && setActiveTab('ai-tutor')}
          />
        ) : (
          /* Active Quiz Screen */
          <div className="space-y-6">
            
            {/* Header: Subject, Topic, Question Count, Timer & Progress */}
            <Card className="shadow-soft space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" size="md font-semibold">
                    {currentQ.subject}
                  </Badge>
                  <Badge variant="neutral" size="md font-semibold">
                    {currentQ.topic}
                  </Badge>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-500">
                    Question <strong className="text-dark text-sm">{currentQuestionIndex + 1}</strong> of {totalQuestions}
                  </span>
                  
                  {/* Timer Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 border border-blue-200 text-primary text-xs font-mono font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatTime(secondsElapsed)}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <ProgressBar
                value={((currentQuestionIndex + 1) / totalQuestions) * 100}
                variant="primary"
                size="sm"
              />
            </Card>

            {/* Question Box */}
            <Card className="shadow-soft space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Question {currentQuestionIndex + 1}
                </span>
                <h3 className="text-base sm:text-xl font-extrabold text-dark leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map((optionText, idx) => (
                  <QuizOption
                    key={idx}
                    index={idx}
                    text={optionText}
                    isSelected={selectedOption === idx}
                    isSubmitted={isSubmitted}
                    isCorrectOption={idx === currentQ.correctAnswer}
                    isUserChoice={selectedOption === idx}
                    onClick={() => handleSelectOption(idx)}
                    isDisabled={isSubmitted}
                  />
                ))}
              </div>

              {/* Submit Answer Action */}
              {!isSubmitted && (
                <div className="flex justify-end pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    isDisabled={selectedOption === null}
                    onClick={handleSubmitAnswer}
                    className="font-bold px-8 shadow-md shadow-blue-200"
                  >
                    Submit Answer
                  </Button>
                </div>
              )}

              {/* Explanation & Feedback Banner after Submission */}
              {isSubmitted && (
                <div className="space-y-4 pt-2 border-t border-slate-100 animate-fade-in">
                  
                  {/* Correct vs Wrong Banner */}
                  {selectedOption === currentQ.correctAnswer ? (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-800 text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          Correct Answer!
                        </span>
                        <Badge variant="correct" size="sm">+1 Point</Badge>
                      </div>
                      <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                        {currentQ.explanation}
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-red-800 text-sm flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                          Incorrect Answer
                        </span>
                        <Badge variant="wrong" size="sm">Concept Gap Flagged</Badge>
                      </div>

                      <div className="text-xs text-red-900 space-y-1">
                        <p>
                          <strong>Correct Option: </strong>
                          <span className="font-bold text-emerald-700">
                            {currentQ.options[currentQ.correctAnswer]}
                          </span>
                        </p>
                        <p className="pt-1 leading-relaxed text-slate-700">
                          <strong>Step-by-Step Logic: </strong>
                          {currentQ.explanation}
                        </p>
                      </div>

                      {/* Similar Practice Hint */}
                      {currentQ.similarPractice && (
                        <div className="mt-2 p-2.5 rounded-xl bg-white border border-red-200/80 text-xs text-slate-700 space-y-1">
                          <span className="font-bold text-weak flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> Similar Concept Hint:
                          </span>
                          <p className="text-slate-600">{currentQ.similarPractice}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Next Question / Finish Button */}
                  <div className="flex items-center justify-between pt-2">
                    <Button
                      variant="ghost"
                      size="md"
                      className="text-slate-500"
                      leftIcon={Sparkles}
                      onClick={() => setActiveTab && setActiveTab('ai-tutor')}
                    >
                      Ask AI Tutor about this question
                    </Button>

                    <Button
                      variant="primary"
                      size="lg"
                      rightIcon={ArrowRight}
                      onClick={handleNextQuestion}
                      className="font-bold shadow-md shadow-blue-200"
                    >
                      {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'View Final Results'}
                    </Button>
                  </div>

                </div>
              )}

            </Card>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default Quiz;
