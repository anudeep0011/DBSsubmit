import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PricingPreview } from '@/components/home/PricingPreview';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UCHECK_APPLY_URL } from '@/lib/constants';

export const metadata = {
  title: 'DBS Check Pricing & Volume Discounts | DBSsubmit',
  description: 'Transparent rate matrix for Basic, Standard, and Enhanced DBS checks. Volume tiers for employer organisations.',
};

export default function PricingPage() {
  const tiers = [
    {
      name: 'Pay-As-You-Go',
      range: '1 – 19 checks / year',
      highlight: 'Standard Rate',
      features: ['No minimum annual commitment', 'Full uCheck portal access', 'Standard email & phone support'],
      popular: false,
      btnText: 'Get Started →',
      btnVariant: 'navy-outline' as const,
    },
    {
      name: 'Growth Tier',
      range: '20 – 99 checks / year',
      highlight: 'Reduced Admin Fee',
      features: ['Volume pricing discount per check', 'Dedicated account manager', 'Priority portal processing'],
      popular: true,
      btnText: 'Register Organisation →',
      btnVariant: 'orange' as const,
    },
    {
      name: 'Enterprise Tier',
      range: '100+ checks / year',
      highlight: 'Custom Rates',
      features: ['Maximum volume discount scale', 'API & ATS system integrations', 'Custom invoicing & credit terms'],
      popular: false,
      btnText: 'Contact Sales Team →',
      btnVariant: 'navy' as const,
    },
  ];

  const pricingClarifications = [
    {
      q: 'What is included in the check fee?',
      a: 'The fee covers government disclosure charges, portal processing, digital ID verification, and certificate dispatch.',
    },
    {
      q: 'How are volume discounts calculated?',
      a: 'Discounts apply to the administration fee per check based on your total annual submission volume on uCheck.',
    },
    {
      q: 'What payment methods are supported?',
      a: 'Pay-as-you-go orders accept major debit and credit cards. Enterprise accounts can request monthly invoicing terms.',
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
                DBS check pricing
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
                Government DBS fees plus uCheck administration charges. Volume discounts apply for organisations submitting 20+ checks per year.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* 2. Pricing Matrix Component */}
      <PricingPreview />

      {/* 3. Annual Volume Tiers */}
      <SectionWrapper bg="white">
        <div className="space-y-12">
          <div className="space-y-3 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                Annual volume tiers
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-gray-700 font-normal">
                Organisations submitting 20+ checks per year qualify for reduced administration fees.
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
                      <span className="text-xs font-medium text-white bg-orange-400 px-3 py-1 rounded-full inline-block">
                        Popular for SMEs
                      </span>
                    )}
                    <div>
                      <h3 className="text-2xl font-semibold text-navy-900">{tier.name}</h3>
                      <span className="text-xs text-navy-600 block mt-1 font-normal">{tier.range}</span>
                    </div>

                    <div className="text-3xl font-semibold text-navy-900 tracking-tight">{tier.highlight}</div>

                    <ul className="space-y-3 text-sm font-normal text-gray-700 pt-2 border-t border-navy-200">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-[10px] font-medium shrink-0">✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      href={tier.btnText.includes('Sales') ? '/contact' : UCHECK_APPLY_URL}
                      external={!tier.btnText.includes('Sales')}
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

      {/* 4. Short FAQ Clarification Block */}
      <SectionWrapper bg="navy-50">
        <div className="space-y-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-navy-900">
              Pricing details &amp; terms
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingClarifications.map((item, idx) => (
              <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
                <div className="bg-white p-6 rounded-xl border border-navy-200 space-y-2 h-full">
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
