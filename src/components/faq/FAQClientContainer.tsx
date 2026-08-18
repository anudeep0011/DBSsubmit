'use client';

import React, { useState } from 'react';
import { FAQSearch } from './FAQSearch';
import { FAQAccordion, FAQItemData } from './FAQAccordion';
import { Button } from '@/components/ui/Button';

interface FAQClientContainerProps {
  items: FAQItemData[];
}

export const FAQClientContainer: React.FC<FAQClientContainerProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <div>
      <FAQSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No matching questions found for &quot;{searchTerm}&quot;.</p>
          <p className="text-sm mt-2">Try searching for &quot;Basic&quot;, &quot;ID&quot;, or &quot;Turnaround&quot;.</p>
        </div>
      ) : (
        <>
          {/* FAQ Accordion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {visibleItems.map((item) => (
              <FAQAccordion key={item.id} item={item} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="md"
                onClick={() => setVisibleCount((prev) => prev + 9)}
              >
                Load More Questions ({filteredItems.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
