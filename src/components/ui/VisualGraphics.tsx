import React from 'react';

interface GraphicProps {
  className?: string;
}

export const SmeVisualCard: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-linear-to-br from-navy-600 via-navy-700 to-navy-600 rounded-2xl p-6 sm:p-7 text-white border border-navy-500/80 space-y-5 shadow-xl flex flex-col justify-between ${className}`}>
    {/* Top Header */}
    <div className="flex items-center justify-between border-b border-navy-500 pb-3">
      <div className="flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm font-bold text-white tracking-wide">SME Screening Portal</span>
      </div>
      <span className="text-xs font-semibold bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full border border-orange-400/30">
        Pay-As-You-Go
      </span>
    </div>

    {/* Live Candidate Table Rows */}
    <div className="space-y-2.5">
      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-white">Sarah Jenkins</div>
          <div className="text-[11px] text-slate-200">Basic DBS · Digital ID Verified</div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
            Dispatched
          </span>
          <span className="text-[10px] text-navy-300 block mt-0.5">&lt; 24h turnaround</span>
        </div>
      </div>

      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-white">James Wilson</div>
          <div className="text-[11px] text-slate-200">Standard DBS · Logistics Dept</div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/30">
            In Review
          </span>
          <span className="text-[10px] text-navy-300 block mt-0.5">1–5 working days</span>
        </div>
      </div>

      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-white">Liam Patel</div>
          <div className="text-[11px] text-slate-200">Right to Work · Government Check</div>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold bg-orange-400/20 text-orange-300 px-2.5 py-1 rounded-full border border-orange-400/30">
            Free Check
          </span>
          <span className="text-[10px] text-navy-300 block mt-0.5">Instant Approved</span>
        </div>
      </div>
    </div>

    {/* Bottom Controls */}
    <div className="pt-3 border-t border-navy-500 flex items-center justify-between text-xs text-slate-200">
      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
        <span>✓</span>
        <span>Zero Setup or Minimum Fees</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-navy-700 px-3 py-1 rounded-lg text-white font-medium border border-navy-500 text-xs">+ Add User</span>
        <span className="bg-navy-700 px-3 py-1 rounded-lg text-slate-200 font-medium border border-navy-500 text-xs">Excel</span>
      </div>
    </div>
  </div>
);

export const EnterpriseVisualCard: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-linear-to-br from-navy-600 via-navy-700 to-navy-600 rounded-2xl p-6 sm:p-7 text-white border border-navy-500/80 space-y-5 shadow-xl flex flex-col justify-between ${className}`}>
    {/* Top Header */}
    <div className="flex items-center justify-between border-b border-navy-500 pb-3">
      <div className="flex items-center gap-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-sm font-bold text-white tracking-wide">Enterprise Screening Matrix</span>
      </div>
      <span className="text-xs font-semibold bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full border border-orange-400/30">
        Tier 3 Volume Rate
      </span>
    </div>

    {/* Metric Grid */}
    <div className="grid grid-cols-3 gap-3 text-center">
      <div className="bg-navy-700/80 p-3 rounded-xl border border-navy-500/60">
        <div className="text-orange-400 font-extrabold text-lg">500+</div>
        <div className="text-[10px] text-slate-200 uppercase tracking-wider mt-0.5">Annual Volume</div>
      </div>
      <div className="bg-navy-700/80 p-3 rounded-xl border border-navy-500/60">
        <div className="text-white font-extrabold text-lg">£12.60</div>
        <div className="text-[10px] text-slate-200 uppercase tracking-wider mt-0.5">Admin Fee</div>
      </div>
      <div className="bg-navy-700/80 p-3 rounded-xl border border-navy-500/60">
        <div className="text-emerald-400 font-extrabold text-lg">Active</div>
        <div className="text-[10px] text-slate-200 uppercase tracking-wider mt-0.5">API / ATS Sync</div>
      </div>
    </div>

    {/* Live Batch Dispatch Bar */}
    <div className="p-3.5 bg-navy-700/80 rounded-xl space-y-2 border border-navy-500/60">
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-white">Batch Candidate Upload</span>
        <span className="text-emerald-400 font-bold">148 / 148 Processed</span>
      </div>
      <div className="w-full bg-navy-800/80 h-2 rounded-full overflow-hidden">
        <div className="bg-emerald-400 h-full w-full rounded-full" />
      </div>
      <div className="flex justify-between text-[11px] text-slate-200">
        <span>Greenhouse &amp; Workday Connected</span>
        <span className="text-orange-300 font-medium">Auto-Invited</span>
      </div>
    </div>

    {/* Bottom Strip */}
    <div className="pt-3 border-t border-navy-500 flex items-center justify-between text-xs text-slate-200">
      <span className="text-white font-semibold">Named Account Specialist</span>
      <span className="text-orange-300 font-medium">30-Day Invoicing Terms</span>
    </div>
  </div>
);

export const IndividualVisualCard: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-linear-to-br from-navy-600 via-navy-700 to-navy-600 rounded-2xl p-6 sm:p-7 text-white border border-navy-500/80 space-y-5 shadow-xl flex flex-col justify-between ${className}`}>
    {/* Header */}
    <div className="flex items-center justify-between border-b border-navy-500 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm font-bold text-white tracking-wide">Individual Applicant Portal</span>
      </div>
      <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
        No Sponsor Needed
      </span>
    </div>

    {/* 3 Steps Progress */}
    <div className="space-y-2.5">
      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/30">
            ✓
          </div>
          <div>
            <div className="text-xs font-bold text-white">Digital ID Verification</div>
            <div className="text-[11px] text-slate-200">Passport / Driving Licence (Under 3 mins)</div>
          </div>
        </div>
        <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
          Complete
        </span>
      </div>

      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-orange-400/20 text-orange-300 flex items-center justify-center text-xs font-bold border border-orange-400/30">
            ⚡
          </div>
          <div>
            <div className="text-xs font-bold text-white">DBS Government Processing</div>
            <div className="text-[11px] text-slate-200">Submitted same-day before 4pm</div>
          </div>
        </div>
        <span className="text-[10px] font-bold bg-orange-400/20 text-orange-300 px-2 py-0.5 rounded border border-orange-400/30">
          In Progress
        </span>
      </div>

      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-bold border border-blue-500/30">
            3
          </div>
          <div>
            <div className="text-xs font-bold text-white">Official Certificate Issued</div>
            <div className="text-[11px] text-slate-200">Digital summary + paper copy posted</div>
          </div>
        </div>
        <span className="text-[10px] text-slate-200 font-medium">
          Under 24–48h
        </span>
      </div>
    </div>

    {/* Footer Info Strip */}
    <div className="text-xs text-slate-200 pt-3 border-t border-navy-500 flex items-center justify-between">
      <span className="text-orange-300 font-bold">Total: £42.00 Fixed</span>
      <span className="text-white font-medium">10-Min Online Application</span>
    </div>
  </div>
);

export const EmployerPortalVisual: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <SmeVisualCard className={className} />
);

export const IndividualPortalVisual: React.FC<GraphicProps> = ({ className = 'w-full h-full' }) => (
  <div className={`bg-linear-to-br from-navy-600 via-navy-700 to-navy-600 rounded-2xl p-6 sm:p-7 text-white border border-navy-500/80 space-y-5 shadow-xl flex flex-col justify-between ${className}`}>
    <div className="flex items-center justify-between border-b border-navy-500 pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm font-bold text-white tracking-wide">Individual Applicant Portal</span>
      </div>
      <span className="text-xs font-semibold bg-orange-400/20 text-orange-300 px-3 py-1 rounded-full border border-orange-400/30">
        Basic DBS Check
      </span>
    </div>

    <div className="space-y-2.5">
      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/30">
            ✓
          </div>
          <div>
            <div className="text-xs font-bold text-white">Digital Identity Verified</div>
            <div className="text-[11px] text-slate-200">UK Passport &amp; Driving Licence</div>
          </div>
        </div>
        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          Approved
        </span>
      </div>

      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-orange-400/20 text-orange-300 flex items-center justify-center text-xs font-bold border border-orange-400/30">
            ⚡
          </div>
          <div>
            <div className="text-xs font-bold text-white">DBS Processing Pipeline</div>
            <div className="text-[11px] text-slate-200">Fast-track submission before 4pm</div>
          </div>
        </div>
        <span className="text-[10px] bg-orange-400/20 text-orange-300 px-2 py-0.5 rounded border border-orange-400/30 font-bold">
          Under 24–48h
        </span>
      </div>

      <div className="p-3 bg-navy-700/80 rounded-xl flex items-center justify-between border border-navy-500/60">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-navy-800 text-slate-200 flex items-center justify-center text-xs font-bold">
            📄
          </div>
          <div>
            <div className="text-xs font-bold text-white">Official Certificate Dispatch</div>
            <div className="text-[11px] text-slate-200">Instant digital access + paper copy posted</div>
          </div>
        </div>
        <span className="text-[10px] text-slate-200 font-medium">
          Direct to you
        </span>
      </div>
    </div>

    <div className="text-xs text-slate-200 pt-3 border-t border-navy-500 flex items-center justify-between">
      <span className="text-orange-300 font-bold">✓ No Employer Sponsor Needed</span>
      <span className="text-white font-medium">100% Online Process</span>
    </div>
  </div>
);
