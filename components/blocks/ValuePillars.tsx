import { Container } from '@/components/layout/Container'

const pillars = [
  {
    icon: '📐',
    title: 'Strategic Architecture',
    description:
      'Not just workflows—complete system design. We map your processes, identify bottlenecks, and architect solutions that scale with your business.',
  },
  {
    icon: '👁️',
    title: 'Observability by Design',
    description:
      'Every automation includes logging, monitoring, and error handling from day one. You\'ll know exactly how your systems perform.',
  },
  {
    icon: '💰',
    title: 'Cost Control',
    description:
      'Transparent pricing, no per-execution fees. Self-hosted solutions mean predictable costs that don\'t grow with your success.',
  },
]

export function ValuePillars() {
  return (
    <section className="py-20 bg-bg">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Built on Three Pillars
          </h2>
          <p className="text-xl text-muted">
            The principles that make our automations different
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
              <p className="text-muted leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}