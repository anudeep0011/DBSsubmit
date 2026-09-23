'use client';

import React from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <title>Application Error | DBS-Express</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          backgroundColor: '#17173F',
          color: '#FFFFFF',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '560px',
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#1F1F58',
            borderRadius: '16px',
            padding: '40px 24px',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: 'rgba(230, 119, 44, 0.15)',
              border: '1px solid rgba(230, 119, 44, 0.4)',
              color: '#E6772C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              fontSize: '28px',
            }}
          >
            !
          </div>

          <h1
            style={{
              fontSize: '24px',
              fontWeight: '600',
              margin: '0 0 12px 0',
              color: '#FFFFFF',
            }}
          >
            System Service Notice
          </h1>

          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#C9C9DD',
              margin: '0 0 28px 0',
            }}
          >
            The application experienced an unexpected startup error. Please refresh the page or try again in a few moments.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '28px',
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                backgroundColor: '#E6772C',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '6px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              ↻ Reload Application
            </button>
            <Link
              href="/"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              Return Home
            </Link>
          </div>

          <div
            style={{
              fontSize: '12px',
              color: '#9E9EC0',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '20px',
            }}
          >
            Need urgent assistance? Telephone: {SITE.phone} • Email: {SITE.email}
            {error?.digest && (
              <div style={{ marginTop: '8px', opacity: 0.5, fontFamily: 'monospace' }}>
                Ref: {error.digest}
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
