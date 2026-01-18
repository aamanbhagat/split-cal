'use client';

import { memo } from 'react';
import { Trash2, Clock } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import type { ExpenseSplit } from '@/types';

interface SplitHistoryProps {
  history: ExpenseSplit[];
  onClear: () => void;
}

const SplitHistory = memo(function SplitHistory({
  history,
  onClear,
}: SplitHistoryProps) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <div className="mt-8 bg-white text-black rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-black text-2xl font-bold flex items-center gap-2">
          <Clock className="w-6 h-6" aria-hidden="true" />
          Split History
        </h2>
        <button
          onClick={onClear}
          className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-black/90 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black border-2 border-black"
          aria-label="Clear all history"
        >
          <Trash2 className="w-4 h-4" aria-hidden="true" />
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {history.map((split) => (
          <div
            key={split.id}
            className="bg-black rounded-lg p-4 hover:bg-black/90 transition-all duration-300 border-2 border-black"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-white font-semibold text-lg">
                  {formatCurrency(split.totalAmount)}
                </p>
                <p className="text-white/70 text-sm">
                  {split.numberOfPeople} people · {split.tipPercentage}% tip
                  {split.taxPercentage > 0 && ` · ${split.taxPercentage}% tax`}
                </p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-xl">
                  {formatCurrency(split.perPersonAmount)}
                </p>
                <p className="text-white/70 text-sm">per person</p>
              </div>
            </div>
            <p className="text-white/60 text-xs mt-2">
              {formatDate(split.timestamp)}
            </p>
          </div>
        ))}
      </div>

      {history.length === 0 && (
        <p className="text-black/60 text-center py-8">
          No split history yet. Save your first calculation!
        </p>
      )}
    </div>
  );
});

export default SplitHistory;
