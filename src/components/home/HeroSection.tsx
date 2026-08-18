'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UCHECK_APPLY_URL } from '@/lib/constants';
import { ShieldIcon, CheckCircle2Icon } from '@/components/ui/Icons';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-linear-to-br from-navy-950 via-navy-900 to-navy-950 text-white pt-28 sm:pt-44 pb-16 md:pb-28 min-h-[80vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Lighting & Glows - hidden on mobile to prevent overflow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 right-10 w-125 h-125 bg-blue-600/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Benefit-Led Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={0.1} direction="up">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
                Background checks that <br className="hidden sm:inline" />
                <span className="bg-linear-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">
                  don&apos;t slow you down.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <p className="text-lg sm:text-xl text-navy-100 max-w-xl font-normal leading-relaxed">
                Reduce time-to-hire with automated Basic, Standard, and Enhanced DBS check processing. Apply online in under 10 minutes with direct uCheck portal submission.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up">
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
                <Button
                  href={UCHECK_APPLY_URL}
                  external
                  variant="orange"
                  size="lg"
                  className="text-base px-8 py-4 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                >
                  Get started today →
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-base font-medium text-navy-200 hover:text-white transition-colors py-3 sm:py-0 border border-navy-700/60 rounded-xl px-6 bg-navy-900/50 hover:bg-navy-800"
                >
                  Talk to an expert
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="up">
              <div className="pt-4 border-t border-navy-800/80 flex flex-wrap items-center gap-6 text-xs text-navy-200 font-normal">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="w-4 h-4 text-emerald-400" />
                  <span>Processed via uCheck</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="w-4 h-4 text-orange-400" />
                  <span>1–3 Working Day Average Turnaround</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hero Photographic Dashboard Image Panel */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={0.3} direction="up">
              <div className="relative bg-linear-to-b from-navy-800/90 to-navy-900/90 border border-navy-700/70 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md h-56 sm:h-96 lg:h-[420px] w-full group">
                <Image
                  src="/images/features/hero_dashboard_preview.png"
                  alt="DBSsubmit candidate background check status dashboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

