import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy | DBSsubmit',
  description: 'Privacy policy and data protection compliance information for DBSsubmit.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900">
              Privacy policy
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
              This Privacy Policy explains how <strong className="text-navy-900 font-medium">{SITE.legalName}</strong> (trading as DBSsubmit) collects, uses, and protects personal data when you visit our website at dbssubmit.co.uk.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-navy-900 tracking-tight">1. Information we collect</h2>
              <p className="text-gray-700 font-normal">
                We collect contact enquiry information (name, email address, phone number, message details) when you submit enquiry forms on our website.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-navy-900 tracking-tight">2. How we use your data</h2>
              <p className="text-gray-700 font-normal">
                Your information is used solely to respond to your enquiries, provide quote estimates, and connect you to our processing partner uCheck.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-navy-900 tracking-tight">3. DBS applicant data scope</h2>
              <p className="text-gray-700 font-normal">
                DBSsubmit does not store, process, or retain individual DBS applicant criminal record history or identity documents. All DBS application workflows take place directly on uCheck&apos;s accredited, white-labelled platform.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
