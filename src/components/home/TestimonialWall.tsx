'use client';

import React from 'react';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarSrc?: string;
  initials?: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote: '“Setup took ten minutes and our first check was back in three days.”',
    name: 'Michael Ossai',
    title: 'Operations Lead',
    company: 'Fenwick Logistics',
    avatarSrc: '/images/testimonials/michael_ossai.png',
  },
  {
    quote: '“Finally a DBS provider that publishes its prices upfront.”',
    name: 'Priya Anand',
    title: 'People Partner',
    company: 'Anand & Co Recruitment',
    avatarSrc: '/images/testimonials/priya_anand.png',
  },
  {
    quote: '“Support actually replies, which is rare in this industry.”',
    name: 'Tom Beckett',
    title: 'Founder',
    company: 'Beckett Property Management',
    initials: 'TB',
  },
];

interface TestimonialWallProps {
  testimonials?: TestimonialItem[];
}

export const TestimonialWall: React.FC<TestimonialWallProps> = ({ testimonials = defaultTestimonials }) => {
  return (
    <SectionWrapper bg="orange-50" id="testimonials">
      <div className="space-y-12 max-w-7xl mx-auto">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 tracking-tight">
              Trusted by organisations and applicants alike
            </h2>
            <p className="text-gray-700 text-base font-normal">
              Here is what hiring teams and individuals say about our screening service.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
              <div className="bg-white border border-navy-200 rounded-2xl p-8 space-y-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between h-full">
                <p className="text-base text-navy-900 leading-relaxed font-normal">
                  {item.quote}
                </p>

                <div className="pt-4 border-t border-navy-100 flex items-center gap-3">
                  {item.avatarSrc ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-navy-200 shrink-0 shadow-xs">
                      <Image src={item.avatarSrc} alt={item.name} fill sizes="44px" className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-orange-50 text-navy-900 border border-orange-200 font-semibold text-xs flex items-center justify-center shrink-0">
                      {item.initials || item.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">{item.name}</div>
                    <div className="text-xs text-navy-600 font-normal">
                      {item.title} · <span className="text-navy-900 font-medium">{item.company}</span>
                    </div>
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
