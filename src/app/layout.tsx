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
  themeColor: '#27276E',
};

export const metadata: Metadata = {
  title: 'DBS-Express | Official Criminal Record Check Services',
  description:
    'Fast and compliant criminal record processing. Official Basic, Standard, and Enhanced DBS checks with accredited UK processing.',
  openGraph: {
    title: 'DBS-Express | Official Criminal Record Check Services',
    description:
      'Compliant criminal record checks for employers and individuals.',
    url: 'https://dbs-express.co.uk',
    siteName: 'DBS-Express',
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
      <body className="flex flex-col min-h-screen font-sans bg-bg-base text-navy-900 antialiased overflow-x-hidden w-full">
        <Header />
        <main className="grow w-full">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
