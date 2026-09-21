'use client';

import React, { useState, useMemo } from 'react';
import { FAQSearch } from './FAQSearch';
import { FAQAccordion, FAQItemData } from './FAQAccordion';
import { Button } from '@/components/ui/Button';

interface FAQClientContainerProps {
  items: FAQItemData[];
}

export const FAQClientContainer: React.FC<FAQClientContainerProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)));
    return ['All', ...unique];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        !searchTerm.trim() ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const allVisibleOpen =
    visibleItems.length > 0 && visibleItems.every((item) => openIds.has(item.id));

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleAll = () => {
    if (allVisibleOpen) {
      setOpenIds((prev) => {
        const next = new Set(prev);
        visibleItems.forEach((item) => next.delete(item.id));
        return next;
      });
    } else {
      setOpenIds((prev) => {
        const next = new Set(prev);
        visibleItems.forEach((item) => next.add(item.id));
        return next;
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Input */}
      <FAQSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => {
          const count =
            cat === 'All'
              ? items.length
              : items.filter((i) => i.category === cat).length;
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(12);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                isSelected
                  ? 'bg-navy-900 text-white shadow-xs'
                  : 'bg-white text-navy-800 border border-navy-200 hover:border-navy-300 hover:bg-navy-50'
              }`}
            >
              {cat}
              <span
                className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs font-medium ${
                  isSelected ? 'bg-navy-800 text-navy-100' : 'bg-navy-100 text-navy-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-navy-200 text-gray-500 px-6">
          <p className="text-lg font-medium text-navy-900">
            No matching questions found for &quot;{searchTerm}&quot;.
          </p>
          <p className="text-sm mt-2 text-gray-600">
            Try searching for &quot;Basic&quot;, &quot;ID documents&quot;, &quot;Turnaround&quot;, or select &quot;All&quot; categories.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-6"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <>
          {/* Header Bar: Count & Expand All Toggle */}
          <div className="flex items-center justify-between mb-4 px-1 text-sm text-gray-600">
            <span>
              Showing <strong className="text-navy-900 font-semibold">{visibleItems.length}</strong> of{' '}
              <strong className="text-navy-900 font-semibold">{filteredItems.length}</strong> questions
            </span>
            <button
              type="button"
              onClick={handleToggleAll}
              className="text-navy-900 font-semibold hover:text-orange-500 transition-colors text-sm cursor-pointer underline underline-offset-4"
            >
              {allVisibleOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>

          {/* Clean Single-Column FAQ Stack (No row stretching issues) */}
          <div className="space-y-4">
            {visibleItems.map((item) => (
              <FAQAccordion
                key={item.id}
                item={item}
                isOpen={openIds.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="mt-10 text-center">
              <Button
                variant="outline"
                size="md"
                onClick={() => setVisibleCount((prev) => prev + 10)}
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

