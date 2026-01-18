export interface ExpenseSplit {
  id: string;
  totalAmount: number;
  numberOfPeople: number;
  tipPercentage: number;
  taxPercentage: number;
  perPersonAmount: number;
  timestamp: number;
  people: Person[];
  roundingMethod: 'up' | 'down' | 'nearest';
}

export interface Person {
  id: string;
  name: string;
  amount: number;
}

export interface CalculationResult {
  subtotal: number;
  tipAmount: number;
  taxAmount: number;
  total: number;
  perPerson: number;
  perPersonWithExtras: number;
}
