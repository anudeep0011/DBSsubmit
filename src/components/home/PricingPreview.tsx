'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const PricingPreview: React.FC = () => {
  const tiers = [
    {
      code: 'BASIC-01',
      name: 'Basic DBS Check',
      scope: 'Unspent convictions & conditional cautions',
      turnaround: '1–3 Days',
      fee: '£18.00 + fee',
    },
    {
      code: 'STD-02',
      name: 'Standard DBS Check',
      scope: 'Spent/unspent convictions, reprimands & warnings',
      turnaround: '2–5 Days',
      fee: '£18.00 + fee',
    },
    {
      code: 'ENH-03',
      name: 'Enhanced DBS Check',
      scope: 'Full criminal history + local police information check',
      turnaround: '3–7 Days',
      fee: '£38.00 + fee',
    },
  ];

  return (
    <SectionWrapper bg="navy-50" id="pricing-preview">
      <div className="space-y-16 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-6">
          <ScrollReveal delay={0.1}>
            <Badge variant="navy">Pricing matrix</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900">
              Official check tiers &amp; rates.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-700 max-w-2xl leading-relaxed font-normal">
              Transparent rate structure for organisations and individuals. Instant access via uCheck portal.
            </p>
          </ScrollReveal>
        </div>

        {/* Sleek Table Container */}
        <ScrollReveal delay={0.35}>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-navy-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-navy-200 text-navy-600 text-xs font-medium">
                    <th className="py-4 px-4">Code</th>
                    <th className="py-4 px-4">Check level</th>
                    <th className="py-4 px-4">Scope</th>
                    <th className="py-4 px-4">Turnaround</th>
                    <th className="py-4 px-4 text-right">Base fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-200 text-navy-900">
                  {tiers.map((tier, idx) => (
                    <tr key={idx} className="hover:bg-navy-50/70 transition-colors">
                      <td className="py-5 px-4 text-xs font-medium text-navy-600">{tier.code}</td>
                      <td className="py-5 px-4 font-medium text-base text-navy-900">{tier.name}</td>
                      <td className="py-5 px-4 text-sm text-gray-700 font-normal">{tier.scope}</td>
                      <td className="py-5 px-4 text-xs font-medium text-orange-400">{tier.turnaround}</td>
                      <td className="py-5 px-4 text-right font-medium text-sm text-navy-900">{tier.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-navy-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-navy-600 font-normal">
                Official uCheck accredited rate cards apply.
              </span>
              <Button href="/pricing" variant="navy" size="md">
                View full pricing &amp; volume discounts →
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </SectionWrapper>
  );
};
