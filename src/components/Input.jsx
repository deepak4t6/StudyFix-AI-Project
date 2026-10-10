import React from 'react';

/**
 * Reusable Input component for forms in StudyFix AI
 * Supports labels, helper text, error messages, left/right icons.
 */
export const Input = ({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  helperText,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onRightIconClick,
  isRequired = false,
  isDisabled = false,
  className = '',
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-xs sm:text-sm font-semibold text-slate-700">
          {label} {isRequired && <span className="text-wrong">*</span>}
        </label>
      )}

      <div className="relative rounded-xl shadow-sm">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <LeftIcon className="w-4 h-4" />
          </div>
        )}

        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          placeholder={placeholder}
          className={`w-full text-xs sm:text-sm rounded-xl border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
            LeftIcon ? 'pl-10' : 'pl-3.5'
          } ${RightIcon ? 'pr-10' : 'pr-3.5'} py-2.5 ${
            error
              ? 'border-wrong bg-red-50/20 text-wrong focus:border-wrong'
              : 'border-slate-200 bg-white text-dark focus:border-primary'
          } ${isDisabled ? 'bg-slate-100 cursor-not-allowed opacity-70' : ''}`}
          {...props}
        />

        {RightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            tabIndex={-1}
            className={`absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 ${
              onRightIconClick ? 'cursor-pointer' : 'pointer-events-none'
            }`}
          >
            <RightIcon className="w-4 h-4" />
          </button>
        )}
      </div>

      {error ? (
        <p className="text-xs text-wrong font-medium mt-1 flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      ) : helperText ? (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      ) : null}
    </div>
  );
};

export const Select = ({
  label,
  id,
  value,
  onChange,
  options = [],
  error,
  isRequired = false,
  className = '',
  leftIcon: LeftIcon,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {label && (
        <label htmlFor={selectId} className="block text-xs sm:text-sm font-semibold text-slate-700">
          {label} {isRequired && <span className="text-wrong">*</span>}
        </label>
      )}

      <div className="relative">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <LeftIcon className="w-4 h-4" />
          </div>
        )}

        <select
          id={selectId}
          value={value}
          onChange={onChange}
          className={`w-full text-xs sm:text-sm rounded-xl border transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none ${
            LeftIcon ? 'pl-10' : 'pl-3.5'
          } pr-8 py-2.5 bg-white ${
            error ? 'border-wrong bg-red-50/20 text-wrong' : 'border-slate-200 text-dark focus:border-primary'
          }`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Chevron Down */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {error && <p className="text-xs text-wrong font-medium mt-1">⚠️ {error}</p>}
    </div>
  );
};

export default Input;
