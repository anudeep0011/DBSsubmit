import React from 'react';

export const HeroLandingGraphic: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Visual Container */}
      <div className="relative bg-navy-600 border border-navy-500/60 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 text-white">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-navy-500 pb-4">
          <span className="text-xs font-semibold text-white tracking-wide">
            Verified Check Pipeline
          </span>
          <span className="text-xs text-orange-300 font-medium">
            DBS-Express System
          </span>
        </div>

        {/* Verification Status Card */}
        <div className="bg-navy-700/90 border border-navy-500 rounded-xl p-6 space-y-4 shadow-inner">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-400/20 border border-orange-400/40 text-orange-300 flex items-center justify-center font-semibold text-sm">
                ✓
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Digital ID Verification</h3>
                <p className="text-xs text-slate-200">Fast paperless applicant check</p>
              </div>
            </div>
            <span className="bg-orange-400/20 text-orange-300 text-xs font-medium px-3 py-1 rounded-full border border-orange-400/30">
              Verified
            </span>
          </div>

          {/* Turnaround Progress Meter */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs text-slate-200 font-normal">
              <span>Application Progress</span>
              <span className="text-orange-300 font-medium">Under 24–48h Est. Turnaround</span>
            </div>
            <div className="w-full bg-navy-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-linear-to-r from-orange-400 to-orange-300 h-full w-4/5 rounded-full shadow-xs" />
            </div>
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-navy-700/70 border border-navy-500/80 rounded-xl p-4 space-y-1">
            <div className="text-xs text-slate-300 font-normal">Check Levels</div>
            <div className="text-sm font-semibold text-white">Basic · Standard · Enhanced</div>
          </div>
          <div className="bg-navy-700/70 border border-navy-500/80 rounded-xl p-4 space-y-1">
            <div className="text-xs text-slate-300 font-normal">Employer Access</div>
            <div className="text-sm font-semibold text-white">Bulk Portal &amp; API</div>
          </div>
        </div>

        {/* Trust Seal Footer */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-200 border-t border-navy-500/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span>Official Disclosure &amp; Barring Service registered umbrella body processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};
