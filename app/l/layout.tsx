'use client'

import Cookies from 'js-cookie'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

import { Container } from '@/components/layout/Container'
import { LandingLanguageToggle } from '@/components/site/LandingLanguageToggle'
import { Button } from '@/components/ui/Button'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [locale, setLocale] = useState<'en' | 'tr'>('en')
  
  const getCtaText = () => {
    if (pathname.includes('smmm-suite')) {
      return locale === 'tr' 
        ? 'Ücretsiz 2 dakika demo hazırla →'
        : 'Prepare my free 2-min demo →'
    }
    return locale === 'tr' ? 'Başlayın →' : 'Get Started →'
  }

  const handleCtaClick = () => {
    if (pathname.includes('smmm-suite')) {
      // Trigger the modal on SMMM Suite page
      const event = new CustomEvent('openDemoModal')
      window.dispatchEvent(event)
    }
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/20 bg-bg/95 backdrop-blur-sm">
        <Container>
          <div className="h-16 flex items-center justify-between">
            <div className="font-display font-bold text-lg">FOUNRS</div>
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex">
                <LandingLanguageToggle onChange={setLocale} />
              </div>
              <Button size="sm" className="hidden sm:flex">
                {locale === 'tr' ? 'Görüşme Planla' : 'Book Call'}
              </Button>
            </div>
          </div>
        </Container>
      </header>
      
      {children}
      
      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-bg border-t border-border/20 p-3">
        <Button 
          className="w-full"
          onClick={handleCtaClick}
        >
          {getCtaText()}
        </Button>
      </div>
    </div>
  )
}