import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/Button'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pricing.hero')
  return {
    title: t('title'),
    description: t('description'),
  }
}

const tierKeys = ['blueprint','build','partnership'] as const

export default async function PricingPage() {
  const t = await getTranslations('pricing')
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('hero.title')}</h1>
              <p className="text-xl text-muted leading-relaxed">{t('hero.description')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tierKeys.map((key, index) => (
                <div key={index} className="relative bg-border/5 border border-border/20 rounded-lg p-8 h-full">
                  {key === 'build' && (
                    <div className="absolute -top-3 left-8 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">{t(`packages.${key}.name`)}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold font-mono">{t(`packages.${key}.price`)}</span>
                    </div>
                    <p className="text-sm text-muted mb-4">{t(`packages.${key}.duration`)}</p>
                    <p className="text-muted">{t(`packages.${key}.description`)}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[0,1,2,3,4].map((i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-accent mr-3 mt-1">✓</span>
                        {t(`packages.${key}.features.${i}`)}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full mt-auto" 
                    variant={key === 'build' ? 'primary' : 'outline'}
                  >
                    {t('cta.cta')}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-border/5 rounded-lg text-center max-w-4xl mx-auto">
              <p className="text-muted">{t('cta.subtitle')}</p>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}