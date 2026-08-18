import React from 'react';

export interface SectionWrapperProps {
  bg?: 'white' | 'grey-light' | 'grey-mid' | 'navy-50' | 'navy-100' | 'navy-600' | 'navy-800' | 'navy-900' | 'navy' | 'peach' | 'orange-50';
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
    'navy-800': 'bg-navy-800 text-navy-50',
    'navy-900': 'bg-navy-900 text-navy-50',
    navy: 'bg-gradient-to-br from-navy-800 to-navy-900 text-navy-50',
    peach: 'bg-orange-50 text-navy-900',
    'orange-50': 'bg-orange-50 text-navy-900',
  };

  const containerWidth = narrow ? 'max-w-4xl' : 'max-w-7xl';

  return (
    <section id={id} className={`py-20 md:py-32 ${bgStyles[bg] || bgStyles.white} ${className}`}>
      <div className={`${containerWidth} mx-auto px-6 sm:px-8 lg:px-12`}>
        {children}
      </div>
    </section>
  );
};

