import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DocumentCheckIcon } from '@/components/ui/Illustrations';
import Link from 'next/link';

export const metadata = {
  title: 'DBS Resources & Blog | DBSsubmit',
  description: 'Articles, compliance guides, and regulatory news on DBS checks.',
};

export default function ResourcesPage() {
  const posts = [
    {
      slug: 'understanding-dbs-check-levels-2026',
      title: 'Understanding DBS Check Levels: Basic vs Standard vs Enhanced',
      excerpt: 'Which DBS check does your role or employee require? Learn the key differences and legal guidelines for 2026.',
      date: 'August 10, 2026',
      category: 'Guides',
      readTime: '4 min read',
    },
    {
      slug: 'how-fast-are-dbs-checks-processed',
      title: 'How Fast Are DBS Checks Processed?',
      excerpt: 'Discover current government processing times and tips for avoiding delays with your DBS application.',
      date: 'August 05, 2026',
      category: 'Compliance',
      readTime: '5 min read',
    },
    {
      slug: 'gdpr-and-criminal-record-checks',
      title: 'Data Protection Compliance when Storing Candidate Record Checks',
      excerpt: 'Important legal rules every employer must follow when managing DBS certificate information.',
      date: 'July 28, 2026',
      category: 'Legal',
      readTime: '6 min read',
    },
    {
      slug: 'dbs-update-service-explained',
      title: 'DBS Update Service: How It Works & Benefits for Employers',
      excerpt: 'Learn how registering certificates on the DBS Update Service saves time and money on annual checks.',
      date: 'July 15, 2026',
      category: 'Guides',
      readTime: '4 min read',
    },
  ];

  return (
    <>
      {/* 1. Compact White Header */}
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900 leading-[1.1]">
                  Resources &amp; guides
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
                  Articles, compliance advice, and regulatory guidance on DBS criminal record checks in England and Wales.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <ScrollReveal delay={0.25}>
                <DocumentCheckIcon className="w-28 h-28 sm:w-32 sm:h-32" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Editorial Grid */}
      <SectionWrapper bg="navy-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <ScrollReveal key={post.slug} delay={0.1 * (idx + 1)}>
              <div className="bg-white rounded-2xl p-8 flex flex-col justify-between h-full border border-navy-200 space-y-6 hover:border-orange-400 transition-colors shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-navy-600 font-medium">
                    <Badge variant="orange">{post.category}</Badge>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-navy-900 hover:text-orange-400 transition-colors leading-snug">
                    <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">{post.excerpt}</p>
                </div>
                <div className="pt-4 border-t border-navy-200 flex items-center justify-between text-xs text-navy-600 font-medium">
                  <span>{post.date}</span>
                  <Link href={`/resources/${post.slug}`} className="text-orange-400 font-medium hover:underline">
                    Read article →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
