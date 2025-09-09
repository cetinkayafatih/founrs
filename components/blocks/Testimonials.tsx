import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/Container'

const testimonials = [
  {
    quote:
      "FOUNRS transformed our order processing from a 2-hour manual nightmare into a 5-minute automated flow. The observability features mean we catch issues before they impact customers.",
    author: 'Sarah Chen',
    title: 'Operations Director',
    company: 'TechRetail Co.',
    result: '−15 hrs/week',
  },
  {
    quote:
      "Their strategic approach made all the difference. Instead of band-aid solutions, we got a scalable architecture that grew with our 300% expansion.",
    author: 'Marcus Rodriguez',
    title: 'CTO',
    company: 'GrowthLabs',
    result: '−22 hrs/week',
  },
]

export async function Testimonials() {
  const t = await getTranslations('home.testimonials')
  return (
    <section className="py-20 bg-bg">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('title')}</h2>
          <p className="text-xl text-muted">
            Real results from real implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-border/5 border border-border/20 rounded-lg p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <blockquote className="text-lg leading-relaxed flex-1">
                  "{testimonial.quote}"
                </blockquote>
                <span className="ml-4 px-3 py-1 bg-accent/20 text-accent text-sm font-mono rounded-full whitespace-nowrap">
                  {testimonial.result}
                </span>
              </div>
              
              <div className="border-t border-border/20 pt-6">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}