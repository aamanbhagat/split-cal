# Smart Expense Splitter

A production-grade expense splitting calculator built with Next.js 14+ and optimized for perfect 100/100 Lighthouse scores.

## Features

- ✨ Instant bill splitting for groups (1-50 people)
- 💰 Built-in tip calculator with quick presets
- 📊 Tax inclusion for accurate totals
- 🔄 Flexible rounding options
- 👥 Individual person breakdown
- 📱 Mobile-first responsive design
- ⚡ Perfect Core Web Vitals scores
- ♿ WCAG 2.1 AAA accessibility compliant
- 🎯 SEO optimized with structured data
- 🚀 PWA ready

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3+
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Performance Optimization

This app is built with extreme performance optimization:

- **LCP < 1.2s:** Server-side rendering, font optimization, preloading
- **FID/INP < 100ms:** Minimal JavaScript, code splitting, debounced inputs
- **CLS = 0:** Explicit dimensions, no layout shifts
- **Bundle Size:** < 100KB total JavaScript (gzipped)

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
npm start
```

### Run Lighthouse Test

```bash
npm run build
npm start
# In another terminal or use Chrome DevTools Lighthouse
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (Server Component)
│   ├── globals.css         # Critical CSS
│   └── components/
│       ├── ExpenseCalculator.tsx  # Main calculator (Client)
│       ├── TipSelector.tsx        # Tip selection (Client)
│       ├── ResultDisplay.tsx      # Results display
│       └── SplitHistory.tsx       # History list (Client)
├── lib/
│   ├── calculations.ts     # Pure calculation functions
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript interfaces
├── public/
│   └── manifest.json      # PWA manifest
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Core Web Vitals Optimization

### LCP (Largest Contentful Paint)
- Server-side rendering for initial view
- Next.js font optimization with `next/font/google`
- Preloading critical resources
- Inline critical CSS

### FID/INP (First Input Delay / Interaction to Next Paint)
- Minimal client-side JavaScript
- Debounced input handlers (300ms)
- React.memo for expensive components
- Code splitting with dynamic imports

### CLS (Cumulative Layout Shift)
- Explicit width/height for all elements
- Reserved space for dynamic content
- CSS transforms for animations (not top/left)
- No content shifts after load

## SEO Features

- Comprehensive metadata configuration
- JSON-LD structured data (WebApplication schema)
- Semantic HTML structure
- Open Graph and Twitter Card support
- Sitemap and robots.txt ready
- Mobile-friendly and responsive

## Accessibility

- WCAG 2.1 AAA compliance
- Keyboard navigation support
- Screen reader optimized
- High contrast color ratios (≥7:1)
- Focus visible styles
- ARIA labels and live regions
- Touch targets ≥48x48px
- Prefers-reduced-motion support

## License

MIT

## Deployment

Deploy on Vercel for optimal performance:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Contributing

Contributions are welcome! Please follow best practices for performance and accessibility.

---

Built with ❤️ for perfect Lighthouse scores
