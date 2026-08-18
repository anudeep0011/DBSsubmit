'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export const LatestBlogSection: React.FC = () => {
  const samplePosts = [
    {
      slug: 'understanding-dbs-check-levels-2026',
      title: 'Understanding DBS check levels: Basic vs Standard vs Enhanced',
      excerpt: 'Which DBS check level does your role or employee require? Key legal guidelines and eligibility rules.',
      date: '10 Aug 2026',
      category: 'Guide',
    },
    {
      slug: 'how-fast-are-dbs-checks-processed',
      title: 'How fast are DBS checks processed?',
      excerpt: 'Current government turnaround benchmarks and operational steps to prevent application delays.',
      date: '5 Aug 2026',
      category: 'Compliance',
    },
    {
      slug: 'gdpr-and-criminal-record-checks',
      title: 'Data protection compliance when storing certificate information',
      excerpt: 'Important statutory retention rules every employer must follow regarding candidate certificate records.',
      date: '28 Jul 2026',
      category: 'Legal',
    },
  ];

  return (
    <SectionWrapper bg="navy-50" id="latest-blog">
      <div className="space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <ScrollReveal delay={0.1}>
              <Badge variant="navy">Resources &amp; guidance</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900">
                Regulatory guidance
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <Button href="/resources" variant="navy" size="md">
              Explore all articles →
            </Button>
          </ScrollReveal>
        </div>

        {/* Staggered Horizontal List Layout */}
        <div className="space-y-6">
          {samplePosts.map((post, idx) => (
            <ScrollReveal key={post.slug} delay={0.15 * (idx + 1)}>
              <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-navy-200 hover:border-orange-400 transition-colors shadow-sm">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-4 text-xs text-navy-600 font-medium">
                    <span className="text-navy-900 bg-orange-50 px-2.5 py-1 rounded border border-orange-200 font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-navy-900 hover:text-orange-400 transition-colors leading-snug">
                    <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">{post.excerpt}</p>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/resources/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 hover:text-orange-500 bg-navy-50 px-4 py-3 rounded-xl border border-navy-200 hover:bg-orange-50 transition-colors"
                  >
                    Read article →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
