import Link from 'next/link';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: 'Service Status & Scheduled Maintenance | DBS-Express',
  description: 'Operational status, scheduled maintenance windows, and gateway health for DBS-Express.',
};

export default function MaintenancePage() {
  const services = [
    { name: 'DBS-Express Web Portal', status: 'Operational', latency: 'Normal' },
    { name: 'eBulk Application Submission Gateway', status: 'Operational', latency: 'Normal' },
    { name: 'ID Document Verification Engine', status: 'Operational', latency: 'Normal' },
    { name: 'Barred List Query System', status: 'Operational', latency: 'Normal' },
    { name: 'Payment Processing (Stripe/Bank)', status: 'Operational', latency: 'Normal' },
  ];

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-[#17173F] via-[#1F1F58] to-[#27276E] text-white px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Status Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          All Core Services Operational
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            System Status &amp; Maintenance
          </h1>
          <p className="text-navy-100 text-base leading-relaxed max-w-lg mx-auto">
            Real-time status of DBS-Express processing pipelines, applicant portals, and government gateway connections.
          </p>
        </div>

        {/* Service status table */}
        <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden text-left shadow-lg">
          <div className="px-5 py-3.5 border-b border-white/10 bg-white/5 flex items-center justify-between text-xs uppercase tracking-wider text-navy-200 font-semibold">
            <span>Component</span>
            <span>Status</span>
          </div>
          <div className="divide-y divide-white/5">
            {services.map((svc) => (
              <div key={svc.name} className="px-5 py-3.5 flex items-center justify-between text-sm">
                <span className="text-white font-medium">{svc.name}</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {svc.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Advisory Notice */}
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-xs text-navy-200 text-left space-y-2">
          <div className="font-semibold text-white flex items-center gap-2">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Routine Maintenance Notice
          </div>
          <p className="leading-relaxed">
            Standard DBS eBulk gateway maintenance is scheduled during off-peak Sunday mornings (02:00 – 06:00 GMT). Submissions made during maintenance windows are securely queued and processed immediately when services resume.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            ← Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all"
          >
            Report an Issue
          </Link>
        </div>

        {/* Helpline */}
        <div className="pt-4 text-xs text-navy-200">
          Support desk: {SITE.phone} ({SITE.hours}) • {SITE.email}
        </div>

      </div>
    </div>
  );
}
