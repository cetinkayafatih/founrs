import { type Locale } from './routing'

export default async function getMessages(locale: Locale) {
  const messages = {
    common: (await import(`../messages/${locale}/common.json`)).default,
    home: (await import(`../messages/${locale}/home.json`)).default,
    services: (await import(`../messages/${locale}/services.json`)).default,
    why: (await import(`../messages/${locale}/why.json`)).default,
    cases: (await import(`../messages/${locale}/cases.json`)).default,
    pricing: (await import(`../messages/${locale}/pricing.json`)).default,
    about: (await import(`../messages/${locale}/about.json`)).default,
    book: (await import(`../messages/${locale}/book.json`)).default,
    landing: (await import(`../messages/${locale}/landing.json`)).default,
  }
  
  return messages
}