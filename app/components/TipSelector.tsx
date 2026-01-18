'use client';

import { memo, useState } from 'react';

interface TipSelectorProps {
  selectedTip: number;
  onTipChange: (tip: number) => void;
}

const TipSelector = memo(function TipSelector({
  selectedTip,
  onTipChange,
}: TipSelectorProps) {
  const [showCustom, setShowCustom] = useState(false);
  const commonTips = [0, 10, 15, 18, 20, 25];

  return (
    <div className="mb-8">
      <label className="block text-black text-lg font-semibold mb-3">
        Tip Percentage
      </label>
      
      {/* Quick Tip Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {commonTips.map((tip) => (
          <button
            key={tip}
            onClick={() => {
              onTipChange(tip);
              setShowCustom(false);
            }}
            className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black border-2 ${
              selectedTip === tip && !showCustom
                ? 'bg-black text-white border-black shadow-lg transform scale-105'
                : 'bg-white text-black border-black hover:bg-black hover:text-white hover:shadow-md hover:scale-105'
            }`}
            aria-pressed={selectedTip === tip && !showCustom}
            aria-label={`${tip} percent tip`}
          >
            {tip}%
          </button>
        ))}
      </div>

      {/* Custom Tip Toggle Button */}
      <button
        onClick={() => setShowCustom(!showCustom)}
        className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black border-2 mb-3 ${
          showCustom
            ? 'bg-black text-white border-black shadow-lg'
            : 'bg-white text-black border-black hover:bg-black hover:text-white hover:shadow-md hover:scale-105'
        }`}
      >
        {showCustom ? 'Hide Custom' : 'Custom Tip'}
      </button>

      {/* Custom Tip Input - Hidden by default */}
      {showCustom && (
        <div className="flex items-center gap-3 animate-fade-in">
          <label htmlFor="custom-tip" className="text-black font-medium min-w-[80px]">
            Custom:
          </label>
          <input
            id="custom-tip"
            type="number"
            step="0.1"
            min="0"
            max="100"
            value={selectedTip}
            onChange={(e) => onTipChange(parseFloat(e.target.value) || 0)}
            className="flex-1 px-4 py-3 text-xl font-bold bg-black border-2 border-black rounded-xl text-white focus:outline-none focus:ring-4 focus:ring-black transition-all duration-300"
            aria-label="Custom tip percentage"
            autoFocus
          />
          <span className="text-black text-xl font-bold min-w-[30px]">%</span>
        </div>
      )}
    </div>
  );
});

export default TipSelector;
