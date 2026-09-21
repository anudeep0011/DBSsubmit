'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StatCallout } from '@/components/ui/StatCallout';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '99.4%',
      label: 'First-time application accuracy rate across all sectors',
      ariaLabel: '99.4 percent accuracy',
    },
    {
      value: '< 24h',
      label: 'Average turnaround for electronic Basic check results',
      ariaLabel: 'Under 24 hours turnaround',
    },
    {
      value: '50k+',
      label: 'UK criminal record checks processed annually',
      ariaLabel: 'Over 50 thousand checks processed',
    },
  ];

  return (
    <SectionWrapper bg="white" id="stats">
      <div className="space-y-12 max-w-7xl mx-auto">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
              Speed and accuracy <span className="text-orange-500">measured in data.</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg font-normal">
              Built on certified government screening infrastructure with industry-leading speed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
              <StatCallout
                value={stat.value}
                label={stat.label}
                ariaLabel={stat.ariaLabel}
                bg="white"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
