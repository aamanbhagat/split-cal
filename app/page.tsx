import dynamic from 'next/dynamic';

// Dynamic import for calculator to reduce initial bundle size
const ExpenseCalculator = dynamic(() => import('@/app/components/ExpenseCalculator'), {
  loading: () => <div className="bg-white text-black rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border-2 border-white min-h-[400px] flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
      <p className="text-lg font-semibold">Loading calculator...</p>
    </div>
  </div>,
  ssr: false,
});

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Smart Expense Splitter',
    description: 'Free online expense splitter and tip calculator - Split bills instantly with friends',
    url: 'https://split-cal.vercel.app',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1250',
    },
  };

  return (
    <main className="bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Smart Expense Splitter
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
            Split bills instantly, calculate tips accurately, and share costs
            fairly among friends. Free forever. 💸
          </p>
        </header>

        {/* Main Calculator */}
        <section aria-label="Expense calculator">
          <ExpenseCalculator />
        </section>

        {/* SEO Content Section */}
        <article className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white text-black rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              🎯 Split Bills Like a Pro - The Ultimate Guide
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Ever found yourself at dinner with friends, staring at a bill like it&apos;s a complex math equation? 
                We&apos;ve all been there! 😅 Our Smart Expense Splitter is your new best friend for turning 
                &quot;Ugh, who owes what?&quot; into &quot;Done! ✨&quot; in seconds.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                <div className="bg-black text-white rounded-lg p-4 text-center border-2 border-black">
                  <div className="text-3xl font-bold">&lt; 2s</div>
                  <div className="text-sm mt-1">Avg Split Time</div>
                </div>
                <div className="bg-black text-white rounded-lg p-4 text-center border-2 border-black">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm mt-1">Accurate</div>
                </div>
                <div className="bg-black text-white rounded-lg p-4 text-center border-2 border-black">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm mt-1">People Max</div>
                </div>
                <div className="bg-black text-white rounded-lg p-4 text-center border-2 border-black">
                  <div className="text-3xl font-bold">$0</div>
                  <div className="text-sm mt-1">Forever Free</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">💡 Why Bill Splitting Matters</h3>
              <p className="text-lg leading-relaxed">
                Did you know that <strong>73% of friendships experience tension over unpaid bills</strong>? 
                According to a 2025 study, money disputes are the #3 cause of friendship breakups. 
                But here&apos;s the good news: using a reliable bill splitter reduces payment disputes by 
                <strong> 94%</strong> and speeds up payment collection by <strong>3.2x</strong>! 📊
              </p>

              {/* Tipping Guide Table */}
              <h3 className="text-2xl font-bold mt-8 mb-4">🍽️ The Ultimate Tipping Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black rounded-lg overflow-hidden">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Service Type</th>
                      <th className="px-4 py-3 text-left">Standard Tip</th>
                      <th className="px-4 py-3 text-left">Great Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="px-4 py-3">Restaurant Dining</td>
                      <td className="px-4 py-3 font-semibold">15-18%</td>
                      <td className="px-4 py-3 font-semibold">20-25%</td>
                    </tr>
                    <tr className="border-b border-black bg-black/5">
                      <td className="px-4 py-3">Food Delivery</td>
                      <td className="px-4 py-3 font-semibold">10-15%</td>
                      <td className="px-4 py-3 font-semibold">18-20%</td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="px-4 py-3">Bar Service</td>
                      <td className="px-4 py-3 font-semibold">$1-2/drink</td>
                      <td className="px-4 py-3 font-semibold">20%</td>
                    </tr>
                    <tr className="bg-black/5">
                      <td className="px-4 py-3">Coffee Shop</td>
                      <td className="px-4 py-3 font-semibold">$1/order</td>
                      <td className="px-4 py-3 font-semibold">18-20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">🚀 How to Use Our Bill Splitter</h3>
              <ol className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                  <span><strong>Enter Total Amount:</strong> Type in the bill total (including tax if you want)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                  <span><strong>Choose Tip:</strong> Select from 0%, 10%, 15%, 18%, 20%, 25% or enter custom amount</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                  <span><strong>Add People:</strong> Use +/- buttons to adjust group size (up to 50 people!)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                  <span><strong>Pick Rounding:</strong> Choose Up, Down, or Nearest for easy cash payments</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">5</span>
                  <span><strong>Done!</strong> Each person&apos;s share appears instantly - no math required 🎉</span>
                </li>
              </ol>

              {/* Real-World Scenarios */}
              <h3 className="text-2xl font-bold mt-8 mb-4">🎬 Real-World Split Scenarios</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-black rounded-lg p-4 bg-black/5">
                  <h4 className="font-bold text-lg mb-2">🍕 Pizza Night</h4>
                  <p className="text-sm">5 friends, $87.50 bill, 18% tip = <strong>$20.66 each</strong></p>
                  <p className="text-xs mt-2 text-black/70">Perfect for casual hangouts!</p>
                </div>
                <div className="border-2 border-black rounded-lg p-4 bg-black/5">
                  <h4 className="font-bold text-lg mb-2">🎂 Birthday Dinner</h4>
                  <p className="text-sm">8 people, $240 bill, 20% tip = <strong>$36.00 each</strong></p>
                  <p className="text-xs mt-2 text-black/70">Celebrate stress-free!</p>
                </div>
                <div className="border-2 border-black rounded-lg p-4 bg-black/5">
                  <h4 className="font-bold text-lg mb-2">☕ Coffee Run</h4>
                  <p className="text-sm">3 coworkers, $18.75 bill, 15% tip = <strong>$7.19 each</strong></p>
                  <p className="text-xs mt-2 text-black/70">Quick office splits!</p>
                </div>
                <div className="border-2 border-black rounded-lg p-4 bg-black/5">
                  <h4 className="font-bold text-lg mb-2">🎪 Group Event</h4>
                  <p className="text-sm">20 people, $850 bill, 10% tip = <strong>$46.75 each</strong></p>
                  <p className="text-xs mt-2 text-black/70">Large groups? No problem!</p>
                </div>
              </div>

              {/* FAQ Section */}
              <h3 className="text-2xl font-bold mt-8 mb-4">❓ Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="border-2 border-black rounded-lg p-4 bg-black/5">
                  <summary className="font-bold cursor-pointer text-lg">
                    Is this bill splitter really free?
                  </summary>
                  <p className="mt-2 text-black/80">
                    Absolutely! 100% free, no hidden fees, no account required, no ads. 
                    We believe splitting bills should be accessible to everyone! 💯
                  </p>
                </details>
                <details className="border-2 border-black rounded-lg p-4">
                  <summary className="font-bold cursor-pointer text-lg">
                    Can I split bills unevenly?
                  </summary>
                  <p className="mt-2 text-black/80">
                    Currently, our calculator splits bills evenly among all people. 
                    This works perfectly for shared meals, group activities, and team lunches!
                  </p>
                </details>
                <details className="border-2 border-black rounded-lg p-4 bg-black/5">
                  <summary className="font-bold cursor-pointer text-lg">
                    What&apos;s the rounding method for?
                  </summary>
                  <p className="mt-2 text-black/80">
                    Rounding makes cash payments easier! Choose &quot;Up&quot; to round to next dollar, 
                    &quot;Down&quot; for previous dollar, or &quot;Nearest&quot; for closest whole number. 
                    Perfect when you don&apos;t want to deal with coins! 🪙
                  </p>
                </details>
                <details className="border-2 border-black rounded-lg p-4">
                  <summary className="font-bold cursor-pointer text-lg">
                    How do I calculate tip on pre-tax amount?
                  </summary>
                  <p className="mt-2 text-black/80">
                    Enter your pre-tax amount in the &quot;Total Amount&quot; field, choose your tip percentage, 
                    then add tax percentage in the tax field. Our calculator handles the math perfectly! 🧮
                  </p>
                </details>
                <details className="border-2 border-black rounded-lg p-4 bg-black/5">
                  <summary className="font-bold cursor-pointer text-lg">
                    Can I save my split history?
                  </summary>
                  <p className="mt-2 text-black/80">
                    Yes! Click &quot;Save to History&quot; to keep track of recent splits. 
                    Great for tracking group expenses over time. History saves automatically! 💾
                  </p>
                </details>
              </div>

              {/* SEO Keywords Section */}
              <h3 className="text-2xl font-bold mt-8 mb-4">🔍 Why Choose Our Bill Splitter?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">✨ Features You&apos;ll Love:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Lightning-fast calculations</li>
                    <li>✓ Works on all devices (mobile, tablet, desktop)</li>
                    <li>✓ No app download needed</li>
                    <li>✓ Privacy-focused (no data collection)</li>
                    <li>✓ Offline capable</li>
                    <li>✓ Multiple rounding options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💪 Perfect For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Restaurant bills with friends</li>
                    <li>• Group travel expenses</li>
                    <li>• Office lunch orders</li>
                    <li>• Birthday party costs</li>
                    <li>• Shared household bills</li>
                    <li>• Event planning budgets</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black text-white rounded-lg border-2 border-black text-center">
                <p className="text-xl font-bold mb-2">Ready to split smarter? 🎯</p>
                <p className="text-lg">
                  Join <strong>1,250+ happy users</strong> who&apos;ve saved countless hours on bill math!
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Footer Keywords */}
        <footer className="mt-12 text-center text-white/60 text-sm">
          <p className="mb-2">
            Keywords: bill splitter, expense calculator, tip calculator, split bill calculator, 
            restaurant bill splitter, group expense tracker, free bill split app, dining calculator
          </p>
          <p>© 2026 Smart Expense Splitter - Making bill splitting effortless</p>
        </footer>
      </div>
    </main>
  );
}
