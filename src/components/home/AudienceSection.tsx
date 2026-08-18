'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const AudienceSection: React.FC = () => {
  return (
    <SectionWrapper bg="white" id="audiences">
      <div className="space-y-20">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-6">
          <ScrollReveal delay={0.1}>
            <Badge variant="peach">Tailored workflows</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900">
              Designed for your exact screening path.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-700 leading-relaxed font-normal">
              Whether managing bulk checks for an enterprise workforce or applying for an individual role.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Asymmetric High Contrast Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Employers Section (7 Columns) */}
          <ScrollReveal delay={0.2} className="lg:col-span-7 flex">
            <div className="bg-white text-navy-900 rounded-2xl p-8 sm:p-12 flex flex-col justify-between space-y-10 border border-navy-200 shadow-sm hover:border-navy-300 transition-all w-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-navy-200 pb-4">
                  <Badge variant="navy">For organisations</Badge>
                  <span className="text-xs font-medium text-orange-400">Bulk screening</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                  Employers &amp; HR teams
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed font-normal">
                  Streamline candidate background checks for your organisation. Access volume discounts, applicant tracking, and automated check management via uCheck.
                </p>

                <ul className="space-y-3 text-sm font-normal text-navy-900 pt-2">
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-[10px] font-medium shrink-0">✓</span>
                    Volume discounts for 20+ annual checks
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-[10px] font-medium shrink-0">✓</span>
                    Basic, Standard &amp; Enhanced tiers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-[10px] font-medium shrink-0">✓</span>
                    Direct employer portal integration
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <Button href="/employers" variant="navy" size="lg" className="w-full sm:w-auto">
                  Employer portal &amp; pricing →
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Individuals Section (5 Columns) */}
          <ScrollReveal delay={0.35} className="lg:col-span-5 flex">
            <div className="bg-orange-50 text-navy-900 rounded-2xl p-8 sm:p-12 flex flex-col justify-between space-y-10 border border-orange-200 shadow-sm hover:border-orange-300 transition-all w-full">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-orange-200 pb-4">
                  <Badge variant="navy">For applicants</Badge>
                  <span className="text-xs font-medium text-navy-600">Personal check</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                  Individual applicants
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed font-normal">
                  Need a Basic DBS check for personal reference, self-employment, or a new job role? Apply online directly with clear step-by-step guidance.
                </p>

                <ul className="space-y-3 text-sm font-normal text-navy-900 pt-2">
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-white text-navy-600 border border-navy-300 flex items-center justify-center text-[10px] font-medium shrink-0">✓</span>
                    100% paperless online application process
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-white text-navy-600 border border-navy-300 flex items-center justify-center text-[10px] font-medium shrink-0">✓</span>
                    Secure digital identity verification
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-white text-navy-600 border border-navy-300 flex items-center justify-center text-[10px] font-medium shrink-0">✓</span>
                    Official paper &amp; digital certificate
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <Button href="/individuals" variant="orange" size="lg" className="w-full sm:w-auto">
                  Individual application →
                </Button>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </SectionWrapper>
  );
};
