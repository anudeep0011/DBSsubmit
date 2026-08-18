import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 sm:p-8 border border-navy-200 shadow-sm hover:border-navy-300 transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
};
