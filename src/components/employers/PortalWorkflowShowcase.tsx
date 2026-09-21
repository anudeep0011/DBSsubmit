'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const PortalWorkflowShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'step-1',
      stepNum: '01',
      shortLabel: 'Candidate Setup',
      title: 'Candidate & Role Setup',
      summary: 'Add candidate details, assign internal departments, and enter targeted job roles in seconds.',
      bullets: [
        'UK phone & postcode validation (+44 formatting)',
        'Assign custom company departments for multi-site teams',
        'Automatic username & secure invitation generation',
      ],
      imageSrc: '/images/portal/step1_add_user_details.png',
      imageAlt: 'DBS-Express add new candidate modal with essential details',
    },
    {
      id: 'step-2',
      stepNum: '02',
      shortLabel: 'Service Bundling',
      title: 'Multi-Service Check Bundling',
      summary: 'Bundle criminal record checks with digital identity, free right-to-work checks, and automated referencing in one click.',
      bullets: [
        'DBS Checks from £18.00 + VAT (Basic, Standard, Enhanced)',
        'Right to Work Check: 100% Free with government compliance',
        'Digital ID Check from £6.50 + VAT (no physical document checks needed)',
        'Automated Reference Checks from £2.95 + VAT with custom forms & automated referee reminders',
      ],
      imageSrc: '/images/portal/services_selection_modal_enhanced.jpg',
      imageAlt: 'Choose background checks and services modal preview',
    },
    {
      id: 'step-3',
      stepNum: '03',
      shortLabel: 'Eligibility Check',
      title: 'Smart DBS Eligibility Questionnaire',
      summary: 'Built-in questionnaire checks legal entitlement and ensures the correct DBS disclosure level is ordered.',
      bullets: [
        'Guided questions on regulated activity with vulnerable adults or children',
        'Sector-specific role identification (Care, Healthcare, Education, Legal, Finance)',
        'Zero-risk of rejected applications or non-compliant orders',
      ],
      imageSrc: '/images/portal/step3_job_role_questionnaire.png',
      imageAlt: 'DBS Eligibility Questionnaire modal for candidate job role',
    },
    {
      id: 'step-4',
      stepNum: '04',
      shortLabel: 'Billing & Split',
      title: 'Preferences & Payment Splitting',
      summary: 'Assign evidence checkers, split fee contributions, and choose verification methods.',
      bullets: [
        'Delegate verification to internal Company Admins or Evidence Checkers',
        'Custom fee split: Company can cover 100%, split a percentage, or have candidate pay',
        'Toggle instant Digital ID verification or in-person document review',
      ],
      imageSrc: '/images/portal/step4_dbs_preferences_payment.png',
      imageAlt: 'Select DBS Preferences and flexible candidate payment split modal',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Sleek Horizontal Stepper Navigation Bar */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative flex items-center justify-between">
          {/* Background Connecting Line */}
          <div className="absolute left-6 right-6 top-5 -translate-y-1/2 h-0.5 bg-navy-200 z-0" />

          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Numbered Indicator Circle - White by default, colored when active */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-200 border-2 ${
                    isActive
                      ? 'bg-orange-500 text-white border-orange-500 shadow-md ring-4 ring-orange-100 scale-105'
                      : 'bg-white text-navy-800 border-navy-200 hover:border-orange-400 hover:text-orange-600 shadow-2xs'
                  }`}
                >
                  {step.stepNum}
                </div>

                {/* Step Label */}
                <span
                  className={`mt-2 text-xs sm:text-sm font-semibold tracking-tight transition-colors text-center ${
                    isActive
                      ? 'text-navy-900 font-bold'
                      : 'text-gray-600 group-hover:text-navy-900'
                  }`}
                >
                  {step.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Showcase Card */}
      <ScrollReveal key={activeStep} delay={0.1}>
        <div className="bg-white rounded-3xl border border-navy-200 shadow-card p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full inline-block">
                Step {activeStep + 1} of {steps.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
                {steps[activeStep].title}
              </h3>
              <p className="text-base text-gray-700 font-normal leading-relaxed">
                {steps[activeStep].summary}
              </p>
            </div>

            <ul className="space-y-3 pt-2 border-t border-navy-100">
              {steps[activeStep].bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-sm text-navy-900 font-normal">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-6">
            <div className="relative bg-navy-50 rounded-2xl p-2 sm:p-4 border border-navy-200/80 shadow-inner group">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden shadow-sm bg-white">
                <Image
                  src={steps[activeStep].imageSrc}
                  alt={steps[activeStep].imageAlt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
