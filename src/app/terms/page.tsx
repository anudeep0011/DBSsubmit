import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: 'Terms & Conditions | DBSsubmit',
  description: 'Terms and conditions for using DBSsubmit services.',
};

export default function TermsPage() {
  return (
    <>
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900">
              Terms &amp; conditions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xs text-navy-600 font-medium">Last updated: August 2026</p>
          </ScrollReveal>
        </div>
      </header>

      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto space-y-8 text-navy-900 text-lg leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p className="text-navy-900 font-normal">
              Welcome to DBSsubmit, operated by <strong className="text-navy-900 font-medium">{SITE.legalName}</strong>. By accessing our site or using our services, you agree to these Terms and Conditions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-navy-900 tracking-tight">1. Scope of service</h2>
              <p className="text-gray-700 font-normal">
                DBSsubmit provides guidance, marketing, and lead dispatch services for DBS checks. Criminal record check processing and certificate issuance are fulfilled by our accredited partner, uCheck.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-navy-900 tracking-tight">2. User responsibilities</h2>
              <p className="text-gray-700 font-normal">
                Users and employers must ensure they hold the necessary legal entitlement to request criminal record checks under the Rehabilitation of Offenders Act 1974.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
