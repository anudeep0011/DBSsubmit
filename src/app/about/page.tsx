import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PartnershipShapesIcon } from '@/components/ui/Illustrations';

export const metadata = {
  title: 'About Us | DBSsubmit',
  description: 'DBSsubmit is operated by Talaty Group Ltd, providing streamlined access to uCheck background screening services.',
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Data processed directly by uCheck',
      description: 'Your sensitive applicant details, identity documents, and criminal history records are entered directly into uCheck’s certified infrastructure. DBSsubmit does not store or process candidate disclosure data.',
    },
    {
      title: 'Published rates with no hidden fees',
      description: 'We believe background checking costs should be predictable. All government check fees and administration charges are stated upfront with zero setup fees or surprise contracts.',
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
                About DBSsubmit
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
                DBSsubmit is a trading name of Talaty Group Ltd, established to give employers and individuals a faster, simpler route to official DBS criminal record checks.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* 2. Company Story & Partnership */}
      <SectionWrapper bg="navy-50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-6">
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                  Why DBSsubmit exists
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-gray-700 leading-relaxed font-normal">
                  In 2024, Talaty Group Ltd set out to eliminate the administrative delays and confusion that often surround criminal record checking in England and Wales. Many smaller organisations and individuals struggled to understand eligibility requirements or navigate complex paper-based forms.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="text-lg text-gray-700 leading-relaxed font-normal">
                  By building a clear front-end application portal connected directly to uCheck — one of the UK’s leading accredited umbrella bodies — DBSsubmit combines intuitive user guidance with government-approved database processing.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <ScrollReveal delay={0.3}>
                <PartnershipShapesIcon className="w-32 h-32 sm:w-40 sm:h-40" />
              </ScrollReveal>
            </div>
          </div>

          {/* 4. Principles (2-Item List, Not 3-Card Grid) */}
          <div className="pt-8 border-t border-navy-200 space-y-8">
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-semibold text-navy-900 tracking-tight">Our operational commitments</h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((p, idx) => (
                <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
                  <div className="bg-white p-8 rounded-2xl border border-navy-200 space-y-3 shadow-sm h-full">
                    <h4 className="text-xl font-semibold text-navy-900 tracking-tight">{p.title}</h4>
                    <p className="text-base text-gray-700 leading-relaxed font-normal">{p.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Statement Section (Single Navy Background) */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <ScrollReveal delay={0.1}>
            <p className="text-xs font-medium text-orange-400">Our mission</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <blockquote className="text-2xl sm:text-3xl font-semibold tracking-tight leading-relaxed text-white">
              &ldquo;To provide a transparent, hassle-free gateway for UK background screening — pairing modern digital access with uCheck&rsquo;s certified security standards.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <SectionWrapper bg="white">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
              Questions about DBSsubmit or our uCheck partnership?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Our support team is available Monday through Friday to assist with check eligibility or organizational registration queries.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="orange" size="lg">
                Contact compliance team →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
