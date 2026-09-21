import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PricingPreview } from '@/components/home/PricingPreview';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { REGISTER_URL } from '@/lib/constants';

export const metadata = {
  title: 'DBS Check Pricing & Volume Discounts | DBS-Express',
  description: 'Official rate matrix for Basic, Standard, and Enhanced DBS checks. Volume tiers for employer organisations from 1 to 1,500+ checks per year.',
};

export default function PricingPage() {
  const tiers = [
    {
      name: 'Tier 1',
      range: '1 - 99 checks / year',
      highlight: '£16.20 Admin Fee',
      priceDetail: 'Basic/Std: £37.70 · Enhanced: £65.70',
      features: ['No setup or registration fees', 'Full online portal access', 'Standard email & phone support', 'Pay-as-you-go credit card or account billing'],
      popular: false,
      btnText: 'Get Started →',
      btnVariant: 'navy-outline' as const,
    },
    {
      name: 'Tier 2',
      range: '100 - 499 checks / year',
      highlight: '£13.80 Admin Fee',
      priceDetail: 'Basic/Std: £35.30 · Enhanced: £63.30',
      features: ['Automatic volume discount per check', 'Dedicated account specialist', 'Priority portal processing before 4pm', 'Departmental candidate tracking & export'],
      popular: true,
      btnText: 'Register Organisation →',
      btnVariant: 'orange' as const,
    },
    {
      name: 'Tier 3',
      range: '500 - 1,499 checks / year',
      highlight: '£12.60 Admin Fee',
      priceDetail: 'Basic/Std: £34.10 · Enhanced: £62.10',
      features: ['Lowest standard administration tier', 'Custom invoicing & 30-day payment terms', 'Multi-evidence checker delegation', 'Batch candidate upload & API integration options'],
      popular: false,
      btnText: 'Scale With Us →',
      btnVariant: 'navy' as const,
    },
  ];

  const pricingClarifications = [
    {
      q: 'What is included in the total check price?',
      a: 'The total client price combines the official Disclosure and Barring Service (DBS) government fee plus our transparent administration fee (inclusive of VAT). It covers portal processing, evidence checking, and certificate dispatch.',
    },
    {
      q: 'How do volume discounts work?',
      a: 'Administration fees drop automatically as your annual submission tier increases: from £16.20 in Tier 1 down to £12.60 in Tier 3, and bespoke rates for 1,500+ submissions.',
    },
    {
      q: 'Can employers split payment with candidates?',
      a: 'Yes. In our portal, employers can choose whether the business covers 100% of the check fee, splits a designated percentage with the applicant, or has the applicant pay directly.',
    },
    {
      q: 'Are volunteer checks free?',
      a: 'The UK government waives the disclosure fee for eligible non-remunerated voluntary roles (£0.00 gov fee). Only a flat £18.00 portal administration fee applies.',
    },
    {
      q: 'What is Digital ID verification?',
      a: 'Digital ID allows candidates to securely verify their passport or driving licence and address from their phone in minutes, eliminating the need for employers to physically inspect physical identity documents.',
    },
    {
      q: 'What payment terms are offered?',
      a: 'You can pay instantly via credit/debit card on submission, or setup 30-day invoicing terms for high-volume registered organisations.',
    },
  ];

  return (
    <>
      {/* 1. Compact White Header */}
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-4">
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900 leading-[1.1]">
                Official DBS check pricing
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
                Government statutory fees paired with clear, volume-discounted administration rates. Transparent pricing with zero hidden subscription charges.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* 2. Full Pricing Matrix Component with Toggle */}
      <PricingPreview />

      {/* 3. Annual Volume Tiers Breakdown */}
      <SectionWrapper bg="white">
        <div className="space-y-12">
          <div className="space-y-3 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                Employer annual volume tiers
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-gray-700 font-normal">
                Administration fees automatically scale down as your organisation submits checks through our platform.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                <div
                  className={`rounded-2xl p-8 flex flex-col justify-between h-full border space-y-8 shadow-sm ${
                    tier.popular
                      ? 'bg-orange-50 border-orange-400 text-navy-900'
                      : 'bg-white border-navy-200 text-navy-900 hover:border-navy-300'
                  }`}
                >
                  <div className="space-y-6">
                    {tier.popular && (
                      <span className="text-xs font-medium text-white bg-orange-500 px-3 py-1 rounded-full inline-block shadow-xs">
                        Most Popular for Organisations
                      </span>
                    )}
                    <div>
                      <h3 className="text-2xl font-semibold text-navy-900">{tier.name}</h3>
                      <span className="text-xs text-navy-600 block mt-1 font-normal">{tier.range}</span>
                    </div>

                    <div>
                      <div className="text-3xl font-bold text-navy-900 tracking-tight">{tier.highlight}</div>
                      <div className="text-xs text-gray-600 mt-1 font-medium">{tier.priceDetail}</div>
                    </div>

                    <ul className="space-y-3 text-sm font-normal text-gray-700 pt-2 border-t border-navy-200">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-600 border border-orange-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      href={REGISTER_URL}
                      external
                      variant={tier.btnVariant}
                      size="md"
                      className="w-full"
                    >
                      {tier.btnText}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Comprehensive FAQ Clarification Block */}
      <SectionWrapper bg="navy-50">
        <div className="space-y-8 max-w-5xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-navy-900">
                Pricing &amp; billing details
              </h2>
              <p className="text-sm text-gray-600 font-normal">Everything you need to know about DBS fees, candidate splits, and digital identity.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingClarifications.map((item, idx) => (
              <ScrollReveal key={idx} delay={0.08 * (idx + 1)}>
                <div className="bg-white p-6 rounded-xl border border-navy-200 space-y-2 h-full shadow-xs">
                  <h3 className="text-base font-semibold text-navy-900">{item.q}</h3>
                  <p className="text-xs text-gray-700 leading-relaxed font-normal">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
