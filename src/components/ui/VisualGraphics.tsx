import React from 'react';

interface GraphicProps {
  className?: string;
}

export const SmeVisualCard: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-navy-900 rounded-xl p-6 text-white border border-navy-700 space-y-4 shadow-md flex flex-col justify-between ${className}`}>
    <div className="flex items-center justify-between border-b border-navy-700 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
        <span className="text-xs font-semibold text-white">SME Fast-Track Dashboard</span>
      </div>
      <span className="text-[11px] bg-orange-400/20 text-orange-300 px-2 py-0.5 rounded border border-orange-400/30">
        Pay-As-You-Go
      </span>
    </div>
    <div className="space-y-2">
      <div className="p-3 bg-navy-800 rounded-lg flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-white">New Candidate Onboarding</div>
          <div className="text-[11px] text-navy-300">Basic DBS · 1–3 Days</div>
        </div>
        <span className="text-xs text-orange-400 font-medium">Ready</span>
      </div>
      <div className="p-3 bg-navy-800 rounded-lg flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-white">Contractor Verification</div>
          <div className="text-[11px] text-navy-300">Standard DBS · 2–5 Days</div>
        </div>
        <span className="text-xs text-navy-300 font-medium">Processing</span>
      </div>
    </div>
    <div className="text-[11px] text-navy-300 pt-1 flex justify-between">
      <span>Zero Monthly Setup Fees</span>
      <span className="text-white font-medium">uCheck Verified</span>
    </div>
  </div>
);

export const EnterpriseVisualCard: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-navy-900 rounded-xl p-6 text-white border border-navy-700 space-y-4 shadow-md flex flex-col justify-between ${className}`}>
    <div className="flex items-center justify-between border-b border-navy-700 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
        <span className="text-xs font-semibold text-white">Enterprise Bulk Matrix</span>
      </div>
      <span className="text-[11px] bg-orange-400/20 text-orange-300 px-2 py-0.5 rounded border border-orange-400/30">
        Volume Rate Applied
      </span>
    </div>
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-navy-800 p-2.5 rounded-lg border border-navy-700">
          <div className="text-orange-300 font-semibold text-sm">120+</div>
          <div className="text-[10px] text-navy-300">Annual Checks</div>
        </div>
        <div className="bg-navy-800 p-2.5 rounded-lg border border-navy-700">
          <div className="text-orange-300 font-semibold text-sm">Tier 3</div>
          <div className="text-[10px] text-navy-300">Admin Rate</div>
        </div>
        <div className="bg-navy-800 p-2.5 rounded-lg border border-navy-700">
          <div className="text-orange-300 font-semibold text-sm">API</div>
          <div className="text-[10px] text-navy-300">Connected</div>
        </div>
      </div>
    </div>
    <div className="text-[11px] text-navy-300 pt-1 flex justify-between">
      <span>Dedicated Account Manager</span>
      <span className="text-white font-medium">Monthly Invoicing</span>
    </div>
  </div>
);

export const IndividualVisualCard: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-navy-900 rounded-xl p-6 text-white border border-navy-700 space-y-4 shadow-md flex flex-col justify-between ${className}`}>
    <div className="flex items-center justify-between border-b border-navy-700 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
        <span className="text-xs font-semibold text-white">Individual Applicant Portal</span>
      </div>
      <span className="text-[11px] bg-orange-400/20 text-orange-300 px-2 py-0.5 rounded border border-orange-400/30">
        No Sponsor Needed
      </span>
    </div>
    <div className="space-y-3">
      <div className="p-4 bg-navy-800 rounded-lg space-y-2 border border-navy-700">
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-white">Basic DBS Certificate</span>
          <span className="text-orange-300 font-medium">100% Digital</span>
        </div>
        <div className="w-full bg-navy-700 h-2 rounded-full overflow-hidden">
          <div className="bg-orange-400 h-full w-4/5 rounded-full" />
        </div>
        <div className="text-[11px] text-navy-300 flex justify-between">
          <span>Digital ID Verified</span>
          <span>Paper Copy Posted</span>
        </div>
      </div>
    </div>
    <div className="text-[11px] text-navy-300 pt-1 flex justify-between">
      <span>Under 10 Mins Online</span>
      <span className="text-white font-medium">Official Certificate</span>
    </div>
  </div>
);

export const EmployerPortalVisual: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-navy-900 rounded-xl p-6 text-white border border-navy-700 space-y-4 shadow-md flex flex-col justify-between ${className}`}>
    <div className="flex items-center justify-between border-b border-navy-700 pb-3">
      <span className="text-xs font-semibold text-white">Workforce Screening Dashboard</span>
      <span className="text-[11px] bg-orange-400/20 text-orange-300 px-2.5 py-0.5 rounded-full border border-orange-400/30">
        uCheck Accredited
      </span>
    </div>
    <div className="space-y-2">
      <div className="p-3 bg-navy-800 rounded-lg flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-white">Healthcare Staff Screening</div>
          <div className="text-[11px] text-navy-300">Enhanced DBS + Barred Lists</div>
        </div>
        <span className="text-xs font-semibold text-orange-400">14 Active</span>
      </div>
      <div className="p-3 bg-navy-800 rounded-lg flex items-center justify-between">
        <div>
          <div className="text-xs font-medium text-white">Education Staff Onboarding</div>
          <div className="text-[11px] text-navy-300">Enhanced DBS Check</div>
        </div>
        <span className="text-xs font-semibold text-white">8 Completed</span>
      </div>
    </div>
    <div className="text-[11px] text-navy-300 pt-1 flex justify-between">
      <span>Volume Rates Active</span>
      <span className="text-white font-medium">Instant Dispatch</span>
    </div>
  </div>
);

export const IndividualPortalVisual: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-navy-900 rounded-xl p-6 text-white border border-navy-700 space-y-4 shadow-md flex flex-col justify-between ${className}`}>
    <div className="flex items-center justify-between border-b border-navy-700 pb-3">
      <span className="text-xs font-semibold text-white">Personal Check Application</span>
      <span className="text-[11px] bg-orange-400/20 text-orange-300 px-2.5 py-0.5 rounded-full border border-orange-400/30">
        100% Online
      </span>
    </div>
    <div className="space-y-3">
      <div className="p-4 bg-navy-800 rounded-lg space-y-2 border border-navy-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-400/20 text-orange-300 flex items-center justify-center font-semibold text-xs border border-orange-400/30">
            ✓
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Digital ID Scan Completed</div>
            <div className="text-[11px] text-navy-300">Passport / Driving Licence</div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-[11px] text-navy-300 pt-1 flex justify-between">
      <span>No Employer Sponsor Needed</span>
      <span className="text-white font-medium">1–3 Days Result</span>
    </div>
  </div>
);
