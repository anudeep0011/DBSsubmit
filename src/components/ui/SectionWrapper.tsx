import React from 'react';

export interface SectionWrapperProps {
  bg?: 'white' | 'grey-light' | 'grey-mid' | 'navy-50' | 'navy-100' | 'navy-600' | 'navy-700' | 'navy' | 'peach' | 'orange-50';
  className?: string;
  children: React.ReactNode;
  id?: string;
  narrow?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  bg = 'white',
  className = '',
  children,
  id,
  narrow = false,
}) => {
  // Derived design system color token mapping
  const bgStyles: Record<string, string> = {
    white: 'bg-white text-navy-900',
    'grey-light': 'bg-navy-50 text-navy-900',
    'navy-50': 'bg-navy-50 text-navy-900',
    'grey-mid': 'bg-navy-100 text-navy-900',
    'navy-100': 'bg-navy-100 text-navy-900',
    'navy-600': 'bg-navy-600 text-navy-50',
    'navy-700': 'bg-navy-700 text-navy-50',
    navy: 'bg-[#27276E] bg-gradient-to-br from-[#1F1F58] to-[#27276E] text-white',
    peach: 'bg-[#FFF6ED] text-navy-900',
    'orange-50': 'bg-[#FFF6ED] text-navy-900',
  };

  const containerWidth = narrow ? 'max-w-4xl' : 'max-w-7xl';
  const isNavy = bg === 'navy' || bg === 'navy-600' || bg === 'navy-700';

  return (
    <section
      id={id}
      style={isNavy ? { backgroundColor: '#27276E', color: '#FFFFFF' } : undefined}
      className={`py-14 sm:py-20 md:py-32 ${bgStyles[bg] || bgStyles.white} ${className}`}
    >
      <div className={`${containerWidth} mx-auto px-4 sm:px-8 lg:px-12 w-full`}>
        {children}
      </div>
    </section>
  );
};

