'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { ProcessSteps } from '@/components/ui/ProcessSteps';

export const HowItWorksSection: React.FC = () => {
  return (
    <SectionWrapper bg="white" id="how-it-works">
      <div className="space-y-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <ScrollReveal delay={0.1}>
            <Badge variant="navy">Simple process</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900 leading-[1.08]">
              Three simple steps to your result.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-700 leading-relaxed font-normal">
              Whether ordering a single check or bulk submissions, the same clear workflow applies.
            </p>
          </ScrollReveal>
        </div>

        {/* Process Steps Component */}
        <ProcessSteps />
      </div>
    </SectionWrapper>
  );
};
