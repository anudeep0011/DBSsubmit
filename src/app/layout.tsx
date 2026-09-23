import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { NetworkStatus } from '@/components/NetworkStatus';
import { SITE } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dbs-express.co.uk';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#27276E',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DBS-Express | Official Criminal Record Check Services UK',
    template: '%s | DBS-Express',
  },
  description:
    'Official UK criminal record check services. Fast, compliant Basic, Standard, and Enhanced DBS checks for employers and individuals with accredited fast-track processing.',
  keywords: [
    'DBS check',
    'Basic DBS check',
    'Standard DBS check',
    'Enhanced DBS check',
    'criminal record check UK',
    'employer background screening',
    'individual DBS application',
    'fast track DBS check',
    'eBulk DBS processing',
    'Talaty Group Ltd',
  ],
  authors: [{ name: SITE.legalName, url: siteUrl }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DBS-Express | Official Criminal Record Check Services UK',
    description:
      'Fast and compliant criminal record screening. Official Basic, Standard, and Enhanced DBS checks with accredited UK processing.',
    url: siteUrl,
    siteName: 'DBS-Express',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DBS-Express | Official Criminal Record Check Services UK',
    description:
      'Fast and compliant criminal record screening for employers and individuals.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Search Engines
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DBS-Express',
    legalName: SITE.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo1.jpeg`,
    description:
      'Accredited UK criminal record check provider offering Basic, Standard, and Enhanced DBS checks for employers and individuals.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressRegion: 'Greater London',
      streetAddress: SITE.address,
    },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.twitter,
      SITE.social.facebook,
    ],
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DBS-Express',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/faq?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-bg-base text-navy-900 antialiased overflow-x-hidden w-full">
        <Header />
        <main className="grow w-full">{children}</main>
        <Footer />
        <CookieConsent />
        <NetworkStatus />
      </body>
    </html>
  );
}
