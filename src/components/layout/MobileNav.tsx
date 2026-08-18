'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, UCHECK_LOGIN_URL, UCHECK_APPLY_URL, SITE } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-navy-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-navy-800">
        <div>
          <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-6">
            <Link href="/" onClick={onClose} className="text-xl font-semibold text-white">
              DBS<span className="text-orange-400">submit</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-navy-200 hover:text-white rounded-lg"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-400 text-white'
                      : 'text-navy-100 hover:bg-navy-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-navy-800 pt-6 mt-6 space-y-3">
          <div className="text-xs text-navy-100 mb-2">
            <p className="font-medium text-white">{SITE.phone}</p>
            <p className="font-normal text-navy-200">{SITE.hours}</p>
          </div>
          <Button href={UCHECK_LOGIN_URL} external variant="navy-outline" className="w-full">
            Portal login
          </Button>
          <Button href={UCHECK_APPLY_URL} external variant="orange" className="w-full">
            Get a DBS check
          </Button>
        </div>
      </div>
    </div>
  );
};
