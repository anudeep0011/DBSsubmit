'use client';

import React from 'react';

interface FAQSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const FAQSearch: React.FC<FAQSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search questions (e.g. Basic, ID documents, turnaround)..."
        className="w-full px-6 py-5 pl-14 rounded-2xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:border-orange-400 placeholder-navy-300 text-base font-body shadow-sm"
      />
      <svg
        className="w-6 h-6 text-navy-400 absolute left-5 top-1/2 -translate-y-1/2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-medium text-navy-600 hover:text-navy-900 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
};
