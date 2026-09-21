import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { CheckLevelSelector } from '@/components/employers/CheckLevelSelector';
import { PortalWorkflowShowcase } from '@/components/employers/PortalWorkflowShowcase';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { REGISTER_URL } from '@/lib/constants';
import { ShieldTieredIcon } from '@/components/ui/Illustrations';

export const metadata = {
  title: 'DBS Checks for Employers | DBS-Express',
  description: 'Workforce background screening portal for organisations. Basic, Standard, and Enhanced DBS checks, Free Right-to-Work verification, Digital ID, and automated referencing.',
};

export default function EmployersPage() {
  const additionalEmployerFeatures = [
    {
      title: 'Free Right to Work Checks',
      description: 'Fully compliant UK Home Office Right to Work checks provided at zero extra cost alongside candidate DBS applications.',
    },
    {
      title: 'Automated Reference Checks (£2.95)',
      description: 'Hands-off referee management. Candidate inputs referee contacts, and the system sends custom forms with automated chase reminders.',
    },
    {
      title: 'Digital ID Verification (£6.50)',
      description: 'No physical passport or utility bill handling. Candidates scan biometric chips from smartphones in under 3 minutes.',
    },
    {
      title: 'Flexible Payment Splitting',
      description: 'Configure whether your organisation pays 100%, splits costs (e.g. 50/50), or has the candidate pay the check fee upon registration.',
    },
    {
      title: 'Role-Based Team Access',
      description: 'Assign Company Admins and departmental Evidence Checkers across multiple company branches with audit logs.',
    },
    {
      title: 'One-Click Excel Reports',
      description: 'Export real-time compliance matrices, candidate progress trackers, and completed certificate references directly to Excel.',
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
                  Workforce DBS screening &amp; onboarding
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
                  Order and track candidate checks from an all-in-one employer portal. Combine Basic, Standard, and Enhanced DBS with free Right to Work verification, biometric Digital ID, and automated referee tracking.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button href={REGISTER_URL} external variant="orange" size="md">
                    Open Employer Account →
                  </Button>
                  <Button href="/pricing" variant="navy-outline" size="md">
                    View Volume Rates
                  </Button>
                </div>
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

      {/* 2. Interactive Portal Workflow Showcase */}
      <SectionWrapper bg="navy-50" id="portal-workflow">
        <div className="space-y-12 max-w-7xl mx-auto">
          <div className="space-y-4 max-w-3xl">
            <ScrollReveal delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-900 leading-tight">
                How candidate checks work on our platform
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Take a look at the actual 4-step workflow inside our accredited portal. From user creation to automated referee reminders and government submission.
              </p>
            </ScrollReveal>
          </div>

          <PortalWorkflowShowcase />
        </div>
      </SectionWrapper>

      {/* 3. Check Level Selector */}
      <SectionWrapper bg="white">
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

      {/* 4. Complete Portal Suite Cards */}
      <SectionWrapper bg="navy-50">
        <div className="space-y-12 max-w-7xl mx-auto">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
                Beyond DBS: Complete workforce compliance
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-base text-gray-700 font-normal">
                Every tool your HR and recruitment team needs to onboard candidates rapidly and lawfully.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalEmployerFeatures.map((feat, idx) => (
              <ScrollReveal key={idx} delay={0.08 * (idx + 1)}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-navy-200 shadow-xs hover:shadow-md transition-all space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-navy-900">{feat.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">{feat.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Single Compact CTA */}
      <SectionWrapper bg="white" className="border-t border-navy-100">
        <ScrollReveal delay={0.1}>
          <div className="text-center space-y-6 max-w-3xl mx-auto py-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Set up your <span className="text-orange-500">employer account</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-normal">
              Create your organization profile in under 5 minutes with zero setup fees. Start issuing candidate checks immediately with volume discount rates.
            </p>

            <div className="pt-2">
              <Button href={REGISTER_URL} external variant="orange" size="lg">
                Set up employer portal →
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
