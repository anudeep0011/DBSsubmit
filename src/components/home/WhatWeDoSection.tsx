'use client';

import React from 'react';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const WhatWeDoSection: React.FC = () => {
  const features = [
    {
      title: 'Built to scale with your business',
      subtitle: 'Pay for what you use — no contracts',
      description: 'Whether you need 1 check or 500, scale seamlessly. Zero setup fees, zero monthly commitments, and easy team administration.',
      imageSrc: '/images/features/smb_screening_portal.png',
      imageAlt: 'SME background check portal scalability',
    },
    {
      title: 'Industry-leading turnaround times',
      subtitle: '1–3 working day average delivery',
      description: 'Automated digital ID verification and direct uCheck portal submission eliminate paper delays and accelerate your time-to-hire.',
      imageSrc: '/images/features/hero_dashboard_preview.png',
      imageAlt: 'Fast DBS check turnaround tracker',
    },
    {
      title: 'Global & UK compliance made simple',
      subtitle: 'Official DBS certificate dispatch',
      description: 'Processed via an official DBS registered umbrella body. Compliant digital identity verification and official paper certificate issuance.',
      imageSrc: '/images/features/care_education_workforce.png',
      imageAlt: 'DBS compliance and certificate dispatch',
    },
  ];

  return (
    <SectionWrapper bg="white" id="what-we-do">
      <div className="space-y-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-900 leading-[1.08]">
              We fixed everything you hate about background screening
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              No manual follow-ups, uncertain turnaround times, or candidates abandoning slow paper processes. Just fast, compliant DBS checks.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
              <div className="group relative bg-navy-50 border border-navy-200 rounded-2xl overflow-hidden shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between h-full">
                {/* Visual Image Header */}
                <div className="relative h-52 w-full border-b border-navy-200 overflow-hidden">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-navy-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                      {feature.subtitle}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal pt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};


