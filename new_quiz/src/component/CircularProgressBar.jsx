/* eslint-disable react/prop-types */
// src/component/CircularProgressBar.js


export default function CircularProgressBar({ percentage }) {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circular-progress-bar"
      >
        <circle
          stroke="gray"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={percentage >= 50 ? 'blue' : 'red'}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500 ease-in-out"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="20px"
          fill="black"
        >
          {`${Math.round(percentage)}%`}
        </text>
      </svg>
    </div>
  );
}
