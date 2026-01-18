import type { CalculationResult } from '@/types';

/**
 * Calculate expense split with tip and tax
 * Pure function for optimal tree-shaking and performance
 */
export function calculateExpenseSplit(
  amount: number,
  numberOfPeople: number,
  tipPercentage: number = 0,
  taxPercentage: number = 0,
  roundingMethod: 'up' | 'down' | 'nearest' = 'nearest'
): CalculationResult {
  const subtotal = amount;
  const tipAmount = (subtotal * tipPercentage) / 100;
  const taxAmount = (subtotal * taxPercentage) / 100;
  const total = subtotal + tipAmount + taxAmount;
  const perPerson = total / numberOfPeople;

  let roundedPerPerson: number;
  
  switch (roundingMethod) {
    case 'up':
      roundedPerPerson = Math.ceil(perPerson * 100) / 100;
      break;
    case 'down':
      roundedPerPerson = Math.floor(perPerson * 100) / 100;
      break;
    default:
      roundedPerPerson = Math.round(perPerson * 100) / 100;
  }

  return {
    subtotal,
    tipAmount,
    taxAmount,
    total,
    perPerson,
    perPersonWithExtras: roundedPerPerson,
  };
}

/**
 * Generate unique ID for expense entries
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
