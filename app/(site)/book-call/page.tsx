'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { z } from 'zod'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { SiteFooter } from '@/components/site/SiteFooter'
import { SiteHeader } from '@/components/site/SiteHeader'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(1, 'Company name is required'),
  priority: z.enum(['blueprint', 'build', 'partnership', 'unsure'], {
    required_error: 'Please select your priority',
  }),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function BookCallPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    priority: 'unsure',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const validatedData = formSchema.parse(formData)
      
      // Demo: Log data instead of actual submission
      console.log('Form submitted:', validatedData)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setShowSuccess(true)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        priority: 'unsure',
        message: '',
      })
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<FormData> = {}
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormData
          fieldErrors[path] = err.message
        })
        setErrors(fieldErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="pt-32 pb-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Book a Call
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                  Let's discuss your automation needs and see how we can help
                  you scale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-xl font-semibold mb-6">
                    Schedule with Cal.com
                  </h2>
                  <div className="aspect-square bg-border/10 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted">
                      <p className="mb-2">Cal.com embed placeholder</p>
                      <p className="text-sm">15-minute discovery call</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-6">
                    Or send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
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
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
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
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company *
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Acme Corp"
                      />
                      {errors.company && (
                        <p className="text-xs text-warning mt-1">{errors.company}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="priority" className="block text-sm font-medium mb-2">
                        Priority *
                      </label>
                      <select
                        id="priority"
                        value={formData.priority}
                        onChange={(e) => handleChange('priority', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="blueprint">Automation Blueprint</option>
                        <option value="build">Build Workflows</option>
                        <option value="partnership">Strategic Partnership</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                      {errors.priority && (
                        <p className="text-xs text-warning mt-1">{errors.priority}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message || ''}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="flex min-h-[80px] w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your automation needs..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      
      {showSuccess && (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
          <div className="bg-accent border border-accent text-white rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-sm">
                Message sent successfully! We'll be in touch soon.
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