import React from 'react';

/**
 * Responsive LineChart component for StudyFix AI Accuracy Trends (SVG based)
 */
export const LineChart = ({
  data = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 70 },
    { label: 'Wed', value: 68 },
    { label: 'Thu', value: 75 },
    { label: 'Fri', value: 72 },
    { label: 'Sat', value: 78 },
    { label: 'Sun', value: 82 },
  ],
  height = 180,
  strokeColor = '#2563EB',
  fillColor = 'rgba(37, 99, 235, 0.08)',
}) => {
  const padding = 20;
  const width = 500; // viewBox SVG width
  const svgHeight = 160;

  const minVal = 40;
  const maxVal = 100;

  // Calculate coordinates
  const points = data.map((item, index) => {
    const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
    const y = svgHeight - padding - ((item.value - minVal) / (maxVal - minVal)) * (svgHeight - 2 * padding);
    return { x, y, value: item.value, label: item.label };
  });

  const pathD = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x},${point.y}` : `${acc} L ${point.x},${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${svgHeight - padding} L ${points[0].x},${svgHeight - padding} Z`;

  return (
    <div className="w-full space-y-2">
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${svgHeight}`} className="w-full h-[180px] overflow-visible">
          
          {/* Horizontal Grid lines */}
          <line x1={padding} y1={svgHeight - padding} x2={width - padding} y2={svgHeight - padding} stroke="#E2E8F0" strokeDasharray="3 3" />
          <line x1={padding} y1={svgHeight / 2} x2={width - padding} y2={svgHeight / 2} stroke="#E2E8F0" strokeDasharray="3 3" />
          <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#E2E8F0" strokeDasharray="3 3" />

          {/* Fill Gradient Area */}
          <path d={areaD} fill={fillColor} />

          {/* Stroke Line */}
          <path d={pathD} fill="none" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Data Points */}
          {points.map((pt, idx) => (
            <g key={idx} className="group cursor-pointer">
              <circle cx={pt.x} cy={pt.y} r="5" fill="#FFFFFF" stroke={strokeColor} strokeWidth="3" className="transition-transform group-hover:scale-125" />
              <text x={pt.x} y={pt.y - 10} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#111827">
                {pt.value}%
              </text>
              <text x={pt.x} y={svgHeight - 4} textAnchor="middle" fontSize="10" fill="#64748B">
                {pt.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LineChart;
