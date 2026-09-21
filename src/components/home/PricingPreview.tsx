'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { REGISTER_URL } from '@/lib/constants';

export const PricingPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'individual'>('business');

  const businessBasicStandard = [
    { tier: 'Tier 1', volume: '1 - 99 checks / yr', govFee: '£21.50', adminFee: '£16.20', total: '£37.70' },
    { tier: 'Tier 2', volume: '100 - 499 checks / yr', govFee: '£21.50', adminFee: '£13.80', total: '£35.30', badge: 'Popular' },
    { tier: 'Tier 3', volume: '500 - 1,499 checks / yr', govFee: '£21.50', adminFee: '£12.60', total: '£34.10' },
  ];

  const businessEnhanced = [
    { tier: 'Tier 1', volume: '1 - 99 checks / yr', govFee: '£49.50', adminFee: '£16.20', total: '£65.70' },
    { tier: 'Tier 2', volume: '100 - 499 checks / yr', govFee: '£49.50', adminFee: '£13.80', total: '£63.30', badge: 'Popular' },
    { tier: 'Tier 3', volume: '500 - 1,499 checks / yr', govFee: '£49.50', adminFee: '£12.60', total: '£62.10' },
  ];

  const individualDbs = [
    { service: 'Basic DBS Check', desc: 'Unspent convictions & cautions', govFee: '£21.50', adminFee: '£20.50', total: '£42.00' },
    { service: 'Standard DBS Check', desc: 'Spent & unspent convictions, cautions', govFee: '£21.50', adminFee: '£20.50', total: '£42.00' },
    { service: 'Enhanced DBS Check', desc: 'Full criminal history + local police records', govFee: '£49.50', adminFee: '£23.50', total: '£73.00' },
  ];

  const volunteerChecks = [
    { service: 'Standard Voluntary DBS', desc: 'Eligible non-remunerated voluntary roles', govFee: '£0.00', adminFee: '£18.00', total: '£18.00' },
    { service: 'Enhanced Voluntary DBS', desc: 'Regulated voluntary activity with children/adults', govFee: '£0.00', adminFee: '£18.00', total: '£18.00' },
  ];

  const digitalIdChecks = [
    { service: 'Digital ID Essentials', desc: 'Secure biometric identity & address verification', govFee: '£0.00', adminFee: '£6.50', total: '£6.50' },
    { service: 'Digital ID Time Saver', desc: 'Express assisted document checking & rapid sync', govFee: '£0.00', adminFee: '£11.50', total: '£11.50' },
  ];

  const ancillaryServices = [
    { service: 'Adult First Check', desc: 'Fast-track barred list check for emergency care start', govFee: '£6.00', adminFee: '£12.00', total: '£18.00' },
    { service: 'External Validation Check', desc: 'Independent national document validation check', govFee: '£0.00', adminFee: '£14.00', total: '£14.00' },
    { service: 'Update Service Status Checker', desc: 'Instant online status check on existing certificates', govFee: '£0.00', adminFee: '£9.00', total: '£9.00' },
    { service: 'Update Service Gov Registration', desc: 'Managed annual registration with the government DBS Update Service', govFee: '£16.00', adminFee: '£3.00', total: '£19.00' },
  ];

  return (
    <SectionWrapper bg="navy-50" id="pricing-preview">
      <div className="space-y-12 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <ScrollReveal delay={0.1}>
              <Badge variant="navy">Official Rate Matrix</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-900 leading-tight">
                Clear, transparent DBS check pricing.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Official government disclosure fees with discounted administration charges. Full compliance with zero hidden subscription costs.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Toggle Switch */}
          <ScrollReveal delay={0.3}>
            <div className="inline-flex p-1.5 bg-white border border-navy-200 rounded-xl shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('business')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'business'
                    ? 'bg-navy-600 text-white shadow-xs'
                    : 'text-navy-700 hover:text-navy-950'
                }`}
              >
                Employer &amp; Volume Rates
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('individual')}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'individual'
                    ? 'bg-navy-600 text-white shadow-xs'
                    : 'text-navy-700 hover:text-navy-950'
                }`}
              >
                Individual &amp; Services
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Tab 1: Business / Employer Volume Rates */}
        {activeTab === 'business' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Basic / Standard Tier Table */}
            <ScrollReveal delay={0.35}>
              <div className="bg-white rounded-2xl border border-navy-200 shadow-sm overflow-hidden">
                <div className="p-6 sm:px-8 border-b border-navy-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-navy-50/50">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Basic &amp; Standard DBS Checks</h3>
                    <p className="text-sm text-gray-600 font-normal">Priced by annual submission volume. Includes government fees and digital processing.</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-100 text-navy-800 self-start sm:self-auto">
                    Gov. Fee: £21.50
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-navy-200 text-navy-600 text-xs font-semibold uppercase tracking-wider bg-white">
                        <th className="py-4 px-6">Volume Tier</th>
                        <th className="py-4 px-6">Annual Volume</th>
                        <th className="py-4 px-6">Gov. Fee</th>
                        <th className="py-4 px-6">Admin Fee (inc. VAT)</th>
                        <th className="py-4 px-6 text-right">Total to Client</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100 text-navy-900 text-sm">
                      {businessBasicStandard.map((row, idx) => (
                        <tr key={idx} className="hover:bg-navy-50/60 transition-colors">
                          <td className="py-4 px-6 font-semibold text-navy-900 flex items-center gap-2">
                            {row.tier}
                            {row.badge && (
                              <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                                {row.badge}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-gray-600 font-normal">{row.volume}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.govFee}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.adminFee}</td>
                          <td className="py-4 px-6 text-right font-bold text-base text-navy-900">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            {/* Enhanced DBS Tier Table */}
            <ScrollReveal delay={0.4}>
              <div className="bg-white rounded-2xl border border-navy-200 shadow-sm overflow-hidden">
                <div className="p-6 sm:px-8 border-b border-navy-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-navy-50/50">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Enhanced DBS Checks</h3>
                    <p className="text-sm text-gray-600 font-normal">For regulated activity roles in education, healthcare, childcare, and vulnerable adult care.</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-100 text-navy-800 self-start sm:self-auto">
                    Gov. Fee: £49.50
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-navy-200 text-navy-600 text-xs font-semibold uppercase tracking-wider bg-white">
                        <th className="py-4 px-6">Volume Tier</th>
                        <th className="py-4 px-6">Annual Volume</th>
                        <th className="py-4 px-6">Gov. Fee</th>
                        <th className="py-4 px-6">Admin Fee (inc. VAT)</th>
                        <th className="py-4 px-6 text-right">Total to Client</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100 text-navy-900 text-sm">
                      {businessEnhanced.map((row, idx) => (
                        <tr key={idx} className="hover:bg-navy-50/60 transition-colors">
                          <td className="py-4 px-6 font-semibold text-navy-900 flex items-center gap-2">
                            {row.tier}
                            {row.badge && (
                              <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                                {row.badge}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-gray-600 font-normal">{row.volume}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.govFee}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.adminFee}</td>
                          <td className="py-4 px-6 text-right font-bold text-base text-navy-900">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            {/* Enterprise Callout */}
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-navy-950">Submitting 1,500+ checks annually?</h4>
                <p className="text-sm text-navy-800 font-normal">Contact our accounts team for bespoke enterprise SLA contracts, ATS integration, and dedicated account management.</p>
              </div>
              <Button href="/contact" variant="orange" size="sm" className="shrink-0">
                Contact Enterprise Team
              </Button>
            </div>
          </div>
        )}

        {/* Tab 2: Individual & Services Rates */}
        {activeTab === 'individual' && (
          <div className="space-y-8 animate-fadeIn">
            <ScrollReveal delay={0.35}>
              <div className="bg-white rounded-2xl border border-navy-200 shadow-sm overflow-hidden">
                <div className="p-6 sm:px-8 border-b border-navy-100 bg-navy-50/50">
                  <h3 className="text-xl font-bold text-navy-900">Individual DBS Checks</h3>
                  <p className="text-sm text-gray-600 font-normal">Official criminal record checks for self-applicants, contractors, and individuals.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-navy-200 text-navy-600 text-xs font-semibold uppercase tracking-wider bg-white">
                        <th className="py-4 px-6">Service</th>
                        <th className="py-4 px-6">Description</th>
                        <th className="py-4 px-6">Gov. Fee</th>
                        <th className="py-4 px-6">Admin Fee</th>
                        <th className="py-4 px-6 text-right">Total Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100 text-navy-900 text-sm">
                      {individualDbs.map((row, idx) => (
                        <tr key={idx} className="hover:bg-navy-50/60 transition-colors">
                          <td className="py-4 px-6 font-semibold text-navy-900">{row.service}</td>
                          <td className="py-4 px-6 text-gray-600 font-normal">{row.desc}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.govFee}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.adminFee}</td>
                          <td className="py-4 px-6 text-right font-bold text-base text-navy-900">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            {/* Volunteer & Digital ID Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Volunteer Table */}
              <div className="bg-white rounded-2xl border border-navy-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-navy-100 bg-navy-50/50">
                  <h3 className="text-lg font-bold text-navy-900">DBS Checks for Volunteers</h3>
                  <p className="text-xs text-gray-600 font-normal">Government fee waived for eligible charity and voluntary roles.</p>
                </div>
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-navy-200 text-navy-600 text-xs font-semibold uppercase tracking-wider bg-white">
                      <th className="py-3.5 px-6">Volunteer Check</th>
                      <th className="py-3.5 px-4">Gov. Fee</th>
                      <th className="py-3.5 px-6 text-right">Total Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {volunteerChecks.map((row, idx) => (
                      <tr key={idx} className="hover:bg-navy-50/60 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-semibold text-navy-900">{row.service}</div>
                          <div className="text-xs text-gray-500">{row.desc}</div>
                        </td>
                        <td className="py-4 px-4 text-emerald-600 font-semibold">{row.govFee}</td>
                        <td className="py-4 px-6 text-right font-bold text-navy-900">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Digital ID Table */}
              <div className="bg-white rounded-2xl border border-navy-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-navy-100 bg-navy-50/50">
                  <h3 className="text-lg font-bold text-navy-900">Digital ID Verification</h3>
                  <p className="text-xs text-gray-600 font-normal">Instant biometric document validation without paper handling.</p>
                </div>
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-navy-200 text-navy-600 text-xs font-semibold uppercase tracking-wider bg-white">
                      <th className="py-3.5 px-6">Option</th>
                      <th className="py-3.5 px-4">Gov. Fee</th>
                      <th className="py-3.5 px-6 text-right">Total Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {digitalIdChecks.map((row, idx) => (
                      <tr key={idx} className="hover:bg-navy-50/60 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-semibold text-navy-900">{row.service}</div>
                          <div className="text-xs text-gray-500">{row.desc}</div>
                        </td>
                        <td className="py-4 px-4 text-emerald-600 font-semibold">{row.govFee}</td>
                        <td className="py-4 px-6 text-right font-bold text-navy-900">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Other Ancillary Services Table */}
            <ScrollReveal delay={0.4}>
              <div className="bg-white rounded-2xl border border-navy-200 shadow-sm overflow-hidden">
                <div className="p-6 sm:px-8 border-b border-navy-100 bg-navy-50/50">
                  <h3 className="text-xl font-bold text-navy-900">Ancillary &amp; Regulatory Services</h3>
                  <p className="text-sm text-gray-600 font-normal">Specialized background screening options and ongoing certificate management.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-navy-200 text-navy-600 text-xs font-semibold uppercase tracking-wider bg-white">
                        <th className="py-4 px-6">Service</th>
                        <th className="py-4 px-6">Scope &amp; Utility</th>
                        <th className="py-4 px-6">Gov. Fee</th>
                        <th className="py-4 px-6">Admin Fee</th>
                        <th className="py-4 px-6 text-right">Total Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100 text-navy-900 text-sm">
                      {ancillaryServices.map((row, idx) => (
                        <tr key={idx} className="hover:bg-navy-50/60 transition-colors">
                          <td className="py-4 px-6 font-semibold text-navy-900">{row.service}</td>
                          <td className="py-4 px-6 text-gray-600 font-normal">{row.desc}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.govFee}</td>
                          <td className="py-4 px-6 text-gray-700 font-medium">{row.adminFee}</td>
                          <td className="py-4 px-6 text-right font-bold text-base text-navy-900">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* CTA Banner */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-navy-200 shadow-xs">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-navy-900">Ready to start your submission?</h4>
            <p className="text-sm text-gray-600 font-normal">Set up an account in under 10 minutes. Submissions received before 4pm UK time processed same-day.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button href={REGISTER_URL} external variant="orange" size="md">
              Apply Now →
            </Button>
            <Button href="/contact" variant="navy-outline" size="md">
              Talk to an Expert
            </Button>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
