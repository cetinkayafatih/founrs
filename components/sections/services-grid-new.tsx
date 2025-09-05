'use client';

import React from 'react';
import { Workflow, ArrowRightLeft, Settings, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ServicesGridNew() {
  const t = useTranslations('servicesPage.grid');

  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: t('services.0.title'),
      description: t('services.0.description'),
      deliverables: [
        t('services.0.deliverables.0'),
        t('services.0.deliverables.1'),
        t('services.0.deliverables.2'),
        t('services.0.deliverables.3')
      ],
      isPopular: false
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: t('services.1.title'),
      description: t('services.1.description'),
      deliverables: [
        t('services.1.deliverables.0'),
        t('services.1.deliverables.1'),
        t('services.1.deliverables.2'),
        t('services.1.deliverables.3')
      ],
      isPopular: true
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('services.2.title'),
      description: t('services.2.description'),
      deliverables: [
        t('services.2.deliverables.0'),
        t('services.2.deliverables.1'),
        t('services.2.deliverables.2'),
        t('services.2.deliverables.3')
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--prs-panel)' }}>
      {/* Background grain */}
      <div className="absolute inset-0 grain" />

      <div className="max-w-[1440px] mx-auto px-[120px] relative">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-3xl border transition-all duration-300 hover:scale-105 hover:border-opacity-40"
              style={{
                background: 'var(--prs-bg)',
                border: '1px solid var(--prs-stroke)',
                boxShadow: 'var(--prs-shadow)',
              }}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div
                  className="absolute -top-3 left-8 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                    color: 'white',
                  }}
                >
                  <Star className="w-3 h-3 inline mr-1" />
                  {t('popularBadge')}
                </div>
              )}

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
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-base mb-8 leading-relaxed"
                style={{ color: 'var(--prs-muted)' }}
              >
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-4">
                <h4
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--prs-a2)' }}
                >
                  {t('deliverablesTitle')}
                </h4>
                <ul className="space-y-3">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <li
                      key={deliverableIndex}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'var(--prs-muted)' }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                        style={{
                          background: 'rgba(34, 197, 94, 0.1)',
                          color: '#22c55e',
                        }}
                      >
                        ✔️
                      </div>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Accent */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(106, 168, 255, 0.05), rgba(158, 124, 255, 0.05), rgba(255, 124, 203, 0.05))',
                }}
              />
            </div>
          ))}
        </div>

        {/* Strategic Transition Section */}
        <div className="text-center mt-20">
          <h3
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--prs-fg)',
              letterSpacing: '-0.02em',
            }}
          >
            {t('bottomSection.title')}
          </h3>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            {t('bottomSection.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
