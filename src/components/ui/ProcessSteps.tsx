import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface StepItem {
  number: string;
  title: string;
  body: string;
  tag?: string;
}

interface ProcessStepsProps {
  steps?: StepItem[];
}

const defaultSteps: StepItem[] = [
  {
    number: '1',
    title: 'Candidate & Role Setup',
    body: 'Enter applicant details, assign company departments, and use our smart eligibility questionnaire to determine the lawful DBS level (Basic, Standard, or Enhanced).',
  },
  {
    number: '2',
    title: 'Bundle Checks & Digital ID',
    body: 'Select services in one click: DBS checks, free Right to Work verification, biometric Digital ID (£6.50), and hands-off reference checks (£2.95) with flexible payment splitting.',
  },
  {
    number: '3',
    title: 'Track & Receive Results',
    body: 'Monitor status in real time on your dashboard, export Excel compliance records, and receive government-backed results with official paper certificates dispatched.',
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
                <div className="w-10 h-10 rounded-full bg-navy-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy-900 tracking-tight">{step.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-normal">{step.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
