import React from 'react';
import Card from './Card';
import Badge from './Badge';

/**
 * Reusable StatCard component to highlight learning statistics like Accuracy, Weak Topics Fixed, Streak, etc.
 */
export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = 'primary',
  badgeText,
  badgeVariant = 'primary',
  className = '',
}) => {
  const iconBgMap = {
    primary: 'bg-blue-100 text-primary',
    correct: 'bg-emerald-100 text-correct',
    wrong: 'bg-red-100 text-wrong',
    weak: 'bg-amber-100 text-weak',
    neutral: 'bg-slate-100 text-slate-700',
  };

  return (
    <Card isHoverable className={`relative overflow-hidden ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs sm:text-sm font-medium text-slate-500">{title}</p>
          <h4 className="text-2xl sm:text-3xl font-bold text-dark mt-1 tracking-tight">
            {value}
          </h4>
        </div>
        {Icon && (
          <div className={`p-3 rounded-2xl ${iconBgMap[variant] || iconBgMap.primary} shrink-0`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
      </div>

      {(subtitle || badgeText) && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          {subtitle && (
            <span className="text-xs text-slate-500 font-normal">
              {subtitle}
            </span>
          )}
          {badgeText && (
            <Badge variant={badgeVariant} size="sm">
              {badgeText}
            </Badge>
          )}
        </div>
      )}
    </Card>
  );
};

export default StatCard;
