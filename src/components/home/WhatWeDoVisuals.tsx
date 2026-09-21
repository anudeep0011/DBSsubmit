import React from 'react';

export const SmeFeatureVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-linear-to-br from-navy-600 via-navy-700 to-navy-600 text-white p-5 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-navy-500 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-wide">Candidate Management</span>
        </div>
        <span className="text-[11px] font-medium bg-orange-400/20 text-orange-300 px-2 py-0.5 rounded border border-orange-400/30">
          Pay-As-You-Go
        </span>
      </div>

      {/* Roster Items */}
      <div className="space-y-2 py-2">
        <div className="bg-navy-700/80 border border-navy-500/70 rounded-lg p-2.5 flex items-center justify-between text-xs">
          <div>
            <div className="font-semibold text-white">Sarah Jenkins</div>
            <div className="text-[11px] text-slate-200">Enhanced DBS · Healthcare</div>
          </div>
          <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
            Ready
          </span>
        </div>

        <div className="bg-navy-700/80 border border-navy-500/70 rounded-lg p-2.5 flex items-center justify-between text-xs">
          <div>
            <div className="font-semibold text-white">David Miller</div>
            <div className="text-[11px] text-slate-200">Basic DBS · Logistics</div>
          </div>
          <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
            Under 24h
          </span>
        </div>

        <div className="bg-navy-700/80 border border-navy-500/70 rounded-lg p-2.5 flex items-center justify-between text-xs">
          <div>
            <div className="font-semibold text-white">Emma Watson</div>
            <div className="text-[11px] text-slate-200">Right to Work · Free</div>
          </div>
          <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/30">
            Verified
          </span>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-navy-500 text-[11px] text-slate-200">
        <div className="flex items-center gap-1 text-emerald-400 font-medium">
          <span>✓</span>
          <span>Zero Monthly Fees</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-navy-700 px-2 py-0.5 rounded text-[10px] text-white border border-navy-500">+ Add User</span>
          <span className="bg-navy-700 px-2 py-0.5 rounded text-[10px] text-slate-200 border border-navy-500">Export</span>
        </div>
      </div>
    </div>
  );
};

export const TurnaroundFeatureVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-linear-to-br from-navy-600 via-navy-700 to-navy-600 text-white p-5 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-navy-500 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-orange-400 text-sm">⚡</span>
          <span className="text-xs font-semibold text-white tracking-wide">Fast-Track Engine</span>
        </div>
        <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
          Same-Day Before 4PM
        </span>
      </div>

      {/* Progress Timeline */}
      <div className="space-y-2.5 py-2">
        <div className="flex items-center gap-3 text-xs bg-navy-700/70 p-2 rounded-lg border border-navy-500/60">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px] shrink-0 border border-emerald-500/30">
            1
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-white flex justify-between">
              <span>Digital ID Verified</span>
              <span className="text-[10px] text-emerald-400 font-medium">3 mins</span>
            </div>
            <div className="text-[11px] text-slate-200 truncate">Passport &amp; Driver Licence NFC Scan</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs bg-navy-700/70 p-2 rounded-lg border border-navy-500/60">
          <div className="w-6 h-6 rounded-full bg-orange-400/20 text-orange-300 flex items-center justify-center font-bold text-[11px] shrink-0 border border-orange-400/30">
            2
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-white flex justify-between">
              <span>Direct Umbrella Link</span>
              <span className="text-[10px] text-orange-300 font-medium">Automated</span>
            </div>
            <div className="text-[11px] text-slate-200 truncate">Immediate DBS government queue dispatch</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs bg-navy-700/70 p-2 rounded-lg border border-navy-500/60">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-[11px] shrink-0 border border-blue-500/30">
            3
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-white flex justify-between">
              <span>Official Result Issued</span>
              <span className="text-[10px] text-blue-300 font-medium">&lt; 24–48h</span>
            </div>
            <div className="text-[11px] text-slate-200 truncate">Digital summary + paper certificate posted</div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-2 border-t border-navy-500 text-[11px]">
        <span className="text-slate-200">Basic Checks Turnaround:</span>
        <span className="text-orange-400 font-bold">Under 24–48 Hours</span>
      </div>
    </div>
  );
};

export const ComplianceFeatureVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-linear-to-br from-navy-600 via-navy-700 to-navy-600 text-white p-5 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-navy-500 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 text-sm">🛡️</span>
          <span className="text-xs font-semibold text-white tracking-wide">Accredited Compliance</span>
        </div>
        <span className="text-[11px] font-medium bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
          Home Office Standards
        </span>
      </div>

      {/* Compliance Matrix Items */}
      <div className="space-y-2 py-2">
        <div className="bg-navy-700/70 border border-navy-500/70 rounded-lg p-2.5 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white">Smart Eligibility Questionnaire</span>
            <span className="text-[10px] text-emerald-400 font-semibold">100% Compliant</span>
          </div>
          <div className="text-[11px] text-slate-200">
            Legal guidance confirms Basic, Standard, or Enhanced entitlement before submission.
          </div>
        </div>

        <div className="bg-navy-700/70 border border-navy-500/70 rounded-lg p-2.5 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white">Barred List Check Verification</span>
            <span className="text-[10px] text-orange-400 font-semibold">Regulated Activity</span>
          </div>
          <div className="text-[11px] text-slate-200">
            Children and Vulnerable Adult Barred Lists checked for healthcare &amp; education staff.
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-2 border-t border-navy-500 text-[11px]">
        <span className="text-slate-200">Official Umbrella Body:</span>
        <span className="text-emerald-400 font-semibold">DBS Registered &amp; Audited</span>
      </div>
    </div>
  );
};
