# FOUNRS i18n QA Checklist

## 🌐 Manual Testing Checklist

### Core Navigation & Language Switching
- [ ] Visit `/en` → Navigation shows "Home, Services, Why n8n, Case Studies, Pricing, About"
- [ ] Visit `/tr` → Navigation shows "Ana Sayfa, Hizmetler, Neden n8n, Vaka Çalışmaları, Fiyatlandırma, Hakkında"
- [ ] Click EN/TR toggle preserves current route (/en/services ↔ /tr/services)
- [ ] Active navigation link has aria-current="page" and visual underline
- [ ] Language toggle shows current locale as active (highlighted)

### URL Structure & Routing
- [ ] Default `/` redirects to `/en`
- [ ] All site pages accessible under both `/en/*` and `/tr/*`
- [ ] Landing pages remain at `/l/smmm-suite` (no locale prefix)
- [ ] Invalid locales (e.g., `/fr`) return 404

### Landing Page Locale Detection
- [ ] `/l/smmm-suite` shows English by default
- [ ] `/l/smmm-suite?lang=tr` shows Turkish content
- [ ] Cookie `NEXT_LOCALE=tr` makes `/l/smmm-suite` show Turkish
- [ ] Query param overrides cookie preference
- [ ] Language toggle in header works and updates content

### Content Localization
- [ ] **English pages**: All CTAs show "Book Call", hero text in English
- [ ] **Turkish pages**: All CTAs show "Görüşme Planla", hero text in Turkish  
- [ ] **SMMM Suite TR**: "Ön-Muhasebe Otomasyonu", "Topla/Kontrol Et/İzle"
- [ ] **Pricing tiers**: Core shows "En Popüler" in Turkish vs "Most Popular" in English
- [ ] **Form labels**: "Ad", "E-posta", "Şirket" in Turkish vs "Name", "Email", "Company" in English

### SEO & Meta Tags
- [ ] `<html lang="en">` on English pages, `<html lang="tr">` on Turkish pages
- [ ] Title shows "FOUNRS — AI Sistemler & Operasyonlar" in Turkish
- [ ] Description localized for each language
- [ ] Hreflang alternates present: `<link rel="alternate" hreflang="en" href="/en" />`
- [ ] Canonical URLs point to current locale: `/en` vs `/tr`
- [ ] Open Graph locale: `en_US` vs `tr_TR`

### Accessibility
- [ ] `prefers-reduced-motion: reduce` skips count-up animations in metrics
- [ ] Tooltip components have proper `aria-describedby`
- [ ] Screen readers announce language changes
- [ ] Lighthouse Accessibility score ≥ 90 for both locales

### Technical Validation
- [ ] `/sitemap.xml` contains both `/en/*` and `/tr/*` URLs
- [ ] `/robots.txt` allows both locales and landing pages
- [ ] Build completes without TypeScript errors
- [ ] No console errors on page load
- [ ] No hydration mismatches

## 🔧 Automated Tests

### Playwright Tests (run: `npm run test:e2e`)
- [ ] Navigation text switches between locales
- [ ] Language toggle preserves path
- [ ] HTML lang attribute updates correctly  
- [ ] SMMM Suite responds to lang query param
- [ ] Hreflang links present in head

### Build Verification
```bash
# Install dependencies
npm install

# Build project
npm run build

# Run verification script  
node scripts/verify-sitemap.js

# Run Playwright tests
npm run test:e2e
```

## 🚨 Known Issues & Notes

### Limitations
- Landing pages (`/l/*`) don't use next-intl provider (by design)
- Cookie/query param detection is client-side only
- Form validation messages still in English (zod schema)

### Performance Considerations  
- Message loading is async on landing pages (shows loading spinner)
- Language toggle requires client-side JavaScript
- All translations loaded on page (no lazy loading)

## ✅ Acceptance Criteria Met

- [x] Visiting `/en` vs `/tr` swaps copy everywhere (nav, hero, sections, footer)
- [x] EN/TR toggle preserves route and query parameters  
- [x] Hreflang and sitemap include both locales
- [x] `/l/smmm-suite?lang=tr` shows full Turkish copy; route remains `/l/smmm-suite`
- [x] No build errors; ready for Lighthouse Accessibility ≥ 90 testing
- [x] Title template uses "%s — FOUNRS" format

## 🎯 Final Testing Commands

```bash
# Development server
npm run dev

# Test pages manually:
# http://localhost:3000/en
# http://localhost:3000/tr  
# http://localhost:3000/en/services
# http://localhost:3000/tr/services
# http://localhost:3000/l/smmm-suite
# http://localhost:3000/l/smmm-suite?lang=tr

# Production build test
npm run build
npm run start

# Verify sitemap
# http://localhost:3000/sitemap.xml
```