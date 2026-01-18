'use client';

import { useState, useCallback, useMemo, memo } from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { calculateExpenseSplit, generateId } from '@/lib/calculations';
import { formatCurrency, debounce } from '@/lib/utils';
import type { Person, ExpenseSplit } from '@/types';
import TipSelector from './TipSelector';
import ResultDisplay from './ResultDisplay';
import SplitHistory from './SplitHistory';

const ExpenseCalculator = memo(function ExpenseCalculator() {
  // State management
  const [amount, setAmount] = useState<string>('100.00');
  const [numberOfPeople, setNumberOfPeople] = useState<number>(2);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [taxPercentage, setTaxPercentage] = useState<number>(0);
  const [roundingMethod, setRoundingMethod] = useState<'up' | 'down' | 'nearest'>('nearest');
  const [people, setPeople] = useState<Person[]>([
    { id: generateId(), name: 'Person 1', amount: 0 },
    { id: generateId(), name: 'Person 2', amount: 0 },
  ]);
  const [history, setHistory] = useState<ExpenseSplit[]>([]);

  // Memoized calculation result
  const calculationResult = useMemo(() => {
    const numAmount = parseFloat(amount) || 0;
    return calculateExpenseSplit(
      numAmount,
      numberOfPeople,
      tipPercentage,
      taxPercentage,
      roundingMethod
    );
  }, [amount, numberOfPeople, tipPercentage, taxPercentage, roundingMethod]);

  // Debounced amount update for optimal INP
  const debouncedSetAmount = useMemo(
    () => debounce((value: string) => setAmount(value), 300),
    []
  );

  // Update number of people
  const updateNumberOfPeople = useCallback((newCount: number) => {
    const count = Math.max(1, Math.min(50, newCount));
    setNumberOfPeople(count);

    setPeople((prevPeople) => {
      const newPeople = [...prevPeople];
      if (count > prevPeople.length) {
        for (let i = prevPeople.length; i < count; i++) {
          newPeople.push({
            id: generateId(),
            name: `Person ${i + 1}`,
            amount: 0,
          });
        }
      } else {
        return newPeople.slice(0, count);
      }
      return newPeople;
    });
  }, []);

  // Update person name
  const updatePersonName = useCallback((id: string, name: string) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, name } : person
      )
    );
  }, []);

  // Save to history
  const saveToHistory = useCallback(() => {
    const split: ExpenseSplit = {
      id: generateId(),
      totalAmount: parseFloat(amount) || 0,
      numberOfPeople,
      tipPercentage,
      taxPercentage,
      perPersonAmount: calculationResult.perPersonWithExtras,
      timestamp: Date.now(),
      people: people.map((p) => ({
        ...p,
        amount: calculationResult.perPersonWithExtras,
      })),
      roundingMethod,
    };
    setHistory((prev) => [split, ...prev].slice(0, 10)); // Keep last 10
  }, [amount, numberOfPeople, tipPercentage, taxPercentage, calculationResult, people, roundingMethod]);

  // Clear history
  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Main Calculator Card */}
      <div className="bg-white text-black rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border-2 border-white">
        {/* Desktop: 3 column grid, Mobile: stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Column 1: Basic Inputs */}
          <div className="lg:col-span-1">
        {/* Amount Input */}
        <div className="mb-6">
          <label
            htmlFor="total-amount"
            className="block text-black text-lg font-semibold mb-3"
          >
            Total Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl font-bold">
              $
            </span>
            <input
              id="total-amount"
              type="number"
              step="0.01"
              min="0"
              defaultValue={amount}
              onChange={(e) => debouncedSetAmount(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-2xl sm:text-3xl font-bold bg-black border-2 border-black rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-4 focus:ring-black transition-all duration-300"
              placeholder="0.00"
              aria-label="Enter total amount in dollars"
            />
          </div>
        </div>

        {/* Number of People */}
        <div className="mb-6">
          <label className="block text-black text-lg font-semibold mb-3">
            Number of People
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => updateNumberOfPeople(numberOfPeople - 1)}
              disabled={numberOfPeople <= 1}
              className="w-12 h-12 flex items-center justify-center bg-black hover:bg-black/90 disabled:bg-black/50 disabled:cursor-not-allowed rounded-lg text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black border-2 border-black"
              aria-label="Decrease number of people"
            >
              <Minus className="w-5 h-5" aria-hidden="true" />
            </button>
            <input
              type="number"
              min="1"
              max="50"
              value={numberOfPeople}
              onChange={(e) => updateNumberOfPeople(parseInt(e.target.value) || 1)}
              className="flex-1 px-4 py-3 text-xl font-bold bg-black border-2 border-black rounded-xl text-white text-center focus:outline-none focus:ring-4 focus:ring-black transition-all duration-300"
              aria-label="Number of people"
            />
            <button
              onClick={() => updateNumberOfPeople(numberOfPeople + 1)}
              disabled={numberOfPeople >= 50}
              className="w-12 h-12 flex items-center justify-center bg-black hover:bg-black/90 disabled:bg-black/50 disabled:cursor-not-allowed rounded-lg text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black border-2 border-black"
              aria-label="Increase number of people"
            >
              <Plus className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Tax Input */}
        <div className="mb-6">
          <label htmlFor="tax-percentage" className="block text-black text-lg font-semibold mb-3">
            Tax (%)
          </label>
          <input
            id="tax-percentage"
            type="number"
            step="0.1"
            min="0"
            max="100"
            value={taxPercentage}
            onChange={(e) => setTaxPercentage(parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 text-xl font-bold bg-black border-2 border-black rounded-xl text-white focus:outline-none focus:ring-4 focus:ring-black transition-all duration-300"
            aria-label="Tax percentage"
          />
        </div>

        {/* Rounding Method */}
        <div className="mb-6">
          <label className="block text-black text-lg font-semibold mb-3">
            Rounding Method
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['up', 'down', 'nearest'] as const).map((method) => (
              <button
                key={method}
                onClick={() => setRoundingMethod(method)}
                className={`px-3 py-2 text-sm rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black border-2 ${
                  roundingMethod === method
                    ? 'bg-black text-white border-black shadow-lg transform scale-105'
                    : 'bg-white text-black border-black hover:bg-black hover:text-white hover:shadow-md hover:scale-105'
                }`}
                aria-pressed={roundingMethod === method}
              >
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </button>
            ))}
          </div>
        </div>
          </div>

          {/* Column 2: Tip Selector */}
          <div className="lg:col-span-1">
        {/* Tip Selector */}
        <TipSelector
          selectedTip={tipPercentage}
          onTipChange={setTipPercentage}
        />
          </div>

          {/* Column 3: Result Display */}
          <div className="lg:col-span-1">
        {/* Result Display */}
        <ResultDisplay result={calculationResult} />
          </div>

        </div>

        {/* People List - Full Width Below Grid */}
        <div className="mt-8 pt-8 border-t-2 border-black">
          <h3 className="text-black text-lg font-semibold mb-4">
            Individual Breakdown
          </h3>
          <div className="space-y-3">
            {people.map((person, index) => (
              <div
                key={person.id}
                className="flex items-center gap-2 sm:gap-3 bg-black rounded-lg p-2 sm:p-3 border-2 border-black"
              >
                <input
                  type="text"
                  value={person.name}
                  onChange={(e) => updatePersonName(person.id, e.target.value)}
                  className="flex-1 min-w-0 px-2 sm:px-3 py-2 bg-white border border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
                  aria-label={`Name for person ${index + 1}`}
                />
                <span className="text-white font-bold text-sm sm:text-lg whitespace-nowrap">
                  {formatCurrency(calculationResult.perPersonWithExtras)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={saveToHistory}
          className="w-full mt-8 px-6 py-4 bg-black text-white font-bold text-lg rounded-xl hover:bg-black/90 border-2 border-black transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-black"
        >
          Save to History
        </button>
      </div>

      {/* Split History */}
      {history.length > 0 && (
        <SplitHistory history={history} onClear={clearHistory} />
      )}
    </div>
  );
});

export default ExpenseCalculator;
