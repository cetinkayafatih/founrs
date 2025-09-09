import { CtaBand } from '@/components/blocks/CtaBand'
import { Hero } from '@/components/blocks/Hero'
import { Logos } from '@/components/blocks/Logos'
import { MetricsStrip } from '@/components/blocks/MetricsStrip'
import { ProcessTimeline } from '@/components/blocks/ProcessTimeline'
import { Testimonials } from '@/components/blocks/Testimonials'
import { ValuePillars } from '@/components/blocks/ValuePillars'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <ValuePillars />
        <ProcessTimeline />
        <MetricsStrip />
        <Logos />
        <Testimonials />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  )
}