'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Workflow, ArrowRightLeft, Settings, ExternalLink } from 'lucide-react';

export function ServicesSection() {
  const t = useTranslations('sections.servicesSection');

  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: t('services.0.title'),
      description: t('services.0.description'),
      details: [
        t('services.0.details.0'),
        t('services.0.details.1'),
        t('services.0.details.2'),
        t('services.0.details.3'),
        t('services.0.details.4')
      ]
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: t('services.1.title'),
      description: t('services.1.description'),
      details: [
        t('services.1.details.0'),
        t('services.1.details.1'),
        t('services.1.details.2'),
        t('services.1.details.3'),
        t('services.1.details.4')
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('services.2.title'),
      description: t('services.2.description'),
      details: [
        t('services.2.details.0'),
        t('services.2.details.1'),
        t('services.2.details.2'),
        t('services.2.details.3'),
        t('services.2.details.4')
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--prs-panel)' }}>
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border transition-all duration-300 hover:scale-105 hover:border-opacity-40"
              style={{
                background: 'var(--prs-bg)',
                border: '1px solid var(--prs-stroke)',
                boxShadow: 'var(--prs-shadow)',
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                  color: 'white',
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-base mb-6 leading-relaxed"
                style={{ color: 'var(--prs-muted)' }}
              >
                {service.description}
              </p>

              {/* Details List */}
              <ul className="space-y-3">
                {service.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--prs-muted)' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: 'var(--prs-a2)' }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--prs-a2)' }}>
                  {t('learnMore')}
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="mb-6">
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: 'var(--font-inter)',
                color: 'var(--prs-fg)',
              }}
            >
              {t('cta.title')}
            </h3>
            <p
              className="text-lg"
              style={{ color: 'var(--prs-muted)' }}
            >
              {t('cta.subtitle')}
            </p>
          </div>

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
