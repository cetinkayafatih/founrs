import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Productized automation services: Blueprint & ROI Map, Foundational Build, Strategic Partnership',
}

const services = [
  {
    title: 'Automation Blueprint & ROI Map',
    duration: '5-day strategic engagement',
    description:
      'Process maps, opportunity matrix (ICE), ROI tables, 3-phase roadmap.',
    features: [
      'Complete process audit & mapping',
      'ICE opportunity matrix',
      'ROI calculations & projections',
      '3-phase implementation roadmap',
      'Sample outline included',
    ],
    price: 'From $1.5k',
    cta: 'View sample outline →',
  },
  {
    title: 'Foundational Build',
    duration: '1–3 highest-impact workflows',
    description: 'Logging/alerts built-in. Production-ready automation.',
    features: [
      '1-3 core workflow implementations',
      'Built-in logging & monitoring',
      'Error handling & alerts',
      'Documentation & handover',
      '30-day support included',
    ],
    price: 'Projects start from $3.5k+',
    badge: 'Most Popular',
    cta: 'Start your build',
  },
  {
    title: 'Strategic Automation Partnership',
    duration: 'Ongoing monthly strategy',
    description: 'Continuous improvement & strategic guidance.',
    features: [
      'Monthly strategy sessions',
      'Continuous optimization',
      'Priority support',
      'Team training & enablement',
      'Quarterly roadmap reviews',
    ],
    price: '$1k–$3k/mo',
    cta: 'Schedule consultation',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Productized Services
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                Choose the right engagement model for your automation needs.
                From strategic planning to full implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="relative bg-border/5 border border-border/20 rounded-lg p-8 h-full">
                  {service.badge && (
                    <div className="absolute -top-3 left-8 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {service.badge}
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary mb-4">
                      {service.duration}
                    </p>
                    <p className="text-muted">{service.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm"
                      >
                        <span className="text-accent mr-3 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-lg font-semibold mb-4">{service.price}</p>
                    <Button className="w-full">{service.cta}</Button>
                  </div>
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