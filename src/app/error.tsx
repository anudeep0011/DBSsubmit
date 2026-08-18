'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 px-6 py-24 text-center text-white">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400 mx-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Something went wrong</h1>
        <p className="text-navy-100 text-lg leading-relaxed font-normal">
          An unexpected error occurred while loading this page.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button onClick={() => reset()} variant="orange" size="md">
            Try again
          </Button>
          <Button href="/" variant="white-outline" size="md">
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
