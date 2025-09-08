# FOUNRS — AI Systems & Ops

A production-ready Next.js 14 website with TypeScript, Tailwind CSS, and architect's studio aesthetic.

## Features

- 🏗️ **Architect's Studio Design** - Clean, engineered aesthetic with subtle blueprint grids
- ⚡ **Next.js 14** - App Router, TypeScript, server components
- 🎨 **Tailwind CSS** - Custom design tokens, responsive design
- 🌐 **Bilingual Ready** - EN/TR scaffolding (EN content implemented)
- 📱 **Mobile-First** - Responsive across all devices
- ♿ **Accessible** - WCAG AA compliant, proper focus management
- 🚀 **Performance** - Optimized fonts, images, and animations
- 🔒 **Secure** - Security headers, CSP, proper validation
- 🎯 **SEO Optimized** - Sitemap, robots.txt, Open Graph tags

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter, Space Grotesk, JetBrains Mono (via next/font)
- **Validation**: Zod
- **Code Quality**: ESLint, Prettier, Husky
- **Animations**: CSS transforms/opacity (respects prefers-reduced-motion)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd founrs-web
   npm install
   ```

2. **Set up environment variables (optional):**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

### Build Commands

```bash
# Development
npm run dev          # Start dev server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
```

## Project Structure

```
/
├─ app/                 # Next.js App Router
│  ├─ (site)/          # Main site pages
│  │  ├─ page.tsx      # Homepage
│  │  ├─ services/     # Services page
│  │  ├─ pricing/      # Pricing page
│  │  └─ ...           # Other pages
│  ├─ l/               # Landing pages
│  │  └─ smmm-suite/   # Product landing
│  ├─ layout.tsx       # Root layout
│  ├─ globals.css      # Global styles
│  ├─ sitemap.ts       # Dynamic sitemap
│  └─ robots.txt       # SEO directives
├─ components/
│  ├─ blocks/          # Page sections
│  ├─ layout/          # Layout components
│  ├─ site/            # Site-wide components
│  └─ ui/              # Reusable UI components
├─ lib/                # Utilities
└─ public/assets/      # Static assets
```

## Pages

- **`/`** - Homepage with hero, value pillars, process timeline, metrics, testimonials
- **`/services`** - 3 productized services (Blueprint, Build, Partnership)  
- **`/why-n8n`** - Platform comparison with visual diagrams
- **`/case-studies`** - Client success stories with metrics
- **`/pricing`** - Transparent pricing with credit offers
- **`/about`** - Company manifesto and approach
- **`/book-call`** - Contact form with Cal.com integration
- **`/l/smmm-suite`** - Product landing page (conversion optimized)

## Design System

### Colors
- **Background**: `#0E0F12` (Dark charcoal)
- **Foreground**: `#EDEFF5` (Light gray)
- **Primary**: `#5B8CFF` (Blue)
- **Accent**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Orange)

### Typography
- **Body**: Inter (next/font optimized)
- **Headlines**: Space Grotesk
- **Monospace**: JetBrains Mono

### Motion
- **Duration**: 120-200ms for micro-interactions, ≤800ms for complex animations
- **Easing**: `ease-out` for entrances, `ease-in-out` for continuous
- **Respect**: `prefers-reduced-motion: reduce`

## Development Notes

### Code Quality
- **ESLint**: Strict TypeScript rules, import ordering, accessibility checks
- **Prettier**: Consistent formatting with single quotes, no semicolons
- **Husky**: Pre-commit hooks for linting and formatting
- **TypeScript**: Strict mode enabled, no `any` types

### Performance
- **Fonts**: Self-hosted via next/font (no external requests)
- **Images**: next/image with WebP/AVIF support
- **Animations**: GPU-accelerated transforms/opacity only
- **Bundle**: Optimized imports, tree-shaking enabled

### Accessibility
- **WCAG AA**: Color contrast, focus management
- **Keyboard**: Full keyboard navigation support  
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Motion**: Respects user motion preferences

### Security
- **Headers**: X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Validation**: Zod schemas for all forms
- **CSP**: Content Security Policy headers
- **No Secrets**: No API keys or sensitive data in client code

## Deployment

### Vercel (Recommended)
```bash
# Connect your repository to Vercel
vercel --prod
```

### Docker
```bash
# Build image
docker build -t founrs-web .

# Run container
docker run -p 3000:3000 founrs-web
```

### Static Export
```bash
# For static hosting (GitHub Pages, etc.)
npm run build
npm run export
```

## Environment Variables

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxx

# External Services (optional)
NEXT_PUBLIC_CAL_LINK=https://cal.com/your-username
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and test: `npm run type-check && npm run lint`
4. Commit with conventional commits: `git commit -m "feat: add new feature"`
5. Push and create a pull request

## License

Private - All rights reserved.

---

Built with ❤️ for the future of automation.