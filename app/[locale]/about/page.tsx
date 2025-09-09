import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

export const metadata: Metadata = {
  title: 'About',
  description: 'Not a fixer. An architect. Learn about our approach to automation.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
                Not a fixer. An architect.
              </h1>
              
              <div className="prose prose-lg mx-auto">
                <p className="text-xl leading-relaxed text-muted mb-8">
                  Most automation agencies sell you quick fixes and simple
                  workflows. We build foundations that scale.
                </p>
                
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
                
                <h2 className="text-2xl font-semibold mb-6 text-fg">
                  Our Approach
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12 not-prose">
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Strategy First</h3>
                    <p className="text-muted text-sm">
                      We don't jump into building. Every project starts with
                      understanding your business, mapping processes, and
                      identifying the highest-ROI opportunities.
                    </p>
                  </div>
                  
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Built to Last</h3>
                    <p className="text-muted text-sm">
                      Our automations are designed for scale. Clean architecture,
                      proper error handling, and comprehensive documentation
                      mean they work today and tomorrow.
                    </p>
                  </div>
                  
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Full Visibility</h3>
                    <p className="text-muted text-sm">
                      Every workflow includes logging and monitoring. You'll
                      know exactly how your automations are performing and
                      where to optimize next.
                    </p>
                  </div>
                  
                  <div className="bg-border/5 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Your Success</h3>
                    <p className="text-muted text-sm">
                      We measure success in hours saved, errors reduced, and
                      growth enabled. Our job is to make your operations so
                      smooth they become invisible.
                    </p>
                  </div>
                </div>
                
                <p className="leading-relaxed text-fg">
                  Founded on the belief that great automation should be
                  strategic, not tactical. We're here to build the intelligent
                  foundations that power your growth.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}