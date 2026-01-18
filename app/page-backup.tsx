import ExpenseCalculator from '@/app/components/ExpenseCalculator';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-4xl">Test</h1>
        <ExpenseCalculator />
      </div>
    </main>
  );
}
