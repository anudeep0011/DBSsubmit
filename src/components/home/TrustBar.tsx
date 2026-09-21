'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-navy-200 py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[0.8125rem] font-medium text-navy-600">
              Trusted compliance &amp; accredited infrastructure
            </span>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="bg-navy-50 border border-navy-200 rounded-md px-3 py-1 text-[0.8125rem] font-medium text-navy-900">
                ICO data registered
              </span>
              <span className="bg-navy-50 border border-navy-200 rounded-md px-3 py-1 text-[0.8125rem] font-medium text-navy-900">
                DBS umbrella body
              </span>
              <span className="bg-navy-50 border border-navy-200 rounded-md px-3 py-1 text-[0.8125rem] font-medium text-navy-900">
                Accredited DBS Processing
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
