import type { MetadataRoute } from 'next'

import { locales } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://founrs.com'
  
  // Site pages that need localization
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/why-n8n', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/book-call', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate localized URLs for each page
  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    })
  })

  // Add landing pages (no locale)
  sitemap.push({
    url: `${baseUrl}/l/smmm-suite`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  return sitemap
}