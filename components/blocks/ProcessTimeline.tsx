import { Container } from '@/components/layout/Container'

const steps = [
  {
    title: 'Discovery',
    duration: 'Day 1-2',
    description:
      'Process mapping, stakeholder interviews, and opportunity identification.',
  },
  {
    title: '7-Day MVP',
    duration: 'Day 3-7',
    description:
      'Core workflow implementation with logging, monitoring, and error handling.',
  },
  {
    title: 'Go-Live',
    duration: 'Day 8',
    description:
      'Production deployment, team training, and handover documentation.',
  },
  {
    title: 'Optimization',
    duration: 'Day 9-30',
    description:
      'Performance monitoring, refinements, and continuous improvement.',
  },
]

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-border/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our Process
          </h2>
          <p className="text-xl text-muted">
            From discovery to deployment in 7 days
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* SVG Timeline */}
          <svg
            className="absolute top-0 left-0 w-full h-full hidden md:block"
            viewBox="0 0 800 400"
            fill="none"
            style={{ zIndex: 0 }}
          >
            <line
              x1="100"
              y1="200"
              x2="700"
              y2="200"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
          </svg>

          <div className="grid md:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-primary mb-3">{step.duration}</p>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}