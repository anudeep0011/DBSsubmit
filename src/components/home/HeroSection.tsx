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
    <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white pt-36 sm:pt-44 pb-20 md:pb-28 min-h-[85vh] flex items-center overflow-hidden">
      {/* Dynamic Background Blended Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Benefit-Led Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={0.1} direction="up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                Background checks that <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">
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
              <div className="relative bg-gradient-to-b from-navy-800/90 to-navy-900/90 border border-navy-700/70 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md h-72 sm:h-96 lg:h-[420px] w-full group">
                <Image
                  src="/images/features/hero_dashboard_preview.png"
                  alt="DBSsubmit candidate background check status dashboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Status Pill Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-navy-900/90 border border-navy-700/80 backdrop-blur-md shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="text-xs font-bold text-white block">uCheck Direct API Portal</span>
                      <span className="text-[10px] text-navy-300">Live DBS application submission</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Accredited
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

