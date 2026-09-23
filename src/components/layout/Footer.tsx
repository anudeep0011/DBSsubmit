import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, LOGIN_URL } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-navy-900 pt-16 pb-12 border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Brand & Overview Strip */}
        <div className="pb-10 mb-10 border-b border-navy-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <Link href="/" aria-label="DBS-Express Home" className="inline-flex items-center">
              <Image
                src="/images/logo1.jpeg"
                alt="DBS-Express"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Official criminal record check services. Fast, compliant Basic, Standard, and Enhanced DBS checks for employers and individuals.
            </p>
          </div>
          <div className="text-xs text-navy-700 bg-navy-50 px-4 py-2.5 rounded-md border border-navy-200 shrink-0 font-medium">
            Trading under {SITE.legalName} · Registered in England &amp; Wales
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Services */}
          <div>
            <h4 className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="/pricing" className="hover:text-navy-900 hover:underline transition-colors">
                  Basic DBS check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-navy-900 hover:underline transition-colors">
                  Standard DBS check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-navy-900 hover:underline transition-colors">
                  Enhanced DBS check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-navy-900 hover:underline transition-colors">
                  Rate matrix &amp; pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="/employers" className="hover:text-navy-900 hover:underline transition-colors">
                  Employers &amp; HR teams
                </Link>
              </li>
              <li>
                <Link href="/individuals" className="hover:text-navy-900 hover:underline transition-colors">
                  Individual applicants
                </Link>
              </li>
              <li>
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors font-medium text-orange-500"
                >
                  Portal login →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="/resources" className="hover:text-navy-900 hover:underline transition-colors">
                  Blog &amp; guidance
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-navy-900 hover:underline transition-colors">
                  Knowledge base &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-navy-900 hover:underline transition-colors">
                  System status
                </Link>
              </li>
              <li>
                <Link href="/offline" className="hover:text-navy-900 hover:underline transition-colors">
                  Offline &amp; connectivity help
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-navy-900 hover:underline transition-colors">
                  About DBS-Express
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-navy-900 hover:underline transition-colors">
                  Contact support
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-navy-900 hover:underline transition-colors">
                  Meet the team
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
              Legal &amp; compliance
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <Link href="/policies" className="hover:text-navy-900 hover:underline transition-colors">
                  Company policies
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-navy-900 hover:underline transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-navy-900 hover:underline transition-colors">
                  Terms &amp; conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-navy-900 hover:underline transition-colors">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Badges Row */}
        <div className="border-t border-navy-100 py-6 flex flex-wrap items-center gap-3 text-xs text-navy-800">
          <span className="bg-navy-50 border border-navy-200 rounded-md px-3 py-1 font-medium">
            ICO data registered
          </span>
          <span className="bg-navy-50 border border-navy-200 rounded-md px-3 py-1 font-medium">
            DBS umbrella body
          </span>
          <span className="bg-navy-50 border border-navy-200 rounded-md px-3 py-1 font-medium">
            Accredited DBS processing
          </span>
        </div>

        {/* Contact Info Row */}
        <div className="border-t border-navy-100 py-4 flex flex-wrap items-center gap-6 text-xs text-gray-600">
          <span className="font-medium text-navy-900">Tel: {SITE.phone}</span>
          <span className="font-medium text-navy-900">Email: {SITE.email}</span>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-navy-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-navy-700 font-medium">DBS-Express · Official screening portal</p>
        </div>
      </div>
    </footer>
  );
};
