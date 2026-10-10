import React from 'react';

/**
 * Reusable Badge component for topic indicators, status tags, accuracy indicators, etc.
 * Supports: primary, correct, wrong, weak, neutral variants.
 */
export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  showDot = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full border transition-colors';

  const variants = {
    primary: 'bg-blue-50 text-blue-700 border-blue-200',
    correct: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    wrong: 'bg-red-50 text-red-700 border-red-200',
    weak: 'bg-amber-50 text-amber-700 border-amber-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const dotColors = {
    primary: 'bg-blue-600',
    correct: 'bg-emerald-600',
    wrong: 'bg-red-600',
    weak: 'bg-amber-600',
    neutral: 'bg-slate-500',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-semibold',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {showDot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || 'bg-blue-600'}`} />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
