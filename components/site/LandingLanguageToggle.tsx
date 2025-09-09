'use client'

import Cookies from 'js-cookie'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { cn } from '@/lib/cn'

type Locale = 'en' | 'tr'

interface LandingLanguageToggleProps {
  onChange?: (locale: Locale) => void
}

export function LandingLanguageToggle({ onChange }: LandingLanguageToggleProps) {
  const [locale, setLocale] = useState<Locale>('en')
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Priority: query param > cookie > default 'en'
    const queryLang = searchParams.get('lang') as Locale
    const cookieLang = Cookies.get('NEXT_LOCALE') as Locale
    const detectedLocale = queryLang || cookieLang || 'en'
    
    setLocale(detectedLocale)
    onChange?.(detectedLocale)
  }, [searchParams, onChange])

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return

    setLocale(newLocale)
    Cookies.set('NEXT_LOCALE', newLocale, { expires: 365 })
    
    // Update URL with new lang param
    const params = new URLSearchParams(searchParams)
    params.set('lang', newLocale)
    router.push(`${pathname}?${params.toString()}`)
    
    onChange?.(newLocale)
  }

  return (
    <div className="flex items-center space-x-0 bg-border/10 rounded-full p-1">
      {(['en', 'tr'] as const).map((lang) => (
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
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}