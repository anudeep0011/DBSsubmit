import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  variant?: 'orange' | 'navy' | 'navy-outline' | 'white-outline' | 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'orange',
  size = 'md',
  href,
  external,
  children,
  onClick,
  className = '',
  disabled,
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  // Derived design system color palette mapping
  const variantStyles = {
    orange: 'bg-orange-400 text-white hover:bg-orange-500 active:bg-orange-600 focus:ring-2 focus:ring-orange-400',
    navy: 'bg-navy-600 text-white hover:bg-navy-700 active:bg-navy-800 focus:ring-2 focus:ring-navy-600',
    'navy-outline': 'border border-navy-600 text-navy-600 bg-transparent hover:bg-navy-600 hover:text-white',
    'white-outline': 'border border-white text-white bg-transparent hover:bg-white hover:text-navy-900',
    primary: 'bg-navy-600 text-white hover:bg-navy-700 active:bg-navy-800 focus:ring-2 focus:ring-navy-600',
    secondary: 'bg-orange-400 text-white hover:bg-orange-500 active:bg-orange-600 focus:ring-2 focus:ring-orange-400',
    outline: 'border border-navy-600 text-navy-600 bg-transparent hover:bg-navy-600 hover:text-white',
    ghost: 'text-navy-600 hover:bg-navy-100 hover:text-navy-900',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-[0.8125rem]',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
