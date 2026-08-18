import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'stamp' | 'navy' | 'peach' | 'outline' | 'orange';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'stamp',
  className = '',
}) => {
  if (variant === 'stamp') {
    return (
      <span className={`stamp-badge ${className}`}>
        <svg className="w-3.5 h-3.5 text-orange-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>{children}</span>
      </span>
    );
  }

  const styles = {
    navy: 'bg-navy-600 text-white font-sans text-xs font-medium px-3 py-1 rounded-md border border-navy-600',
    peach: 'bg-orange-50 text-navy-900 font-sans text-xs font-medium px-3 py-1 rounded-md border border-orange-300',
    orange: 'bg-orange-400 text-white font-sans text-xs font-medium px-3 py-1 rounded-md',
    outline: 'bg-transparent text-navy-600 font-sans text-xs font-medium px-3 py-1 rounded-md border border-navy-200',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
