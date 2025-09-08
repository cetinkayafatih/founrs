import { Container } from '@/components/layout/Container'

const metrics = [
  {
    value: '25+',
    suffix: ' hours/week',
    label: 'Time Saved',
    footnote: 'Average across all clients',
  },
  {
    value: '45',
    suffix: '%',
    label: 'Error Reduction',
    footnote: 'Typical range 30-60%',
  },
  {
    value: '3',
    suffix: ' weeks',
    label: 'Payback Period',
    footnote: 'Based on time savings',
  },
]

export function MetricsStrip() {
  return (
    <section className="py-20 bg-bg">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Real Impact
          </h2>
          <p className="text-xl text-muted">
            Measurable results from day one
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="font-mono font-bold text-3xl md:text-4xl text-primary">
                  {metric.value}{metric.suffix}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-muted">{metric.footnote}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}