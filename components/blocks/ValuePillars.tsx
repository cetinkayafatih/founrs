import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/Container'

const pillars = [
  {
    icon: '📐',
    titleKey: 'architecture.title',
    descriptionKey: 'architecture.description',
  },
  {
    icon: '👁️',
    titleKey: 'reliability.title',
    descriptionKey: 'reliability.description',
  },
  {
    icon: '💰',
    titleKey: 'integration.title',
    descriptionKey: 'integration.description',
  },
]

export async function ValuePillars() {
  const t = await getTranslations('home.pillars')
  return (
    <section className="py-20 bg-bg">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('title')}</h2>
          <p className="text-xl text-muted">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{t(`items.${pillar.titleKey}`)}</h3>
              <p className="text-muted leading-relaxed">{t(`items.${pillar.descriptionKey}`)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}