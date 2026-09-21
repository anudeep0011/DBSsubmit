import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CheckLevelSelector } from '@/components/employers/CheckLevelSelector';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { REGISTER_URL } from '@/lib/constants';
import { PersonCertificateIcon } from '@/components/ui/Illustrations';
import Link from 'next/link';

export const metadata = {
  title: 'DBS Checks for Individuals | DBS-Express',
  description: 'Apply for your official Basic DBS check online. Fast turnaround for employment, volunteering, or personal reference with official rates from £42.00.',
};

export default function IndividualsPage() {
  const individualRates = [
    {
      title: 'Basic DBS Check',
      price: '£42.00',
      breakdown: '£21.50 Gov Fee + £20.50 Admin Fee',
      scope: 'Unspent criminal convictions and conditional cautions. Anyone can apply directly online.',
      turnaround: 'Under 24–48 hours',
      popular: true,
    },
    {
      title: 'Volunteer DBS Check',
      price: '£18.00',
      breakdown: '£0.00 Gov Fee (Waived) + £18.00 Admin Fee',
      scope: 'Eligible non-remunerated voluntary roles with charities, schools, and community groups.',
      turnaround: '1–5 working days',
      popular: false,
    },
    {
      title: 'Digital ID Verification',
      price: '£6.50',
      breakdown: 'Instant Biometric Smartphone Verification',
      scope: 'Verifies your passport or driving licence digitally in 3 minutes without posting physical documents.',
      turnaround: 'Instant',
      popular: false,
    },
  ];

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
      a: 'Most Basic checks are completed in under 24–48 hours when submitted using digital ID verification before 4pm UK time.',
    },
    {
      q: 'Will I receive an official paper certificate?',
      a: 'Yes. An official DBS paper certificate is dispatched by post to your home address, and a digital summary is accessible online.',
    },
    {
      q: 'Can I apply for Standard or Enhanced checks as an individual?',
      a: 'Legally, Standard and Enhanced DBS checks must be requested by an eligible employer or registered body. If your new employer asked you to apply, they can initiate it through our employer portal and invite you.',
    },
    {
      q: 'What is the Update Service?',
      a: 'The DBS Update Service allows you to keep your certificate up to date online for £13/year, letting future employers check your status instantly.',
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
                  Apply for your individual DBS check
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
                  Starting a new job, applying for a voluntary role, or completing a university placement? Apply online for your official DBS certificate in under 10 minutes with same-day processing for submissions before 4pm UK time.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button href={REGISTER_URL} external variant="orange" size="md">
                    Start Application (£42.00) →
                  </Button>
                  <Link href="/pricing" className="text-sm font-semibold text-navy-900 hover:text-orange-600 transition-colors">
                    View full rate matrix →
                  </Link>
                </div>
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

      {/* 2. Individual Rates Breakdown Cards */}
      <SectionWrapper bg="navy-50">
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                Transparent individual rates
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-gray-700 font-normal">
                Fixed, upfront fees with zero hidden charges. All government statutory charges included.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {individualRates.map((rate, idx) => (
              <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                <div
                  className={`rounded-2xl p-7 border flex flex-col justify-between h-full space-y-6 shadow-xs ${
                    rate.popular
                      ? 'bg-white border-orange-400 ring-2 ring-orange-400/20'
                      : 'bg-white border-navy-200'
                  }`}
                >
                  <div className="space-y-4">
                    {rate.popular && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100 px-2.5 py-0.5 rounded-full inline-block">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">{rate.title}</h3>
                      <div className="text-3xl font-extrabold text-navy-950 mt-1">{rate.price}</div>
                      <span className="text-xs text-gray-500 block font-normal mt-0.5">{rate.breakdown}</span>
                    </div>

                    <p className="text-sm text-gray-700 font-normal leading-relaxed pt-3 border-t border-navy-100">
                      {rate.scope}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-navy-100 flex items-center justify-between text-xs text-navy-600">
                    <span>Turnaround:</span>
                    <span className="font-semibold text-orange-600">{rate.turnaround}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Check Tier Selector */}
      <SectionWrapper bg="white">
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

      {/* 4. Individual Guidance */}
      <SectionWrapper bg="navy-50">
        <div className="space-y-12 max-w-6xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-navy-200 shadow-card max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 tracking-tight">
                Fast &amp; paperless online applications
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Our online application form takes under 10 minutes to complete. Digital identity checks eliminate the need to post original identity documents.
              </p>
              <div className="pt-2">
                <Button href={REGISTER_URL} external variant="orange" size="md">
                  Start individual application →
                </Button>
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

      {/* 5. Single Compact CTA */}
      <SectionWrapper bg="white" className="border-t border-navy-100">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-6 max-w-3xl mx-auto py-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Start your Basic DBS <span className="text-orange-500">application online</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-normal">
              Complete your online form in under 10 minutes with secure digital identity verification.
            </p>

            <div className="pt-2">
              <Button href={REGISTER_URL} external variant="orange" size="lg">
                Start individual Basic check →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
