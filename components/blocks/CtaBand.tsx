import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export function CtaBand() {
  return (
    <section className="py-20 bg-primary text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Automation Blueprint & ROI Map
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            5 business days, fixed fee
          </p>
          <div>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/services">Start your Blueprint →</Link>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            <span className="font-medium">30% credit</span> to Build if started within 30 days
          </p>
        </div>
      </Container>
    </section>
  )
}