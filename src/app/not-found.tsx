import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: '404 - Page Not Found | DBS-Express',
  description: 'The requested page could not be found on DBS-Express.',
};

export default function NotFound() {
  const helpfulLinks = [
    { title: 'Employers & HR Teams', href: '/employers', desc: 'Manage organization DBS checks' },
    { title: 'Individual Applicants', href: '/individuals', desc: 'Direct applicant criminal checks' },
    { title: 'Pricing & Rate Matrix', href: '/pricing', desc: 'Basic, Standard & Enhanced fees' },
    { title: 'Help & FAQ', href: '/faq', desc: 'Answers to common questions' },
    { title: 'Company Policies', href: '/policies', desc: 'Data protection & compliance policies' },
    { title: 'Contact Support', href: '/contact', desc: 'Speak with our UK support team' },
  ];

  return (
    <div className="min-h-[85vh] bg-navy-800 bg-linear-to-b from-navy-800 via-navy-700 to-navy-600 text-white px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Error 404 • Page Not Found
        </div>

        {/* Big visual number & heading */}
        <div className="space-y-3">
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tight text-white/90 drop-shadow-sm select-none">
            4<span className="text-orange-400">0</span>4
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
            We couldn&apos;t find that page
          </h2>
          <p className="text-navy-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            ← Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Contact Helpdesk
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-10 border-t border-white/10 text-left">
          <p className="text-xs uppercase tracking-wider text-orange-300/90 font-semibold mb-4 text-center sm:text-left">
            Or try one of these destinations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-400/40 transition-all group block"
              >
                <div className="font-semibold text-sm text-white group-hover:text-orange-300 transition-colors flex items-center justify-between">
                  <span>{link.title}</span>
                  <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
                <div className="text-xs text-navy-200 mt-1">
                  {link.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Direct contact helper */}
        <div className="pt-6 text-xs text-navy-200 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span>Need direct assistance?</span>
          <a
            href={`tel:${SITE.phone.replace(/\s+/g, '')}`}
            className="text-white hover:text-orange-300 font-medium underline underline-offset-4"
          >
            Call {SITE.phone}
          </a>
          <span className="text-white/30">•</span>
          <a
            href={`mailto:${SITE.email}`}
            className="text-white hover:text-orange-300 font-medium underline underline-offset-4"
          >
            {SITE.email}
          </a>
        </div>

      </div>
    </div>
  );
}
