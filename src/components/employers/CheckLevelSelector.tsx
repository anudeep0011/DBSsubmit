'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UCHECK_APPLY_URL } from '@/lib/constants';

export const CheckLevelSelector: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'basic' | 'standard' | 'enhanced'>('basic');

  const levels = [
    {
      id: 'basic',
      code: 'Level 1',
      title: 'Basic DBS check',
      badge: 'Individual & employer eligible',
      description: 'Checks unspent convictions and conditional cautions. Available for any job role or personal reference.',
      turnaround: '1–3 working days',
      whoFor: 'All job roles, self-employment, contractor verification.',
    },
    {
      id: 'standard',
      code: 'Level 2',
      title: 'Standard DBS check',
      badge: 'Regulated roles only',
      description: 'Checks spent and unspent convictions, cautions, reprimands, and warnings.',
      turnaround: '2–5 working days',
      whoFor: 'Security personnel, legal professionals, court staff, financial services.',
    },
    {
      id: 'enhanced',
      code: 'Level 3',
      title: 'Enhanced DBS check',
      badge: 'Healthcare & education',
      description: 'Standard check + local police information + optional Children & Vulnerable Adults Barred List checks.',
      turnaround: '3–7 working days',
      whoFor: 'Teachers, care workers, doctors, nurses, childminders.',
    },
  ];

  const current = levels.find((l) => l.id === selectedLevel)!;

  return (
    <div className="space-y-12">
      {/* Selector Tabs */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id as 'basic' | 'standard' | 'enhanced')}
              className={`px-5 py-3 rounded-lg font-medium text-xs transition-all cursor-pointer ${
                selectedLevel === level.id
                  ? 'bg-navy-600 text-white border border-orange-400 shadow-sm'
                  : 'bg-white text-navy-900 hover:bg-navy-100 border border-navy-200'
              }`}
            >
              {level.code} · {level.title}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Detail Card */}
      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto border border-navy-200 bg-white rounded-2xl p-8 sm:p-12 text-navy-900 space-y-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-navy-200 pb-6">
            <div>
              <Badge variant="navy">{current.badge}</Badge>
              <h3 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-3 tracking-tight">{current.title}</h3>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs text-navy-600 font-medium block">Est. turnaround</span>
              <span className="text-base font-medium text-orange-400">{current.turnaround}</span>
            </div>
          </div>

          <div className="space-y-6 text-navy-900">
            <div>
              <span className="text-navy-600 font-medium text-xs block mb-1">Check scope &amp; legal definition:</span>
              <p className="leading-relaxed text-base text-gray-700 font-normal">{current.description}</p>
            </div>

            <div>
              <span className="text-navy-600 font-medium text-xs block mb-1">Target eligibility:</span>
              <p className="leading-relaxed text-base text-gray-700 font-normal">{current.whoFor}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-navy-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-navy-600 font-normal">
              Selected tier: <strong className="text-navy-900 font-medium">{current.title}</strong>
            </span>
            <Button
              href={`${UCHECK_APPLY_URL}?checkType=${selectedLevel}`}
              external
              variant="orange"
              size="md"
            >
              Apply for {current.title} via uCheck →
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
