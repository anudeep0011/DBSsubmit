'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, UCHECK_LOGIN_URL, UCHECK_APPLY_URL } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MobileNav } from '@/components/layout/MobileNav';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 border-b border-navy-800 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <span className="text-2xl font-semibold tracking-tight text-white group-hover:text-orange-300 transition-colors">
                DBS<span className="text-orange-400">submit</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-orange-400 border-b-2 border-orange-400 pb-0.5'
                        : 'text-navy-200 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action / Login Cluster */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href={UCHECK_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-navy-200 hover:text-white transition-colors"
              >
                Login
              </a>
              <Button href={UCHECK_APPLY_URL} external variant="orange" size="sm">
                Get a DBS Check
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="relative z-10 p-3 rounded-lg text-navy-100 hover:bg-navy-800 focus:outline-none active:bg-navy-700"
                aria-label="Open navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - outside header so z-index layers correctly */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};
