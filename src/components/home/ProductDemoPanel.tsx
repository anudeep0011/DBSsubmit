'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { REGISTER_URL } from '@/lib/constants';

export const ProductDemoPanel: React.FC = () => {
  const [tier, setTier] = useState<'basic' | 'standard' | 'enhanced'>('basic');
  const [vol, setVol] = useState<number>(5);

  const estimates = {
    basic: { price: '£18.00', fee: '£10.00', time: 'Under 24–48 hours', scope: 'Unspent convictions & cautions' },
    standard: { price: '£18.00', fee: '£8.50', time: '1–5 Days', scope: 'Spent & unspent convictions' },
    enhanced: { price: '£38.00', fee: '£8.50', time: '6–13 Days', scope: 'Full criminal history + police info' },
  };

  const curr = estimates[tier];

  return (
    <div className="relative">
      <div className="relative bg-navy-600 border border-navy-500/60 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-navy-500 pb-4">
          <span className="text-xs text-slate-200 font-semibold tracking-wide">
            Instant Check Calculator
          </span>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-slate-200 font-medium mb-2">Select Check Level</label>
            <div className="grid grid-cols-3 gap-2">
              {(['basic', 'standard', 'enhanced'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTier(t)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium capitalize transition-all cursor-pointer ${
                    tier === t
                      ? 'bg-orange-400 text-white shadow-xs'
                      : 'bg-navy-700/60 text-slate-200 hover:bg-navy-700 border border-navy-500'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs text-slate-200 font-medium mb-1.5">
              <span>Annual Volume (Checks)</span>
              <span className="text-orange-300 font-semibold">{vol} checks/yr</span>
            </div>
            <input
              type="range"
              min="1"
              max="150"
              value={vol}
              onChange={(e) => setVol(Number(e.target.value))}
              className="w-full accent-orange-400 bg-navy-700 rounded-lg cursor-pointer h-2"
            />
          </div>
        </div>

        {/* Result Card */}
        <div className="bg-navy-700/90 border border-navy-500 rounded-xl p-5 space-y-4 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
              {tier} DBS check
            </span>
            <span className="bg-orange-400/20 text-orange-300 text-[11px] font-medium px-2 py-0.5 rounded border border-orange-400/30">
              {vol >= 51 ? 'Volume Rate Applied' : 'Standard Rate'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-b border-navy-500 py-3">
            <div>
              <span className="text-[11px] text-slate-300 block font-normal">Government Fee</span>
              <span className="text-lg font-semibold text-white">{curr.price}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-300 block font-normal">Est. Turnaround</span>
              <span className="text-lg font-semibold text-orange-300">{curr.time}</span>
            </div>
          </div>

          <div className="text-xs text-slate-200 font-normal leading-relaxed">
            Scope: <span className="text-white font-medium">{curr.scope}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-1">
          <Button
            href={`${REGISTER_URL}?checkType=${tier}`}
            external
            variant="orange"
            size="md"
            className="w-full text-center justify-center font-medium shadow-md shadow-navy-950/40"
          >
            Start {tier} application →
          </Button>
        </div>
      </div>
    </div>
  );
};
