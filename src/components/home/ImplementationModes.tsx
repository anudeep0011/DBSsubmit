import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Code2Icon, LayersIcon, MonitorCheckIcon } from '@/components/ui/Icons';

const modes = [
  {
    icon: Code2Icon,
    iconBg: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-500',
    title: 'Build with API',
    subtitle: 'Developer-First Automation',
    points: [
      'Direct REST endpoints for applicant dispatch and tracking',
      'Instant webhook notifications as soon as certificates are issued',
    ],
  },
  {
    icon: LayersIcon,
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-navy-700',
    title: 'Partner integrations',
    subtitle: 'Prebuilt Zero-Code Connectors',
    points: [
      'Plug-and-play connectors for leading HR and ATS platforms',
      'Automated candidate status sync with zero manual re-entry',
    ],
  },
  {
    icon: MonitorCheckIcon,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    title: 'Native web portal',
    subtitle: 'Zero Setup or Coding',
    points: [
      'Dedicated cloud portal to invite candidates and monitor progress',
      'Automated candidate SMS reminders and instant digital downloads',
    ],
  },
];

export const ImplementationModes: React.FC = () => {
  return (
    <SectionWrapper bg="orange-50" id="implementation-modes">
      <div className="space-y-12 max-w-7xl mx-auto">
        <div className="space-y-3 max-w-3xl">
          <ScrollReveal delay={0.15}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
              Wherever your team hires, <span className="text-orange-500">DBS-Express fits.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modes.map((mode, i) => {
            const Icon = mode.icon;
            return (
              <ScrollReveal key={mode.title} delay={0.15 + i * 0.1}>
                <div className="group bg-white border border-navy-200 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-orange-400 transition-all flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs ${mode.iconBg}`}
                    >
                      <Icon className={`w-6 h-6 ${mode.iconColor}`} />
                    </div>

                    {/* Title & subtitle */}
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900 tracking-tight">
                        {mode.title}
                      </h3>
                      <p className="text-xs font-semibold text-orange-500 mt-1 uppercase tracking-wide">
                        {mode.subtitle}
                      </p>
                    </div>

                    {/* 1-2 points per card */}
                    <ul className="space-y-2.5 pt-2">
                      {mode.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
