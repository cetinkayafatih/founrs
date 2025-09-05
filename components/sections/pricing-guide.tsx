'use client';

import React from 'react';
import { Workflow, ArrowRightLeft, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function PricingGuide() {
  const t = useTranslations('pricingPage.guide');
  const pricingCards = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: t('cards.0.title'),
      description: t('cards.0.description'),
      priceAnchor: t('cards.0.priceAnchor')
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: t('cards.1.title'),
      description: t('cards.1.description'),
      priceAnchor: t('cards.1.priceAnchor')
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('cards.2.title'),
      description: t('cards.2.description'),
      priceAnchor: t('cards.2.priceAnchor')
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border transition-all duration-300 hover:scale-105 hover:border-opacity-40"
              style={{
                background: 'var(--prs-panel)',
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
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-base mb-6 leading-relaxed"
                style={{ color: 'var(--prs-muted)' }}
              >
                {card.description}
              </p>

              {/* Price Anchor */}
              <div
                className="text-center p-4 rounded-2xl border"
                style={{
                  background: 'var(--prs-bg)',
                  border: '1px solid var(--prs-stroke)',
                }}
              >
                <p
                  className="text-lg font-bold"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: 'var(--prs-a2)',
                  }}
                >
                  {card.priceAnchor}
                </p>
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

        {/* Disclaimer */}
        <div className="text-center">
          <p
            className="text-sm italic max-w-3xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}
