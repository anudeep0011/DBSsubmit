import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CheckLevelSelector } from '@/components/employers/CheckLevelSelector';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UCHECK_APPLY_URL } from '@/lib/constants';
import { PersonCertificateIcon } from '@/components/ui/Illustrations';
import { IndividualPortalVisual } from '@/components/ui/VisualGraphics';

export const metadata = {
  title: 'DBS Checks for Individuals | DBSsubmit',
  description: 'Apply for your official Basic DBS check online. Fast turnaround for employment, volunteering, or personal reference.',
};

export default function IndividualsPage() {
  const individualFaqs = [
    {
      q: 'Do I need an employer to apply for a Basic DBS check?',
      a: 'No. Any individual in England or Wales can request a Basic DBS check for themselves online without employer sponsorship.',
    },
    {
      q: 'What documents do I need to verify my identity?',
      a: 'You will need a valid Passport or Photocard Driving Licence, plus proof of address such as a bank statement or utility bill issued within the last 3 months.',
    },
    {
      q: 'How long does individual processing take?',
      a: 'Most Basic checks are completed within 1 to 3 working days when submitted using digital ID verification.',
    },
    {
      q: 'Will I receive an official paper certificate?',
      a: 'Yes. An official DBS paper certificate is dispatched by post to your home address, and a digital summary is accessible online.',
    },
  ];

  return (
    <>
      {/* 1. Short Header */}
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900 leading-[1.1]">
                  Apply for your DBS check
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
                  Starting a new job, applying for a volunteering role, or completing a university placement? A Basic DBS check confirms your unspent criminal record status — apply online and receive your certificate within 1–3 working days.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <ScrollReveal delay={0.25}>
                <PersonCertificateIcon className="w-28 h-28 sm:w-36 sm:h-36" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Check Tier Selector */}
      <SectionWrapper bg="navy-50">
        <div className="space-y-10">
          <div className="space-y-3 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                Check eligibility &amp; options
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-gray-700 font-normal">
                Under statutory rules, individuals can apply directly for a <strong className="text-navy-900 font-medium">Basic DBS check</strong>. Standard and Enhanced checks require an employer request.
              </p>
            </ScrollReveal>
          </div>
          <CheckLevelSelector />
        </div>
      </SectionWrapper>

      {/* 3. Individual Guidance with Bespoke Visual Panel */}
      <SectionWrapper bg="white">
        <div className="space-y-12 max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-navy-50 p-8 sm:p-10 rounded-2xl border border-navy-200 shadow-card">
              <div className="lg:col-span-5 min-h-[260px]">
                <IndividualPortalVisual />
              </div>
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 tracking-tight">
                  Fast &amp; paperless online applications
                </h2>
                <p className="text-base text-gray-700 leading-relaxed font-normal">
                  Our online application form takes under 10 minutes to complete. Digital identity checks eliminate the need to post original identity documents.
                </p>
                <div className="pt-2">
                  <Button href={UCHECK_APPLY_URL} external variant="orange" size="md">
                    Start individual application →
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Common Q&A Grid */}
          <div className="space-y-8 pt-4">
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-navy-900">
                Common applicant questions
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {individualFaqs.map((faq, idx) => (
                <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                  <div className="bg-white p-6 rounded-xl border border-navy-200 space-y-2 h-full shadow-xs">
                    <h3 className="text-base font-semibold text-navy-900 tracking-tight">{faq.q}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Single Compact CTA */}
      <SectionWrapper bg="navy">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Start your Basic DBS application on uCheck
            </h2>

            <p className="text-lg text-navy-100 max-w-xl mx-auto leading-relaxed font-normal">
              Complete your online form in under 10 minutes with secure digital identity verification.
            </p>

            <div className="pt-2">
              <Button href={UCHECK_APPLY_URL} external variant="orange" size="lg">
                Start individual Basic check →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
