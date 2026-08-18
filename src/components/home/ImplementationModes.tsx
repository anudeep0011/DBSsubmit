import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';
import { Code2Icon, LayersIcon, MonitorCheckIcon } from '@/components/ui/Icons';
import { UCHECK_APPLY_URL } from '@/lib/constants';

export const ImplementationModes: React.FC = () => {
  const modes = [
    {
      icon: <Code2Icon className="w-6 h-6 text-orange-500" />,
      badge: 'API',
      title: 'Build with API',
      subtitle: 'REST API integration',
      description: 'Embed background check ordering and automated result webhooks directly into your custom hiring application or onboarding workflow.',
      ctaLabel: 'Request API documentation →',
      ctaHref: '/contact',
      isExternal: false,
    },
    {
      icon: <LayersIcon className="w-6 h-6 text-navy-700" />,
      badge: 'Integrations',
      title: 'Partner integrations',
      subtitle: 'Prebuilt HR & ATS connections',
      description: 'Connect DBSsubmit with your existing recruitment stack including Greenhouse, Lever, Workday, and PageUp for seamless candidate dispatch.',
      ctaLabel: 'Explore ATS integrations →',
      ctaHref: '/contact',
      isExternal: false,
    },
    {
      icon: <MonitorCheckIcon className="w-6 h-6 text-emerald-600" />,
      badge: 'Native platform',
      title: 'Use the DBSsubmit platform',
      subtitle: 'No integration required',
      description: 'Direct access to the uCheck web portal. Order checks, invite candidates, monitor status in real-time, and download certificates immediately.',
      ctaLabel: 'Get started on portal →',
      ctaHref: UCHECK_APPLY_URL,
      isExternal: true,
    },
  ];

  return (
    <SectionWrapper bg="white" id="implementation-modes">
      <div className="space-y-12 max-w-7xl mx-auto">
        <div className="space-y-3 max-w-3xl">
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-900 leading-tight">
              Wherever you work, DBSsubmit fits
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Choose from three flexible deployment methods designed for modern UK organisations.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, idx) => (
            <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
              <div className="group relative bg-navy-50/70 border border-navy-200 rounded-2xl p-8 shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between h-full space-y-8">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white border border-navy-200 flex items-center justify-center shrink-0 shadow-xs">
                      {mode.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-navy-100 text-navy-800 border border-navy-200">
                      {mode.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                      {mode.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-500 mt-1 uppercase tracking-wide">
                      {mode.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {mode.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-200">
                  {mode.isExternal ? (
                    <a
                      href={mode.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <span>{mode.ctaLabel}</span>
                    </a>
                  ) : (
                    <Link
                      href={mode.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <span>{mode.ctaLabel}</span>
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};


