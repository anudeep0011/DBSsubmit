import { HeroSection } from '@/components/home/HeroSection';
import { WhatWeDoSection } from '@/components/home/WhatWeDoSection';
import { SegmentSwitcher } from '@/components/home/SegmentSwitcher';
import { TestimonialQuote } from '@/components/home/TestimonialQuote';
import { StatsSection } from '@/components/home/StatsSection';
import { ImplementationModes } from '@/components/home/ImplementationModes';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { TestimonialWall } from '@/components/home/TestimonialWall';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { UCHECK_APPLY_URL } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Interactive Calculator Demo Panel */}
      <HeroSection />

      {/* 2. Problem & Solution Visual Cards */}
      <WhatWeDoSection />

      {/* 4. 3-Way Segment Switcher (Small & Midsize, Enterprise, Individual) */}
      <SegmentSwitcher />

      {/* 5. Featured Testimonial Pull Quote with Avatar */}
      <TestimonialQuote />

      {/* 6. Numeric Stats Call-outs Band */}
      <StatsSection />

      {/* 7. Implementation Modes */}
      <ImplementationModes />

      {/* 8. Process Steps Workflow */}
      <HowItWorksSection />

      {/* 9. Testimonial Wall Grid */}
      <TestimonialWall />

      {/* 10. Final CTA Band */}
      <SectionWrapper bg="navy">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Ready to run your first DBS check?
            </h2>

            <p className="text-xl text-navy-100 max-w-2xl mx-auto leading-relaxed font-normal">
              Set up in minutes, no long-term contract required. Hand off directly to uCheck’s accredited government portal.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={UCHECK_APPLY_URL} external variant="orange" size="lg">
                Get started today →
              </Button>
              <Button href="/contact" variant="white-outline" size="lg">
                Talk to our support team
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
