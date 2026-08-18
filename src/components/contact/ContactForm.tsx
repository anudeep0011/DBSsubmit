'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send enquiry. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-12 border border-navy-200 shadow-sm">
      <h3 className="text-3xl font-extrabold text-navy-900 mb-8 tracking-tight">Service Enquiry Form</h3>

      {status === 'success' ? (
        <div className="bg-orange-50 border border-orange-300 text-navy-900 p-8 rounded-xl text-center space-y-4">
          <span className="text-xs font-medium text-white bg-orange-400 px-3 py-1 rounded tracking-wide">
            CONFIRMED
          </span>
          <h4 className="font-semibold text-2xl text-navy-900">Enquiry Received</h4>
          <p className="text-base text-gray-700">Our compliance team will respond within 1 working day.</p>
          <div className="pt-4">
            <Button
              variant="navy"
              size="sm"
              onClick={() => setStatus('idle')}
            >
              Submit Another Query
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="orange">Enquiry</Badge>
            <span className="text-xs font-medium text-gray-700">All fields strictly confidential</span>
          </div>

          {status === 'error' && (
            <div className="bg-orange-50 border border-orange-300 text-navy-900 p-4 rounded-xl text-xs font-medium">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-navy-600 mb-2">
              First name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-orange-400 font-normal text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-navy-600 mb-2">
                Work email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.co.uk"
                className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-orange-400 font-normal text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-navy-600 mb-2">
                Phone number (optional)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0800 123 4567"
                className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-orange-400 font-normal text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-navy-600 mb-2">
              How can we help? *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your background check requirements..."
              className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-orange-400 font-normal text-sm resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="orange"
            size="lg"
            className="w-full"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting Enquiry...' : 'Submit Service Enquiry'}
          </Button>
        </form>
      )}
    </div>
  );
};
