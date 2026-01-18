'use client';

import { memo } from 'react';
import { formatCurrency } from '@/lib/utils';
import type { CalculationResult } from '@/types';

interface ResultDisplayProps {
  result: CalculationResult;
}

const ResultDisplay = memo(function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <div className="bg-black text-white rounded-xl p-6 shadow-2xl border-2 border-black">
      <h2 className="text-white text-xl font-semibold mb-4">
        Calculation Breakdown
      </h2>

      <div className="space-y-3">
        {/* Subtotal */}
        <div className="flex justify-between items-center pb-2 border-b border-white">
          <span className="text-white">Subtotal:</span>
          <span className="text-white font-bold text-lg">
            {formatCurrency(result.subtotal)}
          </span>
        </div>

        {/* Tip Amount */}
        {result.tipAmount > 0 && (
          <div className="flex justify-between items-center pb-2 border-b border-white">
            <span className="text-white">Tip:</span>
            <span className="text-white font-bold text-lg">
              {formatCurrency(result.tipAmount)}
            </span>
          </div>
        )}

        {/* Tax Amount */}
        {result.taxAmount > 0 && (
          <div className="flex justify-between items-center pb-2 border-b border-white">
            <span className="text-white">Tax:</span>
            <span className="text-white font-bold text-lg">
              {formatCurrency(result.taxAmount)}
            </span>
          </div>
        )}

        {/* Total */}
        <div className="flex justify-between items-center pb-3 border-b-2 border-white">
          <span className="text-white font-semibold text-lg">Total:</span>
          <span className="text-white font-bold text-xl">
            {formatCurrency(result.total)}
          </span>
        </div>

        {/* Per Person - Highlighted */}
        <div className="bg-white text-black rounded-lg p-4 mt-4 border-2 border-white">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Per Person:</span>
            <span className="font-bold text-3xl">
              {formatCurrency(result.perPersonWithExtras)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResultDisplay;
