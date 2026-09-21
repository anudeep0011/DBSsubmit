import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FAQClientContainer } from '@/components/faq/FAQClientContainer';
import { FAQItemData } from '@/components/faq/FAQAccordion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MagnifyingSearchIcon } from '@/components/ui/Illustrations';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | DBS-Express',
  description: 'Search comprehensive answers about Basic, Standard, and Enhanced DBS checks, turnaround times, costs, employer rules, and ID verification.',
};

const faqData: FAQItemData[] = [
  // General DBS Check Questions
  {
    id: '1',
    question: 'What is a DBS Check?',
    answer: 'A DBS Check is a background check that details all or some of an individual’s criminal history. DBS stands for “Disclosure and Barring Service”, which replaced the Criminal Records Bureau (CRB) in December 2012. A DBS Check, also known as a Disclosure, identifies any convictions, cautions, final warnings, or reprimands relevant to employment. It can also include local police intelligence that may affect an individual’s suitability for certain roles.',
    category: 'General',
  },
  {
    id: '2',
    question: 'What happened to CRB Checks?',
    answer: 'In 2012, the Criminal Records Bureau (CRB) merged with the Independent Safeguarding Authority (ISA) to create the Disclosure and Barring Service (DBS). The DBS now provides all services previously offered by the CRB and ISA, except for the discontinued ISA Registration Scheme.',
    category: 'General',
  },
  {
    id: '3',
    question: 'Who needs a DBS Check?',
    answer: 'Any unsupervised volunteers or employees who, on a frequent and intensive basis, work with or have direct access to children and/or vulnerable adults require a DBS Check. Many other roles in finance, security, and healthcare also require checks as part of statutory or industry compliance.',
    category: 'General',
  },
  {
    id: '4',
    question: 'What are the different types of Criminal Records Checks?',
    answer: 'There are four primary levels of checks: (1) Basic Disclosure Check: Shows unspent convictions and cautions only. (2) Standard DBS Check: Shows spent and unspent convictions, cautions, reprimands, and warnings. (3) Enhanced DBS Check: Includes everything in a Standard Check plus relevant police intelligence. (4) Enhanced DBS Check with Barred List Checks: Includes everything in an Enhanced Check and checks against the DBS Children and/or Adults Barred Lists.',
    category: 'Check Levels',
  },
  {
    id: '5',
    question: 'What is a Basic Disclosure?',
    answer: 'A Basic Disclosure is a background check that shows all unspent convictions and conditional cautions. It can be requested by any individual for themselves or by an employer with the applicant’s consent.',
    category: 'Check Levels',
  },
  {
    id: '6',
    question: 'What is a Standard DBS Check?',
    answer: 'A Standard DBS Check includes details of spent and unspent convictions, cautions, reprimands, and final warnings. These checks are typically required in regulated industries like finance, legal services, or security, where direct contact with vulnerable individuals is not the primary factor.',
    category: 'Check Levels',
  },
  {
    id: '7',
    question: 'What is an Enhanced DBS Check?',
    answer: 'An Enhanced DBS Check includes all information from a Standard Check and may also include relevant local police intelligence. Individuals working or volunteering closely with children or vulnerable adults will typically require an Enhanced DBS Check.',
    category: 'Check Levels',
  },
  {
    id: '8',
    question: 'What are the DBS Barred Lists?',
    answer: 'The DBS maintains lists of individuals who are legally barred from working with children, vulnerable adults, or both. Individuals working in regulated activities with these vulnerable groups must be checked against the relevant barred list before engaging in unsupervised duties.',
    category: 'Check Levels',
  },
  {
    id: '9',
    question: 'What is filtering?',
    answer: 'Filtering is the statutory DBS process that removes certain old or minor convictions and cautions from an individual’s certificate if they meet specific statutory criteria. Employers can only ask about and consider convictions that are not subject to filtering.',
    category: 'General',
  },
  {
    id: '10',
    question: 'How much do DBS Checks cost?',
    answer: 'Our transparent costs for DBS Checks are: Basic Disclosure: £18.00 gov fee + admin fee; Standard DBS Check: £18.00 gov fee + admin fee; Enhanced DBS Check: £38.00 gov fee + admin fee. Volume administration fee discounts apply automatically for organisations submitting 51+ checks per year.',
    category: 'Check Levels',
  },
  {
    id: '11',
    question: 'How long do DBS Checks take?',
    answer: 'Most Basic DBS Checks are completed in under 24 to 48 hours, with same-day processing for submissions completed before 4pm UK time. Standard DBS Checks typically take 1 to 5 working days, and Enhanced DBS Checks take 6 to 13 working days depending on police database checks.',
    category: 'General',
  },
  {
    id: '12',
    question: 'How long do DBS Checks last?',
    answer: 'DBS certificates do not have an official statutory expiry date. Information is accurate up to the date of issue. However, regulatory bodies and best-practice guidelines recommend that employers recheck employees every 1 to 3 years.',
    category: 'General',
  },
  {
    id: '13',
    question: 'Can I track the progress of my DBS Check?',
    answer: 'Yes! You can track the status of your DBS Check online using our secure DBS-Express online platform. Our platform keeps you updated with the application progress at every step.',
    category: 'General',
  },
  {
    id: '14',
    question: 'Can a DBS Check be transferred between employers?',
    answer: 'A DBS Check is not automatically transferrable between different employers. However, the DBS Update Service allows new employers to check if an existing certificate remains valid and up-to-date, reducing the need for multiple checks.',
    category: 'Update Service',
  },
  {
    id: '15',
    question: 'What is the DBS Update Service, and how does it work?',
    answer: 'The DBS Update Service is an online subscription service that allows individuals to keep their DBS certificate permanently up to date. Employers can view a certificate’s status online for free with the applicant’s permission, without requiring a brand-new application.',
    category: 'Update Service',
  },
  {
    id: '16',
    question: 'How do I dispute incorrect information on my DBS Certificate?',
    answer: 'If you believe your DBS Certificate contains incorrect identity details or criminal record information, you must raise a dispute with the Disclosure and Barring Service (DBS) within 3 months of the certificate issue date. A formal investigation process is in place to resolve errors.',
    category: 'General',
  },
  {
    id: '17',
    question: 'Who pays for DBS Checks?',
    answer: 'This depends on the organisation and agreement. In many cases, employers and organisations pay for candidate checks as part of their recruitment process. In other instances, self-employed individuals and independent contractors pay for their own Basic check directly.',
    category: 'General',
  },
  {
    id: '18',
    question: 'How does the DBS-Express application process work?',
    answer: 'The process is 100% digital: (1) Register your account on DBS-Express. (2) Apply online and fill out the quick digital form. (3) Complete digital ID verification using your Passport or Driving Licence. (4) Application is submitted directly to the DBS. (5) Receive your certificate digitally and posted directly to your address.',
    category: 'General',
  },

  // Employer Questions
  {
    id: '19',
    question: 'What industries does DBS-Express support?',
    answer: 'We support organisations and candidates across all UK sectors, including Education (schools, nurseries, tutoring), Healthcare & Social Care (care homes, hospitals, nursing agencies), Construction & Site Security, Financial Services (FCA compliance), Charities & Volunteering, and Hospitality & Leisure.',
    category: 'Employers',
  },
  {
    id: '20',
    question: 'Can employers request DBS Checks?',
    answer: 'Yes, employers can request DBS Checks for eligible applicants and current staff. The level of check (Basic, Standard, or Enhanced) depends on the legal eligibility of the role, and the candidate must give consent.',
    category: 'Employers',
  },
  {
    id: '21',
    question: 'Are DBS Checks a legal requirement?',
    answer: 'For regulated activities, particularly roles involving unsupervised contact with children and vulnerable adults, DBS Checks are a mandatory legal requirement under UK law. Employers are legally responsible for verifying that candidates hold the required check level.',
    category: 'Employers',
  },
  {
    id: '22',
    question: 'Which applicants do we need to check?',
    answer: 'DBS Checks must be conducted on all employees or volunteers who frequently engage in regulated activity with children or vulnerable adults. Certain professions, including healthcare professionals, teachers, lawyers, and security personnel, require background checks by law.',
    category: 'Employers',
  },
  {
    id: '23',
    question: 'Do self-employed individuals need a DBS Check?',
    answer: 'Self-employed individuals cannot apply for Standard or Enhanced DBS Checks directly for themselves because statutory rules require an employer counter-signatory. However, self-employed individuals can apply for a Basic DBS check directly on DBS-Express at any time.',
    category: 'Employers',
  },
  {
    id: '24',
    question: 'Can an individual start work before receiving their DBS certificate?',
    answer: 'For roles involving direct, unsupervised contact with children or vulnerable adults, employers should wait for the full DBS check before the candidate starts work. In adult social care, employers may utilise a DBS Adult First check to allow supervised work while waiting for the full certificate.',
    category: 'Employers',
  },
  {
    id: '25',
    question: 'Can an applicant fail a DBS Check?',
    answer: 'A DBS Check has no pass or fail mark. It provides factual criminal record information, which employers assess for relevance to the job role. The only statutory bar is if an applicant is found on a DBS Barred List for regulated activity with that group.',
    category: 'Employers',
  },
  {
    id: '26',
    question: 'What happens if an employee’s DBS Check reveals a criminal record?',
    answer: 'Employers must assess the relevance of any disclosed convictions fairly. Factors include the nature of the offence, time elapsed, sentence passed, and relevance to the role. Employers cannot automatically reject a candidate unless the offence legally disqualifies them from that role.',
    category: 'Employers',
  },
  {
    id: '27',
    question: 'Does DBS-Express offer other background checks apart from DBS?',
    answer: 'Yes! Our platform supports Right to Work Checks (verifying legal entitlement to work in the UK), Digital Identity Verification (verifying candidate credentials paperlessly), and Adverse Credit Checks for roles in finance and security.',
    category: 'Employers',
  },

  // Additional Contact Information
  {
    id: '28',
    question: 'What is the best way to contact the Disclosure and Barring Service (DBS)?',
    answer: 'You can contact the Disclosure and Barring Service (DBS) directly by email at customerservices@dbs.gov.uk or by phone at 03000 200 190 (Monday to Friday, 8am to 6pm).',
    category: 'Official Contacts',
  },
  {
    id: '29',
    question: 'What is the best way to contact Disclosure Scotland (DS)?',
    answer: 'Disclosure Scotland can be contacted directly by email at info@disclosurescotland.co.uk or by phone at 0300 020 0040 for applications processed under Scottish jurisdiction.',
    category: 'Official Contacts',
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
                  Search by keyword or browse questions regarding DBS check tiers, processing times, costs, employer requirements, and ID verification.
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
