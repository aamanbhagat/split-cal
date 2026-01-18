import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Optimize font loading with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
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
    url: 'https://yourdomain.com',
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
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS is in globals.css and inlined by Next.js */}
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Viewport for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
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
      </body>
    </html>
  );
}
