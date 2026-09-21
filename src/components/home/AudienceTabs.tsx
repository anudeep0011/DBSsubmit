'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export const AudienceTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employers' | 'individuals'>('employers');

  return (
    <SectionWrapper bg="white" id="audiences">
      <div className="space-y-12">
        
        {/* Header & Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-4xl">
          <div className="space-y-4">
            <ScrollReveal delay={0.1}>
              <Badge variant="peach">Tailored pathways</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900">
                Designed for your exact screening path.
              </h2>
            </ScrollReveal>
          </div>

          {/* Segmented Tab Switcher */}
          <ScrollReveal delay={0.3}>
            <div className="bg-navy-50 p-1.5 rounded-xl border border-navy-200 inline-flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveTab('employers')}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all cursor-pointer ${
                  activeTab === 'employers'
                    ? 'bg-navy-600 text-white shadow-sm'
                    : 'text-navy-600 hover:text-navy-900'
                }`}
              >
                Employers &amp; HR
              </button>
              <button
                onClick={() => setActiveTab('individuals')}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all cursor-pointer ${
                  activeTab === 'individuals'
                    ? 'bg-navy-600 text-white shadow-sm'
                    : 'text-navy-600 hover:text-navy-900'
                }`}
              >
                Individual applicants
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Tab Content Panel with Cross-Fade */}
        <div className="min-h-105">
          <AnimatePresence mode="wait">
            {activeTab === 'employers' ? (
              <motion.div
                key="employers"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-navy-50 rounded-2xl p-8 sm:p-12 border border-navy-200 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="navy">For organisations</Badge>
                    <span className="text-xs font-medium text-orange-400">
                      Bulk screening
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                    Screen candidates with total confidence.
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed font-normal">
                    Manage DBS checks for your entire workforce. Access volume discounts, real-time applicant tracking, and direct employer portal management via DBS-Express.
                  </p>

                  <ul className="space-y-3 text-sm font-normal text-navy-900 pt-2">
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-400 text-orange-500 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                      Volume rate cards for 51+ annual applicant submissions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-400 text-orange-500 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                      Basic, Standard, Enhanced &amp; Barred List entitlement support
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-orange-50 border border-orange-400 text-orange-500 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                      Direct employer portal integration with digital ID verification
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button href="/employers" variant="orange" size="lg">
                      Employer portal &amp; solutions →
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-navy-200 rounded-xl p-6 shadow-sm space-y-4">
                  <div className="text-xs font-medium text-navy-600">
                    Employer dashboard preview
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-navy-50 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-medium text-navy-900 text-sm">Care sector onboarding</div>
                        <div className="text-xs text-navy-600">14 active checks</div>
                      </div>
                      <span className="text-xs font-medium text-orange-400 bg-white px-2 py-1 rounded border border-navy-200">
                        Active
                      </span>
                    </div>
                    <div className="p-3 bg-navy-50 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-medium text-navy-900 text-sm">Education staff verification</div>
                        <div className="text-xs text-navy-600">8 pending results</div>
                      </div>
                      <span className="text-xs font-medium text-navy-600 bg-white px-2 py-1 rounded border border-navy-200">
                        Submitted
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="individuals"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-orange-50/60 rounded-2xl p-8 sm:p-12 border border-orange-200 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="navy">For applicants</Badge>
                    <span className="text-xs font-medium text-navy-600">
                      Personal check
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                    Get your DBS check sorted quickly.
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed font-normal">
                    Need a Basic DBS check for personal reference, self-employment, or a new job role? Apply online directly with clear step-by-step guidance.
                  </p>

                  <ul className="space-y-3 text-sm font-normal text-navy-900 pt-2">
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-white border border-navy-600 text-navy-600 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                      100% paperless online application process
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-white border border-navy-600 text-navy-600 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                      Secure digital identity verification via official channels
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-white border border-navy-600 text-navy-600 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                      Official digital certificate + paper copy delivery
                    </li>
                  </ul>

                  <div className="pt-4">
                    <Button href="/individuals" variant="orange" size="lg">
                      Apply as an individual →
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white border border-orange-200 rounded-xl p-6 shadow-sm space-y-4">
                  <div className="text-xs font-medium text-navy-600">
                    Applicant process preview
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-orange-50 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-400 text-white text-xs font-medium flex items-center justify-center">1</span>
                        <div className="font-medium text-navy-900 text-sm">Submit personal details</div>
                      </div>
                      <span className="text-xs text-navy-600 font-normal">5 mins</span>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-navy-600 text-white text-xs font-medium flex items-center justify-center">2</span>
                        <div className="font-medium text-navy-900 text-sm">Verify ID digitally</div>
                      </div>
                      <span className="text-xs text-navy-600 font-normal">Instant</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
};
