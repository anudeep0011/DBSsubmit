import React from 'react';
import Link from 'next/link';
import { SITE, UCHECK_LOGIN_URL } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-b from-navy-800 to-navy-900 text-navy-100 pt-16 pb-12 border-t border-navy-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Brand & Overview Strip */}
        <div className="pb-10 mb-10 border-b border-navy-700/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <Link href="/" className="inline-block text-2xl font-semibold text-white">
              DBS<span className="text-orange-400">submit</span>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed">
              Official criminal record check services. Direct partner hand-off to uCheck’s accredited database platform.
            </p>
          </div>
          <div className="text-xs text-navy-200 bg-navy-800/80 px-4 py-2.5 rounded-md border border-navy-700/80 shrink-0 font-medium">
            Trading under {SITE.legalName} · Registered in England &amp; Wales
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Services */}
          <div>
            <h4 className="text-xs font-medium text-orange-100 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li>
                <Link href="/pricing" className="hover:text-orange-300 transition-colors">
                  Basic DBS check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-orange-300 transition-colors">
                  Standard DBS check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-orange-300 transition-colors">
                  Enhanced DBS check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-orange-300 transition-colors">
                  Rate matrix &amp; pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-xs font-medium text-orange-100 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li>
                <Link href="/employers" className="hover:text-orange-300 transition-colors">
                  Employers &amp; HR teams
                </Link>
              </li>
              <li>
                <Link href="/individuals" className="hover:text-orange-300 transition-colors">
                  Individual applicants
                </Link>
              </li>
              <li>
                <a
                  href={UCHECK_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 transition-colors font-medium text-orange-400"
                >
                  Portal login →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-medium text-orange-100 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li>
                <Link href="/resources" className="hover:text-orange-300 transition-colors">
                  Blog &amp; guidance
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-300 transition-colors">
                  Knowledge base &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-300 transition-colors">
                  ROA 1974 eligibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="text-xs font-medium text-orange-100 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li>
                <Link href="/about" className="hover:text-orange-300 transition-colors">
                  About DBSsubmit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-300 transition-colors">
                  Contact support
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-orange-300 transition-colors">
                  Meet the team
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-medium text-orange-100 mb-4">
              Legal &amp; compliance
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-200">
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-300 transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-300 transition-colors">
                  Terms &amp; conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-300 transition-colors">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Badges Row */}
        <div className="border-t border-navy-700/50 py-6 flex flex-wrap items-center gap-3 text-xs text-navy-200">
          <span className="bg-navy-800 border border-navy-700/80 rounded-md px-3 py-1 font-medium">
            ICO data registered
          </span>
          <span className="bg-navy-800 border border-navy-700/80 rounded-md px-3 py-1 font-medium">
            DBS umbrella body
          </span>
          <span className="bg-navy-800 border border-navy-700/80 rounded-md px-3 py-1 font-medium">
            Processed via uCheck
          </span>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-navy-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-navy-300">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-navy-200 font-medium">DBSsubmit · Official screening hand-off portal</p>
        </div>
      </div>
    </footer>
  );
};
