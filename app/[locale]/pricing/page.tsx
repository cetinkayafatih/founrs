import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for automation services. Blueprint, Build, and Partnership options.',
}

const pricingTiers = [
  {
    name: 'Blueprint',
    price: '$1.5k–$2.5k',
    subtitle: 'typical',
    description: '5-day strategic automation roadmap',
    features: [
      'Complete process audit',
      'ICE opportunity matrix',
      'ROI calculations',
      '3-phase roadmap',
      'Sample implementation outline',
    ],
    cta: 'Start Blueprint',
  },
  {
    name: 'Build',
    price: '$3.5k–$7.5k',
    subtitle: 'project-based',
    description: '1-3 core workflows with monitoring',
    features: [
      'Production-ready workflows',
      'Built-in logging & alerts',
      'Error handling',
      'Documentation & handover',
      '30-day support',
    ],
    cta: 'Start Build',
    popular: true,
  },
  {
    name: 'Partnership',
    price: '$1k–$3k/mo',
    subtitle: 'ongoing',
    description: 'Monthly strategy & optimization',
    features: [
      'Monthly strategy sessions',
      'Continuous optimization',
      'Priority support',
      'Team training',
      'Quarterly roadmap reviews',
    ],
    cta: 'Schedule Call',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                Choose the engagement that fits your needs. No hidden fees, no
                surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="relative bg-border/5 border border-border/20 rounded-lg p-8 h-full">
                  {tier.popular && (
                    <div className="absolute -top-3 left-8 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold font-mono">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted mb-4">{tier.subtitle}</p>
                    <p className="text-muted">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm"
                      >
                        <span className="text-accent mr-3 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full mt-auto" 
                    variant={tier.popular ? 'primary' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-border/5 rounded-lg text-center max-w-4xl mx-auto">
              <p className="text-muted">
                <span className="text-accent font-medium">30% Credit:</span>{' '}
                Start a Build within 30 days and get 30% credit from the
                Blueprint fee.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}