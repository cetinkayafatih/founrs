import Link from 'next/link'

import { Container } from '@/components/layout/Container'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/20 bg-bg">
      <Container>
        <div className="py-8">
          <div className="text-center mb-6">
            <p className="text-muted italic">
              We design the intelligent automation foundations that power your growth.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted">
            <div className="mb-4 md:mb-0">
              © 2024 FOUNRS. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-fg transition-colors">
                Privacy
              </Link>
              <Link href="/kvkk" className="hover:text-fg transition-colors">
                KVKK
              </Link>
              <Link href="https://linkedin.com/company/founrs" className="hover:text-fg transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}