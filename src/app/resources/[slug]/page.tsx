import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const titleFormatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${titleFormatted} | DBSsubmit Resources`,
    description: `Read our comprehensive guide on ${titleFormatted}.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const titleFormatted = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      {/* 1. Compact Editorial Header (No Hero Band) */}
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 text-xs text-navy-600 font-medium">
              <Link href="/resources" className="hover:text-orange-400 transition-colors">← Resources</Link>
              <span>/</span>
              <Badge variant="peach">Compliance guide</Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-900 leading-tight">
              {titleFormatted}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex items-center gap-4 text-xs text-navy-600 font-medium">
              <span>Published August 2026</span>
              <span>·</span>
              <span>DBSsubmit compliance team</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* 2. Article Body */}
      <SectionWrapper bg="white">
        <article className="max-w-3xl mx-auto space-y-8 text-navy-900 text-lg leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p className="text-xl sm:text-2xl text-navy-900 font-normal leading-relaxed">
              Navigating Disclosure and Barring Service (DBS) requirements can feel complex. This guide breaks down essential rules for employers and applicants in England and Wales.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 tracking-tight pt-4">Key regulatory guidelines</h2>
              <p className="text-gray-700 font-normal">
                When conducting criminal record checks in England and Wales, organisations must ensure they hold a lawful basis for requesting information. Requesting an Enhanced check for an ineligible role is an offence under the Rehabilitation of Offenders Act 1974.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 tracking-tight pt-4">Best practices for onboarding</h2>
              <ul className="space-y-3 text-base text-gray-700 font-normal">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                  Verify original ID documents in person or via approved digital identity service providers (IDSPs).
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                  Maintain clear written policies on the recruitment of ex-offenders.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 border border-orange-300 flex items-center justify-center text-xs font-medium shrink-0">✓</span>
                  Ensure DBS certificate data is stored securely and destroyed in line with your retention schedule.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-orange-50 p-8 sm:p-10 rounded-2xl border border-orange-200 space-y-4 my-10 shadow-sm">
              <h3 className="font-semibold text-navy-900 text-2xl tracking-tight">Need advice for your organisation?</h3>
              <p className="text-base text-gray-700 font-normal">
                Our team can help verify which check level your employees legally require under statutory legislation.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="orange" size="md">
                  Contact compliance advisors →
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </article>
      </SectionWrapper>
    </>
  );
}
