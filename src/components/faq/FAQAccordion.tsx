'use client';

import React, { useState } from 'react';

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  item: FAQItemData;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  item,
  isOpen: controlledIsOpen,
  onToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={`border rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-xs bg-white ${
        isOpen
          ? 'border-navy-300 ring-1 ring-navy-100 shadow-sm'
          : 'border-navy-200 hover:border-navy-300'
      }`}
    >
      <button
        type="button"
        id={`faq-header-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
        onClick={handleToggle}
        className="w-full text-left flex justify-between items-center gap-4 font-semibold text-navy-900 text-base sm:text-lg focus:outline-none cursor-pointer tracking-tight"
      >
        <span className="leading-snug pr-2">{item.question}</span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
            isOpen ? 'bg-navy-900 text-white' : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          id={`faq-content-${item.id}`}
          role="region"
          aria-labelledby={`faq-header-${item.id}`}
          className="mt-4 pt-4 border-t border-navy-100 text-base text-gray-700 leading-relaxed space-y-3 animate-in fade-in duration-200"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-navy-900 bg-orange-50 px-2.5 py-1 rounded-md inline-block border border-orange-200">
              {item.category}
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

