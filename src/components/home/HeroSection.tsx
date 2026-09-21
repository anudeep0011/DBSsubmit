'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { REGISTER_URL } from '@/lib/constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-bg-base text-navy-950 pt-28 sm:pt-44 pb-16 md:pb-28 min-h-[80vh] sm:min-h-[85vh] flex items-center overflow-hidden border-b border-purple-100/60">
      {/* Background Lighting & Glows - hidden on mobile to prevent overflow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 right-10 w-125 h-125 bg-purple-300/25 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Benefit-Led Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={0.1} direction="up">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-orange-500">
                Background checks that <br className="hidden sm:inline" />
                don&apos;t slow you down.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <p className="text-lg sm:text-xl text-navy-800/80 max-w-xl font-normal leading-relaxed">
                Reduce time-to-hire with automated Basic, Standard, and Enhanced DBS check processing. Apply online in under 10 minutes with same-day processing for submissions before 4pm UK time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up">
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
                <Button
                  href={REGISTER_URL}
                  external
                  variant="orange"
                  size="lg"
                  className="text-base px-8 py-4 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                >
                  Get started today →
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-base font-semibold text-navy-900 hover:text-navy-950 transition-colors py-3 sm:py-0 border border-navy-200 rounded-xl px-6 bg-white hover:bg-orange-50 shadow-xs"
                >
                  Talk to an expert
                </Link>
              </div>
            </ScrollReveal>


          </div>

          {/* Right Column: Hero Photographic Dashboard Image Panel */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={0.3} direction="up">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-purple-200/60 bg-navy-600 h-64 sm:h-96 lg:h-110 w-full group">
                <Image
                  src="/images/landing/hero_landing_showcase.jpg"
                  alt="DBS-Express candidate management dashboard and service selection interface"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
