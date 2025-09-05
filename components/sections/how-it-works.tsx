'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Search, Wrench, Zap } from 'lucide-react';

export function HowItWorksSection() {
  const t = useTranslations('sections.howItWorks');

  const steps = [
    {
      number: '01',
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      icon: <Search className="w-8 h-8" />,
      details: [
        t('steps.0.details.0'),
        t('steps.0.details.1'),
        t('steps.0.details.2'),
        t('steps.0.details.3')
      ]
    },
    {
      number: '02',
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      icon: <Wrench className="w-8 h-8" />,
      details: [
        t('steps.1.details.0'),
        t('steps.1.details.1'),
        t('steps.1.details.2'),
        t('steps.1.details.3')
      ]
    },
    {
      number: '03',
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      icon: <Zap className="w-8 h-8" />,
      details: [
        t('steps.2.details.0'),
        t('steps.2.details.1'),
        t('steps.2.details.2'),
        t('steps.2.details.3')
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--prs-bg)' }}>
      {/* Background grain */}
      <div className="absolute inset-0 grain" />

      <div className="max-w-[1440px] mx-auto px-[120px] relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--prs-fg)',
              letterSpacing: '-0.02em',
            }}
          >
            {t('title')}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 opacity-20" 
               style={{ background: 'linear-gradient(90deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))' }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div
                  className="p-8 rounded-3xl border transition-all duration-300 hover:scale-105 hover:border-opacity-40 relative z-10"
                  style={{
                    background: 'var(--prs-panel)',
                    border: '1px solid var(--prs-stroke)',
                    boxShadow: 'var(--prs-shadow)',
                  }}
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold"
                    style={{
                      background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                      color: 'white',
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: 'rgba(106, 168, 255, 0.1)',
                      color: 'var(--prs-a1)',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      color: 'var(--prs-fg)',
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base mb-6 leading-relaxed"
                    style={{ color: 'var(--prs-muted)' }}
                  >
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: 'var(--prs-muted)' }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--prs-a2)' }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-6 z-20">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--prs-bg)' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path 
                          d="M9 18L15 12L9 6" 
                          stroke="var(--prs-a2)" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--prs-muted)' }}
          >
            {t('cta.subtitle')}
          </p>
          <a
            href="https://calendly.com/founrs/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
              color: 'white',
            }}
          >
            {t('cta.button')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}