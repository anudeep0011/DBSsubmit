'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dbsexpress_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowConsent(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dbsexpress_cookie_consent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('dbsexpress_cookie_consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-6 bg-navy-600 text-white border-t border-navy-500 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-navy-100 max-w-3xl space-y-1">
          <p className="font-bold text-white text-base">Cookie & Privacy Consent</p>
          <p>
            We use essential cookies to enable secure platform hand-off and analyze website traffic. By clicking &quot;Accept All&quot;, you consent to the use of cookies in accordance with our Privacy Policy.
          </p>
        </div>
        <div className="flex items-center space-x-4 shrink-0">
          <Button variant="white-outline" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="orange" size="sm" onClick={handleAccept}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};
