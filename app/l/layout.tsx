import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/20 bg-bg/95 backdrop-blur-sm">
        <Container>
          <div className="h-16 flex items-center justify-between">
            <div className="font-display font-bold text-lg">FOUNRS</div>
            <Button size="sm" className="hidden sm:flex">
              Book Call
            </Button>
          </div>
        </Container>
      </header>
      
      {children}
      
      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-bg border-t border-border/20 p-4">
        <Button className="w-full">
          Prepare my free 2-min demo →
        </Button>
      </div>
    </div>
  )
}