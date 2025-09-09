'use client'

import { useState, useEffect } from 'react'

import { Container } from '@/components/layout/Container'
import { Tooltip } from '@/components/ui/Tooltip'

const metrics = [
  {
    value: 25,
    displayValue: '25+',
    suffix: ' hours/week',
    label: 'Time Saved',
    footnote: 'Average across all clients',
    tooltip: 'Based on analysis of 50+ client implementations. Time saved includes manual data entry, validation, and report generation.',
  },
  {
    value: 45,
    displayValue: '45',
    suffix: '%',
    label: 'Error Reduction',
    footnote: 'Typical range 30-60%',
    tooltip: 'Reduction in data entry errors, duplicate processing, and manual validation mistakes through automation.',
  },
  {
    value: 3,
    displayValue: '3',
    suffix: ' weeks',
    label: 'Payback Period',
    footnote: 'Based on time savings',
    tooltip: 'Average time to recover implementation investment through operational efficiency gains and reduced manual work.',
  },
]

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    // If user prefers reduced motion, set final value immediately
    if (prefersReducedMotion) {
      setCount(target)
      return
    }

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Ease out animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, isClient, prefersReducedMotion])

  return count
}

function MetricCard({ metric, delay }: { metric: typeof metrics[0], delay: number }) {
  const count = useCountUp(metric.value)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const displayValue = isVisible 
    ? metric.displayValue.includes('+') 
      ? `${count}+`
      : count.toString()
    : '0'

  return (
    <div className="text-center">
      <Tooltip content={metric.tooltip} side="top">
        <div className="mb-4 cursor-help">
          <span className="font-mono font-bold text-3xl md:text-4xl text-primary">
            {displayValue}{metric.suffix}
          </span>
        </div>
      </Tooltip>
      <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
      <p className="text-sm text-muted">{metric.footnote}</p>
    </div>
  )
}

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
            <MetricCard key={index} metric={metric} delay={index * 200} />
          ))}
        </div>
      </Container>
    </section>
  )
}