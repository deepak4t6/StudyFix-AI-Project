import React from 'react';

/**
 * Reusable Card component adhering to SFAI design system:
 * Rounded-2xl, soft shadow, clean border, subtle background options.
 */
export const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'normal',
  onClick,
  isHoverable = false,
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-200 border';

  const variants = {
    default: 'bg-white border-slate-100 shadow-soft',
    subtle: 'bg-subtle border-slate-200 shadow-sm',
    flat: 'bg-white border-slate-200 shadow-none',
    primary: 'bg-primary-light border-blue-100 shadow-soft',
    correct: 'bg-correct-light border-emerald-100 shadow-soft',
    wrong: 'bg-wrong-light border-red-100 shadow-soft',
    weak: 'bg-weak-light border-amber-100 shadow-soft',
  };

  const paddings = {
    none: 'p-0',
    tight: 'p-3 sm:p-4',
    normal: 'p-5 sm:p-6',
    spacious: 'p-6 sm:p-8',
  };

  const hoverStyle = isHoverable ? 'hover:shadow-soft-lg hover:-translate-y-0.5 cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.default} ${paddings[padding] || paddings.normal} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`flex items-center justify-between pb-4 border-b border-slate-100 mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-dark tracking-tight ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-xs sm:text-sm text-slate-500 mt-1 ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`pt-4 border-t border-slate-100 mt-4 flex items-center justify-between ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
