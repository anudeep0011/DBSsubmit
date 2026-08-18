import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#101029',
};

export const metadata: Metadata = {
  title: 'DBSsubmit | Official Criminal Record Check Services & Portal Hand-off',
  description:
    'Fast and compliant criminal record processing. Official partner hand-off for Basic, Standard, and Enhanced DBS checks.',
  openGraph: {
    title: 'DBSsubmit | Official Criminal Record Check Services',
    description:
      'Compliant criminal record checks for employers and individuals.',
    url: 'https://dbssubmit.co.uk',
    siteName: 'DBSsubmit',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen font-sans bg-white text-navy-900 antialiased overflow-x-hidden w-full">
        <Header />
        <main className="grow w-full">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
