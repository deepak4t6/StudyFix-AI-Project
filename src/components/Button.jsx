import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Reusable Button component for StudyFix AI
 * Supports primary (#2563EB), secondary (#EFF6FF), correct (#16A34A), wrong (#DC2626), weak (#F59E0B), outline & ghost variants.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-sm shadow-blue-200',
    secondary: 'bg-primary-light text-primary hover:bg-blue-100 focus:ring-primary',
    outline: 'border border-gray-200 bg-white text-dark hover:bg-gray-50 focus:ring-primary shadow-sm',
    correct: 'bg-correct text-white hover:bg-correct-dark focus:ring-correct shadow-sm',
    wrong: 'bg-wrong text-white hover:bg-wrong-dark focus:ring-wrong shadow-sm',
    weak: 'bg-weak text-white hover:bg-weak-dark focus:ring-weak shadow-sm',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-xl gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3.5 rounded-2xl gap-2.5 font-semibold',
  };

  return (
    <button
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : LeftIcon ? (
        <LeftIcon className="w-4 h-4" />
      ) : null}
      <span>{children}</span>
      {!isLoading && RightIcon ? <RightIcon className="w-4 h-4" /> : null}
    </button>
  );
};

export default Button;
