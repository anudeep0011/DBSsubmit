import React from 'react';

export interface StatCalloutProps {
  value: string;
  label: string;
  ariaLabel?: string;
  bg?: 'white' | 'navy-50' | 'navy-800';
}

export const StatCallout: React.FC<StatCalloutProps> = ({
  value,
  label,
  ariaLabel,
  bg = 'white',
}) => {
  const isDark = bg === 'navy-800';

  return (
    <div
      tabIndex={0}
      aria-label={ariaLabel || `${value} ${label}`}
      className={`rounded-2xl p-8 border transition-all text-center flex flex-col justify-center items-center shadow-card hover:shadow-card-hover ${
        isDark
          ? 'bg-navy-800/90 border-navy-700 text-white'
          : bg === 'navy-50'
          ? 'bg-navy-50 border-navy-200 text-navy-900'
          : 'bg-white border-navy-200 text-navy-900'
      }`}
    >
      <div className={`text-5xl md:text-6xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-navy-900'}`}>
        {value}
      </div>
      <div className={`text-sm mt-3 font-normal max-w-xs ${isDark ? 'text-navy-200' : 'text-navy-600'}`}>
        {label}
      </div>
    </div>
  );
};
