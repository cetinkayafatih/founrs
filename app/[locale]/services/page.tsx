import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/Button'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('services.hero')
  return {
    title: t('title'),
    description: t('description'),
  }
}

type TierKey = 'blueprint' | 'build' | 'partnership'
const tierKeys: TierKey[] = ['blueprint', 'build', 'partnership']

export default async function ServicesPage() {
  const t = await getTranslations('services')
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('offerings.title')}</h1>
              <p className="text-xl text-muted leading-relaxed">{t('offerings.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tierKeys.map((key, index) => (
                <div key={index} className="relative bg-border/5 border border-border/20 rounded-lg p-8 h-full">
                  {/* Optional badge could be localized if added to messages */}
                  {key === 'build' && (
                    <div className="absolute -top-3 left-8 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{t(`offerings.${key}.title`)}</h3>
                    <p className="text-sm text-primary mb-4">{t(`offerings.${key}.price`)}</p>
                    <p className="text-muted">{t(`offerings.${key}.description`)}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[0,1,2,3,4,5].map((i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-accent mr-3 mt-1">•</span>
                        {t(`offerings.${key}.features.${i}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-lg font-semibold mb-4">{t(`offerings.${key}.price`)}</p>
                    <Button className="w-full">{t('cta.cta')}</Button>
                  </div>
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