'use client'

import { useState } from 'react'
import { z } from 'zod'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

const demoFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
})

type DemoFormData = z.infer<typeof demoFormSchema>

const pricingTiers = [
  {
    name: 'Lite',
    price: '$699',
    features: [
      'Basic e-invoice collection',
      'Simple approval workflow',
      'Weekly reports',
      'Email support',
    ],
  },
  {
    name: 'Core',
    price: '$1,900',
    popular: true,
    features: [
      'Full e-invoice collection',
      'Advanced approval queue',
      'Duplicate detection',
      'Daily digest reports',
      'Priority support',
      'Custom fields',
    ],
  },
  {
    name: 'Pro',
    price: '$4,500',
    features: [
      'Everything in Core',
      'Multi-company support',
      'Advanced analytics',
      'API integrations',
      'Custom workflows',
      'Dedicated support',
    ],
  },
]

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: '7 days for standard setup. We handle all configuration and testing.',
  },
  {
    question: "What's included in the setup?",
    answer:
      'Complete system configuration, data migration, team training, and 30 days of support.',
  },
  {
    question: 'Is my data secure and KVKK compliant?',
    answer:
      'Yes, the system is installed in your account with limited, logged access. Full KVKK compliance included.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      'Absolutely. Blueprint/Build credits apply to upgrades within 30 days.',
  },
]

export default function SMMSuitePage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    company: '',
  })
  const [errors, setErrors] = useState<Partial<DemoFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const validatedData = demoFormSchema.parse(formData)
      
      console.log('Demo request:', validatedData)
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setShowSuccess(true)
      setShowModal(false)
      
      setFormData({
        name: '',
        email: '',
        company: '',
      })
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<DemoFormData> = {}
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof DemoFormData
          fieldErrors[path] = err.message
        })
        setErrors(fieldErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof DemoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="pb-20 sm:pb-0">
      <main>
        <section className="pt-16 pb-12">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                SMMM Suite
              </h1>
              <p className="text-xl md:text-2xl text-primary mb-8">
                Pre-Accounting Automation
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-border/5 p-6 rounded-lg">
                  <div className="text-3xl mb-4">📥</div>
                  <h3 className="font-semibold mb-2">Collect</h3>
                  <p className="text-sm text-muted">
                    Automatically gather e-invoices, statements, and receipts
                    from all sources
                  </p>
                </div>
                
                <div className="bg-border/5 p-6 rounded-lg">
                  <div className="text-3xl mb-4">✓</div>
                  <h3 className="font-semibold mb-2">Control</h3>
                  <p className="text-sm text-muted">
                    Google Sheet approval queue with duplicate detection and
                    field validation
                  </p>
                </div>
                
                <div className="bg-border/5 p-6 rounded-lg">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="font-semibold mb-2">Track</h3>
                  <p className="text-sm text-muted">
                    Daily digest reports per customer with full audit trail
                  </p>
                </div>
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-12">
                <p className="text-lg font-semibold text-accent">
                  Save 10–30 hours per week on pre-accounting tasks
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-border/5">
          <Container>
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="relative bg-bg border border-border/20 rounded-lg p-8 text-center">
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold font-mono mb-6">
                    {tier.price}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-start">
                        <span className="text-accent mr-3 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full"
                    variant={tier.popular ? 'primary' : 'outline'}
                    onClick={() => setShowModal(true)}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="border border-border/20 rounded-lg">
                    <summary className="flex w-full items-center justify-between p-4 text-left hover:bg-border/5 transition-colors cursor-pointer">
                      <span className="font-medium">{faq.question}</span>
                      <span className="transition-transform">→</span>
                    </summary>
                    <div className="border-t border-border/20 p-4">
                      <div className="text-muted">{faq.answer}</div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-primary text-white">
          <Container>
            <div className="text-center">
              <h2 className="text-4xl font-display font-bold mb-6">
                Ready to automate your pre-accounting?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                See exactly how it works for your business in 2 minutes
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 hidden sm:inline-flex"
                onClick={() => setShowModal(true)}
              >
                Prepare my free demo →
              </Button>
            </div>
          </Container>
        </section>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-bg border border-border rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Request Demo</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-muted hover:text-fg"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-xs text-warning mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-xs text-warning mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Acme Corp"
                />
                {errors.company && (
                  <p className="text-xs text-warning mt-1">{errors.company}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request Demo'}
              </Button>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
          <div className="bg-accent border border-accent text-white rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-sm">
                Demo request sent! We'll contact you within 24 hours.
              </span>
              <button
                onClick={() => setShowSuccess(false)}
                className="ml-2 text-lg leading-none hover:opacity-70"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}