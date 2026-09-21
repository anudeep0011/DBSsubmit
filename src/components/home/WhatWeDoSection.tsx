'use client';

import React from 'react';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const WhatWeDoSection: React.FC = () => {
  const features = [
    {
      title: 'Built for SMEs & high-volume teams',
      subtitle: 'Pay for what you use, with no contracts',
      image: '/images/landing/sme_teams_collab.jpg',
      alt: 'Business team collaborating on candidate onboarding in a modern office',
    },
    {
      title: 'Industry-leading turnaround times',
      subtitle: 'Same-day processing before 4pm',
      image: '/images/landing/fast_turnaround_hiring.jpg',
      alt: 'Fast hiring process with managers welcoming new employee',
    },
    {
      title: 'UK compliance made simple',
      subtitle: 'Official DBS certificate dispatch',
      image: '/images/landing/compliance_official.jpg',
      alt: 'Compliance officer reviewing official DBS certificates and documents',
    },
  ];

  return (
    <SectionWrapper bg="white" id="what-we-do">
      <div className="space-y-12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
              Background screening <span className="text-orange-500">built for speed</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Simple, compliant DBS checks without administrative delays, long-term contracts, or paperwork.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
              <div className="group relative bg-white border border-navy-200 rounded-2xl overflow-hidden shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between h-full">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Card Content */}
                <div className="p-7 space-y-2">
                  <h3 className="text-xl font-semibold text-navy-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
