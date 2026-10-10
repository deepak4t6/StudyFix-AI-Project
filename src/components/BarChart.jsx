import React from 'react';

/**
 * Responsive BarChart component for StudyFix AI (using SVG & Tailwind)
 */
export const BarChart = ({
  data = [],
  height = 180,
  barColor = 'bg-primary',
  valueSuffix = '%',
  showValues = true,
}) => {
  const maxValue = Math.max(...data.map((d) => d.value), 100);

  return (
    <div className="w-full space-y-2">
      <div className="flex items-end justify-between gap-2 px-2" style={{ height: `${height}px` }}>
        {data.map((item, idx) => {
          const heightPercent = Math.min(100, Math.max(10, Math.round((item.value / maxValue) * 100)));
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
              {showValues && (
                <span className="text-[10px] font-bold text-slate-600 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.value}{valueSuffix}
                </span>
              )}
              <div
                className={`w-full rounded-t-xl transition-all duration-300 ${item.color || barColor} hover:brightness-110 shadow-2xs`}
                style={{ height: `${heightPercent}%` }}
              />
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 truncate max-w-[48px] text-center">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
