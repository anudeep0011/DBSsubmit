'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { REGISTER_URL } from '@/lib/constants';
import { SmeVisualCard, EnterpriseVisualCard, IndividualVisualCard } from '@/components/ui/VisualGraphics';

export const SegmentSwitcher: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'sme' | 'enterprise' | 'individual'>('sme');

  const segments = {
    sme: {
      title: 'Small & Midsize Businesses',
      subtitle: 'Fast, pay-as-you-go DBS checks without minimum annual commitments.',
      description: 'Ideal for SMEs needing quick onboarding for new starters, contractors, or part-time staff with zero setup fees.',
      points: [
        'Pay-as-you-go rates with zero setup fees or annual commitments',
        'Basic, Standard, and Enhanced check eligibility support',
        'Direct digital identity verification for candidate convenience',
      ],
      ctaLabel: 'Register SME account →',
      ctaHref: REGISTER_URL,
      visual: <SmeVisualCard className="w-full h-full min-h-90" />,
    },
    enterprise: {
      title: 'Enterprise Organisations',
      subtitle: 'High-volume screening workflows with dedicated support and volume discount rates.',
      description: 'Designed for corporate HR teams, healthcare trusts, and large educational institutions managing 51+ checks annually.',
      points: [
        'Volume administration fee discounts starting at 51+ checks/year',
        'All organisations receive the same level of dedicated support',
        'API & ATS system integrations for streamlined candidate dispatch',
      ],
      ctaLabel: 'Set up enterprise portal →',
      ctaHref: '/employers',
      visual: <EnterpriseVisualCard className="w-full h-full min-h-90" />,
    },
    individual: {
      title: 'Individual Applicants',
      subtitle: 'Apply for your official Basic DBS check online in under 10 minutes.',
      description: 'Starting a new job, applying for a volunteering role, or verifying self-employment status? Get your certificate issued fast.',
      points: [
        'No employer sponsor required for Basic DBS applications',
        '100% online digital identity verification using Passport or Driving Licence',
        'Official paper certificate dispatched to your home address',
      ],
      ctaLabel: 'Apply for individual check →',
      ctaHref: REGISTER_URL,
      visual: <IndividualVisualCard className="w-full h-full min-h-90" />,
    },
  };

  const current = segments[activeSegment];

  return (
    <SectionWrapper bg="white" id="segment-switcher">
      <div className="space-y-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-navy-100 pb-8">
          <div className="space-y-3 max-w-2xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-900 leading-tight">
                Tailored screening for your organisation size
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-gray-700 font-normal">
                Select your category to see how DBS-Express streamlines background checks for your specific requirements.
              </p>
            </ScrollReveal>
          </div>

          {/* 3-Way Segment Switcher Buttons */}
          <ScrollReveal delay={0.2}>
            <div className="bg-navy-50 p-1.5 rounded-xl border border-navy-200 inline-flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setActiveSegment('sme')}
                className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeSegment === 'sme'
                    ? 'bg-navy-600 text-white shadow-xs'
                    : 'text-navy-600 hover:text-navy-900 hover:bg-navy-100/60'
                }`}
              >
                Small &amp; Midsize
              </button>
              <button
                type="button"
                onClick={() => setActiveSegment('enterprise')}
                className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeSegment === 'enterprise'
                    ? 'bg-navy-600 text-white shadow-xs'
                    : 'text-navy-600 hover:text-navy-900 hover:bg-navy-100/60'
                }`}
              >
                Enterprise
              </button>
              <button
                type="button"
                onClick={() => setActiveSegment('individual')}
                className={`px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeSegment === 'individual'
                    ? 'bg-navy-600 text-white shadow-xs'
                    : 'text-navy-600 hover:text-navy-900 hover:bg-navy-100/60'
                }`}
              >
                Individual
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Content Card with Dedicated Visual Representation */}
        <div className="bg-navy-50/70 rounded-2xl border border-navy-200 p-6 sm:p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-navy-900 tracking-tight">
              {current.title}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed font-normal">
              {current.description}
            </p>

            <ul className="space-y-3.5 text-sm text-navy-900 font-normal">
              {current.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                href={current.ctaHref}
                external={current.ctaHref.startsWith('http')}
                variant="orange"
                size="lg"
              >
                {current.ctaLabel}
              </Button>
            </div>
          </div>

          {/* Right Column (Tailored, Ultra-Crisp Visual UI Card) */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            {current.visual}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
