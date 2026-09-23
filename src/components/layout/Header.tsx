'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, LOGIN_URL, REGISTER_URL } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MobileNav } from '@/components/layout/MobileNav';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-600 border-b border-navy-700 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" aria-label="DBS-Express Home" className="flex items-center group">
              <Image
                src="/images/logo2.jpeg"
                alt="DBS-Express"
                width={160}
                height={40}
                className="h-10 w-auto object-contain rounded-md group-hover:opacity-90 transition-opacity"
                priority
              />
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
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-navy-200 hover:text-white transition-colors"
              >
                Login
              </a>
              <Button href={REGISTER_URL} external variant="orange" size="sm">
                Register
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="relative z-10 p-3 rounded-lg text-white hover:bg-navy-700 focus:outline-none active:bg-navy-800"
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
