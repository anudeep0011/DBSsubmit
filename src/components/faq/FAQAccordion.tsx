'use client';

import React, { useState } from 'react';

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQAccordion: React.FC<{ item: FAQItemData }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-navy-200 bg-white rounded-2xl p-6 sm:p-8 transition-colors shadow-sm hover:border-navy-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-start gap-4 font-semibold text-navy-900 text-lg sm:text-xl focus:outline-none cursor-pointer tracking-tight"
      >
        <span className="leading-snug">{item.question}</span>
        <span className="w-8 h-8 rounded-full bg-navy-600 flex items-center justify-center shrink-0 text-white font-medium text-sm">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="mt-6 pt-6 border-t border-navy-200 text-base text-gray-700 leading-relaxed space-y-3">
          <span className="text-xs font-medium text-navy-900 bg-orange-50 px-2.5 py-1 rounded inline-block border border-orange-200">
            {item.category}
          </span>
          <p className="mt-2 text-base text-gray-700 font-normal">{item.answer}</p>
        </div>
      )}
    </div>
  );
};
