import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dbssubmit.co.uk';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/team', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
