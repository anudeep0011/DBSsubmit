import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'Meet the Team | DBSsubmit',
  description: 'The team behind DBSsubmit and Talaty Group Ltd.',
};

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Advisory Team',
      role: 'DBS & Compliance Specialists',
      bio: 'Advising organisations on safer recruitment policies and DBS check eligibility criteria.',
    },
    {
      name: 'Operations Team',
      role: 'Customer Success & Support',
      bio: 'Handling employer onboarding, applicant queries, and turnaround time escalations.',
    },
    {
      name: 'Technology Team',
      role: 'Integration & Platform',
      bio: 'Maintaining robust data protection standards and reliable platform connectivity with uCheck processing systems.',
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
                Our team
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
                The Talaty Group team behind DBSsubmit&apos;s day-to-day operations and employer support.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* 2. Team Cards Grid */}
      <SectionWrapper bg="navy-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={idx} delay={0.15 * (idx + 1)}>
              <div className="bg-white border border-navy-200 rounded-2xl p-8 text-center space-y-4 shadow-sm hover:border-navy-300 transition-all">
                <div className="w-16 h-16 bg-orange-50 border border-orange-200 rounded-full flex items-center justify-center text-navy-900 mx-auto">
                  <svg className="w-8 h-8 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-navy-900">{member.name}</h2>
                <p className="text-xs text-orange-400 font-medium">{member.role}</p>
                <p className="text-base text-gray-700 leading-relaxed font-normal">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
