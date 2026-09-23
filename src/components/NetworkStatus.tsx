'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const NetworkStatus: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    // Initial check
    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
    }

    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    if (typeof window !== 'undefined') {
      if (navigator.onLine) {
        setIsOffline(false);
        setShowReconnected(true);
        setTimeout(() => setShowReconnected(false), 3000);
      } else {
        // Trigger a tiny fetch test to verify connectivity
        fetch('/favicon.ico', { method: 'HEAD', cache: 'no-store' })
          .then(() => {
            setIsOffline(false);
            setShowReconnected(true);
            setTimeout(() => setShowReconnected(false), 3000);
          })
          .catch(() => {
            setIsOffline(true);
          });
      }
    }
  };

  if (!isOffline && !showReconnected) {
    return null;
  }

  return (
    <aside
      aria-label="Network connectivity status"
      className="fixed bottom-4 right-4 z-50 max-w-md w-[calc(100%-2rem)] sm:w-auto shadow-2xl transition-all duration-300"
    >
      {isOffline ? (
        <div className="bg-navy-900 text-white border-2 border-orange-500 rounded-xl p-4 shadow-xl flex items-start gap-3 backdrop-blur-md">
          <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mt-0.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 4.243a5 5 0 01-1.414-3.536m0 0a5 5 0 011.414-3.536m0 0L3 3m5.657 5.657a9 9 0 000 12.728"
              />
            </svg>
          </div>
          <div className="space-y-1 text-sm grow">
            <p className="font-semibold text-white flex items-center gap-2">
              <span>Connection Lost</span>
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            </p>
            <p className="text-navy-100 text-xs leading-relaxed">
              You appear to be offline. Form progress may not sync until reconnected.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handleRetry}
                className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs font-medium cursor-pointer transition-colors"
              >
                Retry
              </button>
              <Link
                href="/offline"
                className="text-xs text-orange-300 hover:text-white underline underline-offset-2"
              >
                Troubleshooting tips →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-navy-900 text-white border border-emerald-500/60 rounded-xl p-3.5 shadow-xl flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xs sm:text-sm font-medium text-emerald-300">
            Internet connection restored. You are back online.
          </p>
        </div>
      )}
    </aside>
  );
};
