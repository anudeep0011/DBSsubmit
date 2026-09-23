'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log privately to console for monitoring without exposing raw stack to user
    console.error('Application runtime error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-navy-800 bg-linear-to-b from-navy-800 via-navy-700 to-navy-600 px-4 sm:px-6 lg:px-8 py-20 text-white">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Warning Icon Badge */}
        <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center text-orange-400 mx-auto shadow-inner">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Status text */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-medium">
            Temporary Service Interruption
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Something didn&apos;t load as expected
          </h1>
          <p className="text-navy-100 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            This could be a temporary connection hiccup or a service refresh. Your application data and credentials remain secure.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
          >
            ↻ Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent hover:bg-white/5 text-navy-200 hover:text-white font-medium text-sm transition-all"
          >
            Contact Support
          </Link>
        </div>

        {/* Reference & Help Box */}
        <div className="pt-8 border-t border-white/10 text-xs text-navy-200 space-y-2">
          <p>
            If this issue persists, our client support team is available during normal business hours ({SITE.hours}).
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-white font-medium pt-1">
            <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="hover:text-orange-300 underline underline-offset-4">
              Tel: {SITE.phone}
            </a>
            <span className="text-white/30">•</span>
            <a href={`mailto:${SITE.email}`} className="hover:text-orange-300 underline underline-offset-4">
              Email: {SITE.email}
            </a>
          </div>
          {error?.digest && (
            <p className="text-[11px] text-white/40 pt-2 font-mono">
              Incident reference: {error.digest}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
