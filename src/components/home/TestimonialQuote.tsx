'use client';

import React from 'react';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface TestimonialQuoteProps {
  quote?: string;
  name?: string;
  title?: string;
  company?: string;
  avatarSrc?: string;
  bg?: 'navy-50' | 'white' | 'orange-50';
}

export const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({
  quote = '“DBSsubmit took the guesswork out of screening new starters — the pricing is upfront and the checks come back quickly.”',
  name = 'Sarah Whitfield',
  title = 'HR Manager',
  company = 'Northgate Care Group',
  avatarSrc = '/images/testimonials/sarah_whitfield.png',
  bg = 'navy-50',
}) => {
  return (
    <SectionWrapper bg={bg} id="testimonial-quote">
      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-900 tracking-tight leading-snug">
            {quote}
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-card shrink-0">
              <Image
                src={avatarSrc}
                alt={`${name} avatar`}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-semibold text-navy-900 text-base">{name}</div>
              <div className="text-xs text-navy-600 font-normal mt-0.5">
                {title} — <span className="text-navy-900 font-medium">{company}</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};
