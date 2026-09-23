import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dbs-express.co.uk';
  const now = new Date().toISOString();

  const pages: Array<{
    url: string;
    priority: number;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  }> = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/pricing', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/employers', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/individuals', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/resources', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/faq', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/team', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/policies', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/privacy-policy', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/terms', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/maintenance', priority: 0.4, changeFrequency: 'monthly' },
    { url: '/offline', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
