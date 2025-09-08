import type { Metadata } from 'next'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real results from real clients. See how we\'ve helped companies automate and scale.',
}

const caseStudies = [
  {
    title: 'E-commerce Order Processing',
    client: 'TechRetail Co.',
    industry: 'E-commerce',
    problem: 'Manual order processing, inventory sync issues, delayed fulfillment',
    solution: 'Automated order-to-fulfillment pipeline with Shopify, WMS, and shipping carrier integrations',
    results: {
      timeSaved: '25 hours/week',
      errorReduction: '87%',
      processingTime: '15min → 2min',
    },
    videoThumb: '/placeholder-video-1.jpg',
  },
  {
    title: 'Lead Qualification & CRM Sync',
    client: 'GrowthLabs',
    industry: 'SaaS',
    problem: 'Leads scattered across platforms, manual qualification, sales team inefficiency',
    solution: 'Multi-source lead aggregation with AI scoring and CRM automation',
    results: {
      timeSaved: '18 hours/week',
      conversionRate: '+34%',
      leadResponse: '2 hours → 5min',
    },
    videoThumb: '/placeholder-video-2.jpg',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                Real results from real clients. See how we've helped companies
                automate their operations and scale efficiently.
              </p>
            </div>

            <div className="grid gap-12 max-w-4xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-border/5 border border-border/20 rounded-lg p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          {study.industry}
                        </span>
                        <span className="text-sm text-muted">{study.client}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-warning mb-2">Problem</h4>
                          <p className="text-sm text-muted">{study.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-primary mb-2">Solution</h4>
                          <p className="text-sm text-muted">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="aspect-video bg-border/10 rounded-lg mb-6 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-primary">▶</span>
                          </div>
                          <p className="text-xs text-muted">30s overview</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(study.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="font-mono font-bold text-accent">
                              {value}
                            </div>
                            <div className="text-xs text-muted capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button size="lg">
                See More Case Studies
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}