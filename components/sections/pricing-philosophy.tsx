'use client';

import React from 'react';
import { Target, TrendingUp, FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function PricingPhilosophy() {
  const t = useTranslations('pricingPage.philosophy');
  const principles = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('cards.0.title'),
      headline: t('cards.0.headline'),
      description: t('cards.0.description')
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('cards.1.title'),
      headline: t('cards.1.headline'),
      description: t('cards.1.description')
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: t('cards.2.title'),
      headline: t('cards.2.headline'),
      description: t('cards.2.description')
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

        {/* Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
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
                {principle.icon}
              </div>

              {/* Headline */}
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-a2)',
                }}
              >
                {principle.headline}
              </h3>

              {/* Title */}
              <h4
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                }}
              >
                {principle.title}
              </h4>

              {/* Description */}
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--prs-muted)' }}
              >
                {principle.description}
              </p>

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
      </div>
    </section>
  );
}
