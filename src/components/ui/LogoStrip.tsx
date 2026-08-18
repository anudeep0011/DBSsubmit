import React from 'react';
import { StethoscopeIcon, GraduationCapIcon, TruckIcon, LockIcon, HardHatIcon, LandmarkIcon } from '@/components/ui/Icons';

interface SectorItem {
  name: string;
  icon: React.ReactNode;
}

interface LogoStripProps {
  heading?: string;
  bg?: 'white' | 'grey-light' | 'navy-50';
}

const defaultSectors: SectorItem[] = [
  { name: 'Healthcare & NHS Trusts', icon: <StethoscopeIcon className="w-5 h-5 text-navy-700" /> },
  { name: 'Schools & Education', icon: <GraduationCapIcon className="w-5 h-5 text-navy-700" /> },
  { name: 'Logistics & Supply Chain', icon: <TruckIcon className="w-5 h-5 text-navy-700" /> },
  { name: 'Security & Facilities', icon: <LockIcon className="w-5 h-5 text-navy-700" /> },
  { name: 'Construction & Engineering', icon: <HardHatIcon className="w-5 h-5 text-navy-700" /> },
  { name: 'Financial & Legal Services', icon: <LandmarkIcon className="w-5 h-5 text-navy-700" /> },
];

export const LogoStrip: React.FC<LogoStripProps> = ({
  heading = 'Trusted by employers across key UK industry sectors',
  bg = 'white',
}) => {
  const bgClass = bg === 'grey-light' || bg === 'navy-50' ? 'bg-navy-50' : 'bg-white';

  return (
    <section className={`py-12 ${bgClass} border-y border-navy-100`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        
        {/* Accreditation Notice */}
        <div className="text-center space-y-2">
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
            Processed via uCheck — an umbrella body registered with the DBS
          </p>
          {heading && (
            <h3 className="text-lg sm:text-xl font-semibold text-navy-900 tracking-tight">
              {heading}
            </h3>
          )}
        </div>

        {/* Minimal 6-Sector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
          {defaultSectors.map((sector, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl bg-navy-50/80 border border-navy-200 text-navy-900 hover:border-orange-400 transition-all shadow-xs"
            >
              <div className="p-2 rounded-lg bg-white border border-navy-100 shrink-0">
                {sector.icon}
              </div>
              <span className="text-xs font-semibold text-navy-900 leading-snug">
                {sector.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
