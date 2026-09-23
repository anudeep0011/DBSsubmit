'use client';

import React from 'react';
import { SITE } from '@/lib/constants';

export const ContactForm: React.FC = () => {
  const emailSubject = 'DBS Check Application & Screening Request';
  const emailBody = `Hello DBS-Express Team,\n\nI would like to start a DBS check application / enquire about screening services.\n\nApplicant/Company Name:\nType of Check (Basic / Standard / Enhanced):\nContact Phone:\nAdditional Details:\n\nThank you.`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    SITE.email
  )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-12 border border-navy-200 shadow-sm space-y-8">
      
      {/* Card Header */}
      <div className="space-y-3">
        <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          Start Your Application
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Connect directly with our compliance screening desk. Submissions received before 4pm UK time are dispatched same day.
        </p>
      </div>

      {/* 1-2 Key Points */}
      <div className="space-y-4 pt-2">
        <div className="flex items-start gap-3.5">
          <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
            ✓
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy-900">
              Direct Application Dispatch
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
              Launch directly into Gmail with our company desk prefilled to submit candidate details, volume requests, or eligibility checks.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
            ✓
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy-900">
              Expert Compliance Review
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
              Every submission is checked by trained DBS countersignatories to prevent rejection or delays.
            </p>
          </div>
        </div>
      </div>

      {/* Action Button: Start Application */}
      <div className="pt-4">
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer text-center"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
          Start Application
        </a>
      </div>

    </div>
  );
};
