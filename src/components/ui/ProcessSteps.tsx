import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface StepItem {
  number: string;
  title: string;
  body: string;
}

interface ProcessStepsProps {
  steps?: StepItem[];
}

const defaultSteps: StepItem[] = [
  {
    number: '1',
    title: 'Select your check level',
    body: 'Choose Basic, Standard, Enhanced, or Enhanced with Barred Lists based on your candidate role requirements.',
  },
  {
    number: '2',
    title: 'Submit applicant details',
    body: 'Candidate completes identity verification securely online via uCheck digital ID integration.',
  },
  {
    number: '3',
    title: 'Receive official certificate',
    body: 'Track real-time status in your portal and download the official certificate once issued.',
  },
];

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps = defaultSteps }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, idx) => (
          <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
            <div className="bg-white rounded-2xl p-8 border border-navy-200 shadow-card hover:shadow-card-hover transition-all space-y-4 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-navy-600 text-white font-semibold text-sm flex items-center justify-center shadow-xs">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 tracking-tight">{step.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-normal">{step.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
