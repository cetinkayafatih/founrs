import { Container } from '@/components/layout/Container'

const logos = [
  { name: 'TechCorp', src: '/assets/logos/logo1.svg' },
  { name: 'InnovateLab', src: '/assets/logos/logo2.svg' },
  { name: 'NextSys', src: '/assets/logos/logo3.svg' },
]

export function Logos() {
  return (
    <section className="py-20 bg-border/5">
      <Container>
        <div className="text-center mb-12">
          <p className="text-muted">Trusted by forward-thinking companies</p>
        </div>

        <div className="flex justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}