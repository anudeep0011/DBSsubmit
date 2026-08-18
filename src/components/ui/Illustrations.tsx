import React from 'react';

interface IconProps {
  className?: string;
}

export const ShieldTieredIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M48 12L20 24V46C20 63.5 32 79.5 48 84C64 79.5 76 63.5 76 46V24L48 12Z"
      className="stroke-navy-700"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M36 44L44 52L60 36"
      className="stroke-orange-400"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 64H64"
      className="stroke-navy-300"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PersonCertificateIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="32" r="12" className="stroke-navy-700" strokeWidth="3" fill="none" />
    <path
      d="M16 68C16 54.7452 24.9543 44 36 44C41.8 44 47 46.8 50.5 51.3"
      className="stroke-navy-700"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="50"
      y="38"
      width="34"
      height="44"
      rx="4"
      className="stroke-navy-700"
      strokeWidth="3"
      fill="white"
    />
    <line x1="58" y1="48" x2="76" y2="48" className="stroke-navy-300" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="58" y1="56" x2="76" y2="56" className="stroke-navy-300" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="67" cy="68" r="5" className="stroke-orange-400" strokeWidth="2.5" fill="none" />
    <path d="M64 73L62 80L67 77L72 80L70 73" className="stroke-orange-400" strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DocumentCheckIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 16H56L72 32V80C72 82.2091 70.2091 84 68 84H24C21.7909 84 20 82.2091 20 80V20C20 17.7909 21.7909 16 24 16Z"
      className="stroke-navy-700"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M54 16V34H72" className="stroke-navy-700" strokeWidth="3" strokeLinejoin="round" fill="none" />
    <path d="M34 52L44 62L62 44" className="stroke-orange-400" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockSpeedIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="52" cy="52" r="30" className="stroke-navy-700" strokeWidth="3" fill="none" />
    <path d="M52 34V52L64 60" className="stroke-orange-400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="14" y1="36" x2="26" y2="36" className="stroke-navy-400" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="48" x2="22" y2="48" className="stroke-navy-400" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="14" y1="60" x2="26" y2="60" className="stroke-navy-400" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const MagnifyingSearchIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="44" cy="44" r="24" className="stroke-navy-700" strokeWidth="3" fill="none" />
    <path d="M62 62L80 80" className="stroke-orange-400" strokeWidth="4" strokeLinecap="round" />
    <path d="M34 44H54" className="stroke-navy-300" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M44 34V54" className="stroke-navy-300" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const EnvelopeMessageIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="24" width="64" height="48" rx="6" className="stroke-navy-700" strokeWidth="3" fill="none" />
    <path d="M18 28L48 52L78 28" className="stroke-orange-400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18" y1="68" x2="38" y2="48" className="stroke-navy-300" strokeWidth="2" strokeLinecap="round" />
    <line x1="78" y1="68" x2="58" y2="48" className="stroke-navy-300" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TeamHiringIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left figure */}
    <circle cx="28" cy="34" r="9" className="stroke-navy-600" strokeWidth="2.5" fill="none" />
    <path d="M12 66C12 55 19 46 28 46C33 46 37 49 40 53" className="stroke-navy-600" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Right figure */}
    <circle cx="68" cy="34" r="9" className="stroke-navy-600" strokeWidth="2.5" fill="none" />
    <path d="M84 66C84 55 77 46 68 46C63 46 59 49 56 53" className="stroke-navy-600" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Center key figure */}
    <circle cx="48" cy="30" r="11" className="stroke-navy-700" strokeWidth="3" fill="none" />
    <path d="M26 74C26 60.5 35.8 50 48 50C60.2 50 70 60.5 70 74" className="stroke-navy-700" strokeWidth="3" strokeLinecap="round" />
    <circle cx="48" cy="74" r="4" className="stroke-orange-400" strokeWidth="2.5" fill="white" />
  </svg>
);

export const PartnershipShapesIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="24" width="40" height="40" rx="8" className="stroke-navy-700" strokeWidth="3" fill="none" />
    <rect x="38" y="38" width="40" height="40" rx="8" className="stroke-orange-400" strokeWidth="3" fill="none" />
    <circle cx="38" cy="44" r="4" className="fill-navy-700" />
    <circle cx="58" cy="64" r="4" className="fill-orange-400" />
  </svg>
);
