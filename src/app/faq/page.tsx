import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FAQClientContainer } from '@/components/faq/FAQClientContainer';
import { FAQItemData } from '@/components/faq/FAQAccordion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagnifyingSearchIcon } from '@/components/ui/Illustrations';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | DBSsubmit',
  description: 'Search answers about Basic, Standard, and Enhanced DBS checks, turnaround times, and ID verification.',
};

const faqData: FAQItemData[] = [
  {
    id: '1',
    question: 'How long does a Basic DBS check take to process?',
    answer: 'Most Basic DBS checks are processed within 1 to 3 working days when submitted online with valid digital identity verification.',
    category: 'General',
  },
  {
    id: '2',
    question: 'Can an individual request an Enhanced DBS check?',
    answer: 'No. Under statutory regulations, individuals can only request a Basic DBS check for themselves. Standard and Enhanced checks must be requested by an eligible employer or organisation.',
    category: 'Individuals',
  },
  {
    id: '3',
    question: 'What documents do I need to verify my identity?',
    answer: 'Standard identification documents include a valid Passport, Photocard Driving Licence, Birth Certificate, and proof of address (utility bill or bank statement issued in the last 3 months).',
    category: 'Verification',
  },
  {
    id: '4',
    question: 'How do volume pricing discounts work for employers?',
    answer: 'Employers submitting 20+ checks per year qualify for reduced administration fees. Create an account on uCheck to view custom volume discount tiers.',
    category: 'Employers',
  },
  {
    id: '5',
    question: 'Does DBSsubmit store my sensitive applicant data?',
    answer: 'No. DBSsubmit is a reseller and lead-generation portal. All applicant data entry, identity checks, and certificate storage take place securely within uCheck’s certified infrastructure.',
    category: 'Compliance',
  },
  {
    id: '6',
    question: 'What is the DBS Update Service?',
    answer: 'The DBS Update Service allows applicants to keep their certificate up to date online, allowing prospective employers to carry out free, instant status checks.',
    category: 'General',
  },
  {
    id: '7',
    question: 'How long is a DBS certificate valid for?',
    answer: 'A DBS check has no official expiration date. Information is accurate up to the date of issue. Employers typically request checks every 1 to 3 years.',
    category: 'General',
  },
  {
    id: '8',
    question: 'What happens if there is an error on my certificate?',
    answer: 'You can raise a dispute with the Disclosure and Barring Service within 3 months of the certificate issue date.',
    category: 'General',
  },
  {
    id: '9',
    question: 'Are digital ID checks accepted for DBS applications?',
    answer: 'Yes! Approved Digital Identity Service Providers (IDSPs) allow identity verification online without needing to inspect physical documents in person.',
    category: 'Verification',
  },
  {
    id: '10',
    question: 'Can overseas applicants apply for a DBS check?',
    answer: 'A DBS check covers criminal record history recorded nationally. Applicants who have resided here previously can request a Basic check covering that period.',
    category: 'General',
  },
];

export default function FAQPage() {
  return (
    <>
      {/* 1. Compact White Header */}
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900 leading-[1.1]">
                  Frequently asked questions
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
                  Search by keyword or browse by category for answers regarding DBS check levels, processing times, and identity verification.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <ScrollReveal delay={0.25}>
                <MagnifyingSearchIcon className="w-28 h-28 sm:w-32 sm:h-32" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* 2. FAQ Client Search & Accordion Grid */}
      <SectionWrapper bg="navy-50">
        <FAQClientContainer items={faqData} />
      </SectionWrapper>
    </>
  );
}
