import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

/**
 * Quiz Option Component for StudyFix AI
 * Supports states: default, selected, correct (#16A34A), wrong (#DC2626)
 */
export const QuizOption = ({
  index,
  text,
  isSelected,
  isSubmitted,
  isCorrectOption,
  isUserChoice,
  onClick,
  isDisabled,
}) => {
  const optionLetters = ['A', 'B', 'C', 'D'];
  const letter = optionLetters[index] || index + 1;

  let containerStyles = 'bg-white border-slate-200 text-dark hover:border-blue-300 hover:bg-blue-50/30';
  let badgeStyles = 'bg-slate-100 text-slate-700 border-slate-200';

  if (isSubmitted) {
    if (isCorrectOption) {
      containerStyles = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold shadow-xs';
      badgeStyles = 'bg-emerald-600 text-white border-emerald-600';
    } else if (isUserChoice && !isCorrectOption) {
      containerStyles = 'bg-red-50 border-red-500 text-red-900 font-semibold shadow-xs';
      badgeStyles = 'bg-red-600 text-white border-red-600';
    } else {
      containerStyles = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
      badgeStyles = 'bg-slate-100 text-slate-400 border-slate-200';
    }
  } else if (isSelected) {
    containerStyles = 'bg-blue-50/80 border-primary text-primary font-semibold shadow-xs';
    badgeStyles = 'bg-primary text-white border-primary';
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled || isSubmitted}
      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${containerStyles}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-xl border flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${badgeStyles}`}
        >
          {letter}
        </div>
        <span className="leading-snug">{text}</span>
      </div>

      {isSubmitted && (
        <div className="shrink-0">
          {isCorrectOption ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          ) : isUserChoice ? (
            <XCircle className="w-5 h-5 text-red-600" />
          ) : null}
        </div>
      )}
    </button>
  );
};

export default QuizOption;
