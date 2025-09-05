# Couplr Automation - Premium Marketing Website

Modern, production-ready marketing website for Couplr Automation - a digital automation agency.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** with custom design system
- **shadcn/ui** components with premium styling
- **Framer Motion** animations and micro-interactions
- **Internationalization** (Turkish/English) with next-intl
- **MDX Blog & Case Studies** with Contentlayer
- **Contact Forms** with Server Actions and Resend
- **SEO Optimized** with structured data and sitemaps
- **Responsive Design** with mobile-first approach
- **Dark Theme** with premium color palette
- **Performance Optimized** for Lighthouse scores ≥ 95

## 🎨 Design System

### Colors
- **Base**: Onyx (#0B0F1A), Slate-900 (#0F172A), Gray-900 (#111827)
- **Text**: Gray-200 (#E5E7EB)
- **Accents**: Electric Blue (#4F8CFF), Royal Violet (#7C3AED), Mint (#34D399)
- **Gradients**: Electric Blue to Violet on CTAs

### Typography
- **Primary**: Inter (self-hosted via next/font)
- **Display**: Sora (headings and display text)

## 📁 Project Structure

```
couplr/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalized routes
│   │   ├── page.tsx             # Homepage
│   │   ├── pricing/             # Pricing page
│   │   ├── contact/             # Contact page
│   │   ├── blog/                # Blog pages
│   │   └── case-studies/        # Case studies
│   ├── api/                     # API routes
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── sections/                # Page sections
│   └── illustrations/           # SVG illustrations
├── content/                     # MDX content
│   ├── blog/                    # Blog posts
│   └── case-studies/            # Case studies
├── lib/                         # Utilities
│   ├── actions.ts               # Server actions
│   ├── validations.ts           # Form schemas
│   ├── seo.ts                   # SEO helpers
│   └── utils.ts                 # General utilities
├── locales/                     # Translations
│   ├── tr/common.json           # Turkish translations
│   └── en/common.json           # English translations
├── public/                      # Static assets
└── styles/                      # CSS files
```

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### 1. Clone and Install
```bash
git clone <repository-url>
cd couplr
pnpm install
```

### 2. Environment Variables
Copy the environment template:
```bash
cp env.example .env.local
```

Configure your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://couplrautomation.com
RESEND_API_KEY=re_xxxxxxxxxx
CONTACT_TO_EMAIL=hi@couplrautomation.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+905555555555
```

### 3. Development
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding Blog Posts

Create a new MDX file in `content/blog/`:

```mdx
---
title: "Your Blog Post Title"
date: "2024-01-15"
description: "Post description for SEO"
author: "Author Name"
tags: ["tag1", "tag2"]
locale: "tr"
---

Your markdown content here...
```

### Adding Case Studies

Create a new MDX file in `content/case-studies/`:

```mdx
---
title: "Case Study Title"
date: "2024-01-10"
description: "Case study description"
client: "Client Name"
industry: "Industry"
challenge: "Main challenge"
solution: "Solution provided"
results: ["Result 1", "Result 2"]
locale: "tr"
---

Your case study content...
```

## 🌐 Internationalization

### Adding New Translations

1. Add translations to `locales/tr/common.json` and `locales/en/common.json`
2. Use the `useTranslations` hook in components:

```tsx
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations();
  return <h1>{t('hero.title')}</h1>;
}
```

### Adding New Locales

1. Update `lib/i18n.ts` with new locale
2. Create new translation files
3. Update middleware configuration

## 📧 Forms & Email

Contact forms use Server Actions with Resend for email delivery.

### Form Validation
- Zod schemas in `lib/validations.ts`
- Client and server-side validation
- Error handling with user feedback

### Email Templates
- HTML email templates in `lib/actions.ts`
- Responsive design
- Branding consistent with website

## 🔍 SEO & Performance

### SEO Features
- Dynamic meta tags and Open Graph
- Structured data (JSON-LD)
- XML sitemaps
- robots.txt
- Canonical URLs
- Multi-language support

### Performance Optimizations
- Next.js Image optimization
- Font optimization with next/font
- Code splitting
- Lazy loading
- Minimal JavaScript bundle

## 🎨 Styling & Components

### Custom Components
- Consistent design system
- Reusable UI components
- Animation-ready with Framer Motion
- Accessibility-first approach

### Animations
- Scroll-triggered animations
- Hover effects
- Page transitions
- Loading states

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint system: sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Progressive enhancement

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Build for Production
```bash
pnpm build
pnpm start
```

### Environment Variables for Production
- `NEXT_PUBLIC_SITE_URL`: Your production domain
- `RESEND_API_KEY`: Resend API key for emails
- `CONTACT_TO_EMAIL`: Email to receive contact forms

## 🧪 Development Commands

```bash
# Development server
pnpm dev

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Build for production
pnpm build

# Start production server
pnpm start

# Generate sitemap
pnpm postbuild
```

## 📊 Analytics & Monitoring

### Vercel Analytics
- Automatic page views tracking
- Performance monitoring
- Error tracking

### Google Analytics (Optional)
Add your GA4 tracking ID to the layout component.

## 🔧 Customization

### Brand Colors
Update colors in `tailwind.config.js` and CSS custom properties in `globals.css`.

### Typography
Modify font imports in `app/layout.tsx` and update CSS variables.

### Components
All components are in `components/` directory with consistent naming and structure.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For technical support or questions:
- Email: hi@couplrautomation.com
- Website: [couplrautomation.com](https://couplrautomation.com)

---

**Built with ❤️ by Couplr Automation Team**
