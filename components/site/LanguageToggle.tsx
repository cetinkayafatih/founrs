'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { locales, type Locale } from '@/i18n/routing'
import { cn } from '@/lib/cn'

export function LanguageToggle() {
  const t = useTranslations('common')
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return

    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    const newPath = `/${newLocale}${pathWithoutLocale}`
    
    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-0 bg-border/10 rounded-full p-1">
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLocale(lang)}
          aria-current={locale === lang ? 'true' : undefined}
          className={cn(
            'px-3 py-1 text-xs rounded-full transition-all duration-200 font-medium',
            locale === lang
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted hover:text-fg hover:bg-border/20'
          )}
        >
          {t(`lang.${lang}`)}
        </button>
      ))}
    </div>
  )
}