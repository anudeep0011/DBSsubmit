'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

function subscribeOnline(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getOnlineSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true;
}

export default function OfflinePage() {
  const isOnline = useSyncExternalStore(subscribeOnline, getOnlineSnapshot, getServerSnapshot);
  const [manualCheckStatus, setManualCheckStatus] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkConnection = async () => {
    setIsChecking(true);
    if (typeof window !== 'undefined') {
      if (!navigator.onLine) {
        setManualCheckStatus(false);
        setIsChecking(false);
        return;
      }
      try {
        await fetch('/favicon.ico?' + Date.now(), { method: 'HEAD', cache: 'no-store' });
        setManualCheckStatus(true);
      } catch {
        setManualCheckStatus(false);
      } finally {
        setIsChecking(false);
      }
    }
  };

  const effectiveStatus = manualCheckStatus !== null ? manualCheckStatus : isOnline;

  return (
    <>
      <header className="bg-navy-800 bg-linear-to-b from-navy-800 via-navy-700 to-navy-600 text-white pt-32 pb-16 border-b border-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-medium">
            Network &amp; Connectivity Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Connection Status &amp; Offline Help
          </h1>
          <p className="text-navy-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Troubleshoot internet connection issues while browsing or submitting DBS criminal record applications.
          </p>
        </div>
      </header>

      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto space-y-10">
          
          {/* Live Diagnostic Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navy-50 border border-navy-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold text-navy-500 block">
                Live Connectivity Diagnostic
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span
                  className={`w-3.5 h-3.5 rounded-full ${
                    effectiveStatus
                      ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                      : 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                  }`}
                />
                <h2 className="text-xl font-semibold text-navy-900">
                  {effectiveStatus
                    ? 'Connected to the Internet'
                    : 'Offline / No Internet Detected'}
                </h2>
              </div>
              <p className="text-sm text-gray-600">
                {effectiveStatus
                  ? 'Your browser is able to reach DBS-Express services normally.'
                  : 'Your device cannot currently reach our servers or the wider web.'}
              </p>
            </div>

            <button
              type="button"
              onClick={checkConnection}
              disabled={isChecking}
              className="shrink-0 px-5 py-2.5 rounded-md bg-navy-600 hover:bg-navy-700 text-white font-medium text-sm transition-all disabled:opacity-50 cursor-pointer shadow-sm hover:shadow"
            >
              {isChecking ? 'Checking...' : '↻ Re-test Connection'}
            </button>
          </div>

          {/* Checklist */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy-900 tracking-tight">
              Recommended Troubleshooting Steps
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-navy-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="font-semibold text-navy-900 text-base">Check Wi-Fi or Cellular</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Verify your router signal or toggle mobile data off and on. Ensure airplane mode is disabled.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-navy-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="font-semibold text-navy-900 text-base">Corporate VPNs &amp; Firewalls</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Workplace networks occasionally filter external application portals. Try disconnecting corporate VPN or contacting your network admin.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-navy-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="font-semibold text-navy-900 text-base">Reload or Clear Cache</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Press Ctrl+F5 (or Cmd+Shift+R on Mac) to bypass cached pages and initiate a fresh handshake with our servers.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-navy-200 bg-white space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h4 className="font-semibold text-navy-900 text-base">Government Gateway Status</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The Disclosure and Barring Service (DBS eBulk) periodically performs maintenance on weekends or late nights.
                </p>
              </div>
            </div>
          </div>

          {/* Urgent telephone assistance */}
          <div className="p-6 rounded-xl bg-orange-50/70 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-semibold text-navy-900 text-base">
                Need to submit urgently while offline?
              </h4>
              <p className="text-xs text-gray-700">
                Call our support team. We can assist with verification or application dispatch by phone.
              </p>
            </div>
            <a
              href={`tel:${SITE.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm shrink-0 transition-colors shadow-sm"
            >
              Call {SITE.phone}
            </a>
          </div>

          {/* Back button */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-orange-600 transition-colors"
            >
              ← Back to Homepage
            </Link>
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
