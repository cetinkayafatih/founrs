'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'

import { Container } from '@/components/layout/Container'
import { LanguageToggle } from '@/components/site/LanguageToggle'
import { type Locale } from '@/i18n/routing'
import { cn } from '@/lib/cn'

const navigation = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'why', href: '/why-n8n' },
  { key: 'cases', href: '/case-studies' },
  { key: 'pricing', href: '/pricing' },
  { key: 'about', href: '/about' },
]

export function SiteHeader() {
  const t = useTranslations('common')
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/20 header-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-display font-bold text-xl">
              {t('brand')}
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const localizedHref = `/${locale}${item.href}`
              const isActive = pathname === localizedHref
              return (
                <Link
                  key={item.key}
                  href={localizedHref}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'text-sm font-medium transition-all hover:-translate-y-0.5 relative',
                    isActive 
                      ? 'text-fg opacity-100' 
                      : 'text-muted opacity-70 hover:text-primary hover:opacity-100',
                    isActive && 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                  )}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
              <LanguageToggle />
            </div>
            <Link
              href={`/${locale}/book-call`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-white hover:bg-primary/90 h-9 px-3"
            >
              {t('cta.bookCall')}
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4 mb-4">
              {navigation.map((item) => {
                const localizedHref = `/${locale}${item.href}`
                const isActive = pathname === localizedHref
                return (
                  <Link
                    key={item.key}
                    href={localizedHref}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'text-sm font-medium transition-colors relative',
                      isActive 
                        ? 'text-fg opacity-100' 
                        : 'text-muted opacity-70',
                      isActive && 'pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-primary before:rounded-full'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                )
              })}
            </nav>
            <div className="flex justify-center">
              <LanguageToggle />
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}