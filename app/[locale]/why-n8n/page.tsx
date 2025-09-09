import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

export const metadata: Metadata = {
  title: 'Why n8n',
  description:
    'An architect chooses the best materials. Here\'s why we build on n8n.',
}

const benefits = [
  {
    title: 'Flexibility',
    description:
      'Self-hosted, open-source foundation. No vendor lock-in, complete control over your data and infrastructure.',
    icon: '🔧',
  },
  {
    title: 'Open Ecosystem',
    description:
      '400+ integrations and growing. Custom nodes, JavaScript functions, and unlimited extensibility.',
    icon: '🔗',
  },
  {
    title: 'Cost Control',
    description:
      'Predictable pricing. Scale without execution limits. No per-task fees that grow with your success.',
    icon: '💰',
  },
  {
    title: 'Observability',
    description:
      'Built-in logging, monitoring, and debugging. Full visibility into every workflow execution.',
    icon: '👁️',
  },
]

export default function WhyN8nPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why n8n?
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                An architect chooses the best materials. Here's why we build on
                n8n instead of Zapier, Make, or custom solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-border/5 border border-border/20 rounded-lg p-8">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-12">
                Spaghetti Automations vs. Modular n8n
              </h2>
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-8 mb-4">
                      <h3 className="font-semibold text-warning mb-4">
                        Spaghetti Automations
                      </h3>
                      <div className="relative h-32">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 200 120"
                          fill="none"
                        >
                          <path
                            d="M20 60 Q60 20, 100 60 Q140 100, 180 60"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-warning/60"
                            fill="none"
                          />
                          <path
                            d="M20 40 Q80 80, 140 40 Q160 20, 180 40"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-warning/60"
                            fill="none"
                          />
                          <path
                            d="M20 80 Q70 40, 120 80 Q170 120, 180 80"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-warning/60"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <ul className="text-sm text-left space-y-2 mt-4">
                        <li>• Tangled dependencies</li>
                        <li>• Hard to debug</li>
                        <li>• Vendor lock-in</li>
                        <li>• Hidden costs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mb-4">
                      <h3 className="font-semibold text-accent mb-4">
                        Modular n8n
                      </h3>
                      <div className="relative h-32">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 200 120"
                          fill="none"
                        >
                          <rect
                            x="20"
                            y="40"
                            width="40"
                            height="20"
                            rx="4"
                            className="fill-accent/40"
                          />
                          <rect
                            x="80"
                            y="40"
                            width="40"
                            height="20"
                            rx="4"
                            className="fill-accent/40"
                          />
                          <rect
                            x="140"
                            y="40"
                            width="40"
                            height="20"
                            rx="4"
                            className="fill-accent/40"
                          />
                          <line
                            x1="60"
                            y1="50"
                            x2="80"
                            y2="50"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-accent"
                          />
                          <line
                            x1="120"
                            y1="50"
                            x2="140"
                            y2="50"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-accent"
                          />
                        </svg>
                      </div>
                      <ul className="text-sm text-left space-y-2 mt-4">
                        <li>• Clean architecture</li>
                        <li>• Easy to maintain</li>
                        <li>• Full control</li>
                        <li>• Transparent costs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}