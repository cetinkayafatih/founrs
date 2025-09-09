import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about.hero')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations('about')
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">{t('hero.title')}</h1>
              
              <div className="prose prose-lg mx-auto">
                <p className="text-xl leading-relaxed text-muted mb-8">{t('hero.description')}</p>
                
                <p className="leading-relaxed mb-8 text-fg">
                  Like an architect designing a building, we start with the
                  blueprint. We map your processes, identify the highest-impact
                  opportunities, and design systems that grow with your business.
                </p>
                
                <p className="leading-relaxed mb-8 text-fg">
                  Every automation we build includes observability from day one.
                  Logging, monitoring, error handling—not as an afterthought,
                  but as core architectural decisions. Because what you can't
                  see, you can't improve.
                </p>
                
                <h2 className="text-2xl font-semibold mb-6 text-fg">{t('approach.title')}</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12 not-prose">
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">{t('approach.principles.0.title')}</h3>
                    <p className="text-muted text-sm">{t('approach.principles.0.description')}</p>
                  </div>
                  
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">{t('approach.principles.1.title')}</h3>
                    <p className="text-muted text-sm">{t('approach.principles.1.description')}</p>
                  </div>
                  
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">{t('approach.principles.2.title')}</h3>
                    <p className="text-muted text-sm">{t('approach.principles.2.description')}</p>
                  </div>
                  
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">{t('story.title')}</h3>
                    <p className="text-muted text-sm">{t('story.content')}</p>
                  </div>
                </div>
                
                <p className="leading-relaxed text-fg">{t('cta.subtitle')}</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}