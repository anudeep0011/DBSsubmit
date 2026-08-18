import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CheckLevelSelector } from '@/components/employers/CheckLevelSelector';
import { PricingPreview } from '@/components/home/PricingPreview';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UCHECK_APPLY_URL } from '@/lib/constants';
import { ShieldTieredIcon } from '@/components/ui/Illustrations';
import { EmployerPortalVisual } from '@/components/ui/VisualGraphics';

export const metadata = {
  title: 'DBS Checks for Employers | DBSsubmit',
  description: 'Workforce background screening for organisations. Basic, Standard, and Enhanced DBS checks with volume pricing.',
};

export default function EmployersPage() {
  return (
    <>
      {/* 1. Short Header */}
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900 leading-[1.1]">
                  Workforce DBS screening
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
                  Submit checks for multiple candidates from a single employer dashboard. Each application routes directly to uCheck for government-backed processing.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <ScrollReveal delay={0.25}>
                <ShieldTieredIcon className="w-28 h-28 sm:w-36 sm:h-36" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Check Level Selector */}
      <SectionWrapper bg="navy-50">
        <div className="space-y-10">
          <div className="space-y-3 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                Select required check tier
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-gray-700 font-normal">
                Compare Basic, Standard, and Enhanced eligibility criteria for your candidate roles.
              </p>
            </ScrollReveal>
          </div>
          <CheckLevelSelector />
        </div>
      </SectionWrapper>

      {/* 3. Employer Proof Banner with Bespoke Visual Graphic */}
      <SectionWrapper bg="white">
        <ScrollReveal delay={0.1}>
          <div className="bg-navy-50 rounded-2xl p-8 sm:p-12 border border-navy-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 tracking-tight">
                Built for workforce managers &amp; HR teams
              </h2>
              <ul className="space-y-4 text-base text-gray-700 font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">✓</span>
                  <span>
                    <strong className="text-navy-900 font-medium">Volume discounts start at 20 checks/year:</strong> Administration fees reduce automatically as your annual candidate volume increases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">✓</span>
                  <span>
                    <strong className="text-navy-900 font-medium">Dedicated account management:</strong> Organisations processing 100+ checks annually receive named phone and email escalation support.
                  </span>
                </li>
              </ul>
              <div className="pt-2">
                <Button href={UCHECK_APPLY_URL} external variant="orange" size="md">
                  Set up employer account →
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 min-h-[260px]">
              <EmployerPortalVisual />
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* 5. Single Compact CTA */}
      <SectionWrapper bg="navy">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Set up your employer account
            </h2>

            <p className="text-lg text-navy-100 max-w-xl mx-auto leading-relaxed font-normal">
              Create an employer account on uCheck to start ordering candidate checks immediately.
            </p>

            <div className="pt-2">
              <Button href={UCHECK_APPLY_URL} external variant="orange" size="lg">
                Set up employer portal →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
