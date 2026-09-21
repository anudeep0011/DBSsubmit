import React from 'react';

export interface StatCalloutProps {
  value: string;
  label: string;
  ariaLabel?: string;
  bg?: 'white' | 'navy-50' | 'navy-800' | 'navy-700';
  highlight?: string;
}

export const StatCallout: React.FC<StatCalloutProps> = ({
  value,
  label,
  ariaLabel,
  bg = 'white',
  highlight,
}) => {
  const isDark = bg === 'navy-800' || bg === 'navy-700';

  return (
    <div
      tabIndex={0}
      aria-label={ariaLabel || `${value} ${label}`}
      className={`rounded-2xl p-8 border transition-all text-center flex flex-col justify-center items-center shadow-card hover:shadow-card-hover hover:border-orange-400 ${
        isDark
          ? 'bg-navy-700/90 border-navy-500 text-white'
          : bg === 'navy-50'
          ? 'bg-navy-50 border-navy-200 text-navy-900'
          : 'bg-white border-navy-200 text-navy-900'
      }`}
    >
      <div className={`text-5xl md:text-6xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-navy-900'}`}>
        {value}
      </div>
      <div className={`text-sm mt-3 font-medium max-w-xs leading-relaxed ${isDark ? 'text-gray-100' : 'text-navy-700'}`}>
        {label}
      </div>
      {highlight && (
        <span className="mt-3 text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
          {highlight}
        </span>
      )}
    </div>
  );
};
