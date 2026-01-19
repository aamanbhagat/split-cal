import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://split-cal.vercel.app'),
  title: {
    default: 'Smart Expense Splitter - Split Bills & Calculate Tips Instantly',
    template: '%s | Smart Expense Splitter',
  },
  description:
    'Free online expense splitter calculator. Instantly split bills, calculate tips, and share costs among friends. Fast, accurate, and mobile-friendly.',
  keywords: [
    'expense splitter',
    'bill splitter',
    'tip calculator',
    'split costs',
    'group expenses',
    'cost sharing',
    'bill calculator',
    'split bill',
    'calculate tip',
    'expense calculator',
  ],
  authors: [{ name: 'Smart Expense Splitter' }],
  creator: 'Smart Expense Splitter',
  publisher: 'Smart Expense Splitter',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://split-cal.vercel.app',
    title: 'Smart Expense Splitter - Split Bills Instantly',
    description:
      'Free online expense splitter. Calculate tips, split bills, and share costs easily.',
    siteName: 'Smart Expense Splitter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Expense Splitter',
    description: 'Split bills and calculate tips instantly',
    creator: '@yourusername',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://vercel.live" />
        {/* Ad Script */}
        <script src="https://quge5.com/88/tag.min.js" data-zone="203207" async data-cfasync="false"></script>
      </head>
      <body className="min-h-screen bg-black font-sans antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-white text-sm">
          <p>© {new Date().getFullYear()} Smart Expense Splitter. Free forever.</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
