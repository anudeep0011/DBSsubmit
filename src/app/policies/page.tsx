import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: 'Policies | DBS-Express',
  description:
    'View all company policies for DBS-Express, including information handling, data protection, privacy, and terms & conditions.',
};

const POLICIES = [
  {
    title: 'Information Handling, Storage and Disposal Policy',
    href: 'https://www.dbs-express.co.uk/app/policies/information-handling-storage-disposal',
    description:
      'How we handle, store, and securely dispose of sensitive information.',
  },
  {
    title: 'Recruitment of Ex-Offender Policy',
    href: 'https://www.dbs-express.co.uk/app/policies/recruitment-of-ex-offender',
    description:
      'Our commitment to fair treatment of ex-offenders in recruitment processes.',
  },
  {
    title: 'Password Policy',
    href: 'https://www.dbs-express.co.uk/app/policies/password-policy',
    description:
      'Standards and requirements for password security across our systems.',
  },
  {
    title: 'DBS Code of Practice',
    href: 'https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/143662/cop.pdf',
    description:
      'The official DBS Code of Practice issued by the UK Government.',
    external: true,
  },
  {
    title: 'Information Handling Policy for Information Provided By DBS',
    href: 'https://www.dbs-express.co.uk/app/policies/information-handling-dbs-provided',
    description:
      'How we manage information received directly from the Disclosure and Barring Service.',
  },
  {
    title: `${SITE.legalName} DBS eBulk Data Retention Policy`,
    href: 'https://www.dbs-express.co.uk/app/policies/ebulk-retention',
    description:
      'Data retention periods and practices for eBulk DBS processing.',
  },
  {
    title: 'Privacy Policy',
    href: 'https://www.dbs-express.co.uk/app/policies/privacy-policy',
    description:
      'How we collect, use, and protect your personal data.',
  },
  {
    title: 'Data Protection',
    href: 'https://www.dbs-express.co.uk/app/policies/protection-policy',
    description:
      'Our data protection obligations and your rights under UK GDPR.',
  },
  {
    title: 'Terms & Conditions',
    href: 'https://www.dbs-express.co.uk/app/policies/terms-and-conditions',
    description:
      'Terms governing the use of DBS-Express services.',
  },
] as const;

export default function PoliciesPage() {
  return (
    <>
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900">
              Policies
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              You can find our company&apos;s policies below. These documents
              outline how {SITE.legalName} (trading as DBS-Express) operates
              responsibly and in compliance with all regulatory requirements.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <ul className="divide-y divide-navy-100">
            {POLICIES.map((policy, index) => (
              <ScrollReveal key={policy.href} delay={0.05 * (index + 1)}>
                <li className="group py-6 first:pt-0 last:pb-0">
                  <a
                    href={policy.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start sm:items-center justify-between gap-4 rounded-lg -mx-4 px-4 py-3 transition-colors hover:bg-navy-50"
                  >
                    <div className="space-y-1 min-w-0">
                      <h2 className="text-lg font-semibold text-navy-900 group-hover:text-orange-600 transition-colors truncate sm:whitespace-normal">
                        {policy.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {policy.description}
                      </p>
                      {'external' in policy && policy.external && (
                        <span className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-navy-600 bg-navy-50 border border-navy-200 rounded-md px-2 py-0.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                          gov.uk
                        </span>
                      )}
                    </div>
                    <span className="shrink-0 text-orange-500 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200 text-sm font-medium">
                      Open →
                    </span>
                  </a>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
