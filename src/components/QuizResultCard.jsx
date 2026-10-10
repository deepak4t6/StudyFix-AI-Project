import React from 'react';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';
import { Award, Clock, Target, RotateCcw, Sparkles, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Quiz Final Result Card Component for StudyFix AI
 */
export const QuizResultCard = ({
  score,
  total,
  timeTaken,
  weakTopics = [],
  onRetry,
  onPracticeWeak,
  onAskAi,
}) => {
  const accuracy = Math.round((score / total) * 100);

  const getScoreBadge = () => {
    if (accuracy >= 80) return { label: 'Outstanding Mastery!', variant: 'correct' };
    if (accuracy >= 60) return { label: 'Good Job! Minor gaps found', variant: 'weak' };
    return { label: 'Needs AI Concept Fixing', variant: 'wrong' };
  };

  const badgeInfo = getScoreBadge();

  return (
    <Card className="max-w-2xl mx-auto space-y-6 animate-fade-in shadow-soft-lg">
      
      {/* Result Header */}
      <div className="text-center space-y-3 pb-4 border-b border-slate-100">
        <div className="w-16 h-16 rounded-3xl bg-primary-light text-primary flex items-center justify-center mx-auto shadow-sm">
          <Award className="w-8 h-8" />
        </div>
        <div>
          <Badge variant={badgeInfo.variant} size="md" className="mb-2 font-bold">
            {badgeInfo.label}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
            Quiz Completion Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            StudyFix AI has evaluated your problem-solving accuracy and flagged concept gaps.
          </p>
        </div>
      </div>

      {/* Main Stat Grid */}
      <div className="grid grid-cols-3 gap-3 text-center">
        
        {/* Score */}
        <div className="p-3.5 rounded-2xl bg-subtle border border-slate-200">
          <span className="text-[11px] text-slate-500 font-semibold uppercase">Total Score</span>
          <h3 className="text-2xl font-extrabold text-primary mt-0.5">
            {score} <span className="text-sm font-semibold text-slate-400">/ {total}</span>
          </h3>
        </div>

        {/* Accuracy */}
        <div className="p-3.5 rounded-2xl bg-subtle border border-slate-200">
          <span className="text-[11px] text-slate-500 font-semibold uppercase">Accuracy</span>
          <h3 className={`text-2xl font-extrabold mt-0.5 ${accuracy >= 70 ? 'text-correct' : 'text-weak'}`}>
            {accuracy}%
          </h3>
        </div>

        {/* Time Taken */}
        <div className="p-3.5 rounded-2xl bg-subtle border border-slate-200">
          <span className="text-[11px] text-slate-500 font-semibold uppercase">Time Spent</span>
          <h3 className="text-2xl font-extrabold text-dark mt-0.5 flex items-center justify-center gap-1">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{timeTaken}</span>
          </h3>
        </div>

      </div>

      {/* Flagged Weak Topics */}
      {weakTopics.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-dark text-xs sm:text-sm flex items-center gap-1.5">
              <Target className="w-4 h-4 text-weak" /> Flagged Weak Topics ({weakTopics.length})
            </span>
            <Badge variant="weak" size="sm">Requires SFAI Review</Badge>
          </div>

          <div className="space-y-1.5 pt-1">
            {weakTopics.map((wt, idx) => (
              <div key={idx} className="bg-white p-2.5 rounded-xl border border-amber-200/80 text-xs text-slate-700 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-dark">{wt.topic}</span>
                  <span className="text-[11px] text-slate-400 block">{wt.subject}</span>
                </div>
                <Badge variant="wrong" size="sm">Missed Question</Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <Button
          variant="outline"
          size="md"
          leftIcon={RotateCcw}
          onClick={onRetry}
          className="w-full sm:w-1/3"
        >
          Retry Quiz
        </Button>

        <Button
          variant="weak"
          size="md"
          leftIcon={Target}
          onClick={onPracticeWeak}
          className="w-full sm:w-1/3 font-bold"
        >
          Practice Weak Topics
        </Button>

        <Button
          variant="primary"
          size="md"
          leftIcon={Sparkles}
          onClick={onAskAi}
          className="w-full sm:w-1/3 font-bold shadow-md shadow-blue-200"
        >
          Ask AI Tutor
        </Button>
      </div>

    </Card>
  );
};

export default QuizResultCard;
