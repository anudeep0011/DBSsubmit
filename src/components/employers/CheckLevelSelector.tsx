'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { REGISTER_URL } from '@/lib/constants';

export const CheckLevelSelector: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'basic' | 'standard' | 'enhanced'>('basic');

  const levels = [
    {
      id: 'basic',
      code: 'Level 1',
      title: 'Basic DBS check',
      badge: 'Individual & employer eligible',
      description: 'Checks unspent convictions and conditional cautions. Available for any job role, self-employed individuals, and personal reference.',
      turnaround: 'Under 24–48 hours',
      whoFor: 'All employment sectors, drivers, warehouse, retail, contractors, and personal verification.',
      individualPrice: '£42.00 total',
      employerPrice: 'From £34.10 – £37.70',
      govFee: '£21.50',
    },
    {
      id: 'standard',
      code: 'Level 2',
      title: 'Standard DBS check',
      badge: 'Regulated roles only',
      description: 'Checks spent and unspent convictions, cautions, reprimands, and final warnings from the Police National Computer.',
      turnaround: '1–5 working days',
      whoFor: 'Security personnel, legal professionals, court staff, financial and accountancy services.',
      individualPrice: '£42.00 total',
      employerPrice: 'From £34.10 – £37.70',
      govFee: '£21.50',
      volunteerPrice: '£18.00',
    },
    {
      id: 'enhanced',
      code: 'Level 3',
      title: 'Enhanced DBS check',
      badge: 'Healthcare & education',
      description: 'Standard check + local police information + optional Children and Vulnerable Adults Barred List checks for regulated activities.',
      turnaround: '6–13 working days',
      whoFor: 'Teachers, care home workers, NHS doctors, nurses, childminders, foster carers, school staff.',
      individualPrice: '£73.00 total',
      employerPrice: 'From £62.10 – £65.70',
      govFee: '£49.50',
      volunteerPrice: '£18.00',
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
              className={`px-5 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                selectedLevel === level.id
                  ? 'bg-navy-600 text-white border border-orange-400 shadow-md ring-2 ring-orange-400/20'
                  : 'bg-white text-navy-900 hover:bg-navy-50 border border-navy-200 shadow-2xs'
              }`}
            >
              {level.code} · {level.title}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Detail Card */}
      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto border border-navy-200 bg-white rounded-2xl p-8 sm:p-12 text-navy-900 space-y-8 shadow-card">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-navy-200 pb-6">
            <div>
              <Badge variant="navy">{current.badge}</Badge>
              <h3 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-3 tracking-tight">{current.title}</h3>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs text-navy-600 font-medium block">Turnaround</span>
              <span className="text-base font-semibold text-orange-500">{current.turnaround}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-navy-900">
            <div>
              <span className="text-navy-600 font-semibold text-xs uppercase tracking-wider block mb-1">Check scope &amp; legal definition:</span>
              <p className="leading-relaxed text-sm text-gray-700 font-normal">{current.description}</p>
            </div>

            <div>
              <span className="text-navy-600 font-semibold text-xs uppercase tracking-wider block mb-1">Target eligibility:</span>
              <p className="leading-relaxed text-sm text-gray-700 font-normal">{current.whoFor}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-navy-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-navy-600 font-normal">
              Selected tier: <strong className="text-navy-900 font-medium">{current.title}</strong>
            </span>
            <Button
              href={`${REGISTER_URL}?checkType=${selectedLevel}`}
              external
              variant="orange"
              size="md"
            >
              Apply for {current.title} →
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
