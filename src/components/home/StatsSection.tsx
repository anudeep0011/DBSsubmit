'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StatCallout } from '@/components/ui/StatCallout';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '4.8★',
      label: 'Average client rating across 2,000+ employer reviews',
      ariaLabel: '4.8 out of 5 stars average rating',
    },
    {
      value: '98%',
      label: 'Checks returned within estimated turnaround time frame',
      ariaLabel: '98 percent checks returned on time',
    },
    {
      value: '24hrs',
      label: 'Typical time to first status update on uCheck portal',
      ariaLabel: '24 hours average time to first status update',
    },
  ];

  return (
    <SectionWrapper bg="navy" id="stats">
      <div className="space-y-12 max-w-7xl mx-auto">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Speed and accuracy measured in data.
            </h2>
            <p className="text-navy-100 text-base font-normal">
              Built on certified government screening infrastructure.
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
                bg="navy-800"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
