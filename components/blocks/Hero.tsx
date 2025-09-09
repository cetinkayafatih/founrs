import Link from 'next/link'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center blueprint-grid relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-1/4 left-1/4 w-64 h-64"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M20 100 L180 100 M100 20 L100 180"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" className="text-accent" fill="none" />
        </svg>
        
        <svg
          className="absolute bottom-1/4 right-1/4 w-48 h-48"
          viewBox="0 0 150 150"
          fill="none"
        >
          <rect
            x="30"
            y="30"
            width="90"
            height="90"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
            fill="none"
          />
          <path
            d="M30 75 L120 75 M75 30 L75 120"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent"
          />
        </svg>
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
            We design the intelligent automation foundations that{' '}
            <span className="text-primary">power your growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto">
            Beyond simple zaps—robust, scalable n8n systems delivered in 7 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild>
              <Link href="/book-call">Book a 15-min discovery</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">See a Blueprint sample</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}