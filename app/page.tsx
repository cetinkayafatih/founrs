import { Hero } from '@/components/blocks/Hero'
import { ValuePillars } from '@/components/blocks/ValuePillars'
import { ProcessTimeline } from '@/components/blocks/ProcessTimeline'
import { MetricsStrip } from '@/components/blocks/MetricsStrip'
import { Logos } from '@/components/blocks/Logos'
import { Testimonials } from '@/components/blocks/Testimonials'
import { CtaBand } from '@/components/blocks/CtaBand'
import { SiteHeader } from '@/components/site/SiteHeader'
import { SiteFooter } from '@/components/site/SiteFooter'

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