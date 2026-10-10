import React from 'react';

/**
 * Reusable ProgressBar component with smooth animation, percentage label, and status variants.
 */
export const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  label = '',
  className = '',
  barClassName = '',
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const barColors = {
    primary: 'bg-primary',
    correct: 'bg-correct',
    wrong: 'bg-wrong',
    weak: 'bg-weak',
    gradient: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-primary',
  };

  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={`w-full ${className}`}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1.5 text-xs sm:text-sm font-medium text-slate-700">
          <span>{label}</span>
          <span className="font-semibold text-slate-900">{percentage}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${heights[size] || heights.md}`}>
        <div
          className={`${heights[size] || heights.md} rounded-full transition-all duration-500 ease-out ${barColors[variant] || barColors.primary} ${barClassName}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
