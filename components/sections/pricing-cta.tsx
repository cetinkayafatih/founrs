'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function PricingCta() {
  const t = useTranslations('pricingPage.cta');
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--prs-panel)' }}>
      {/* Background grain */}
      <div className="absolute inset-0 grain" />

      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(106, 168, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-[120px] relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2
            className="text-5xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--prs-fg)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            {t('title')}
          </h2>

          {/* Subheading */}
          <p
            className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            {t('subtitle')}
          </p>

          {/* Main CTA Button */}
          <div className="space-y-6">
            <a
              href="https://calendly.com/founrs/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-200 hover:scale-105 group"
              style={{
                background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                color: 'white',
                boxShadow: '0 8px 32px rgba(106, 168, 255, 0.3)',
              }}
            >
              <Calendar className="w-6 h-6" />
              {t('button')}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path 
                  d="M7.5 5L12.5 10L7.5 15" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Value Proposition */}
            <p
              className="text-base"
              style={{ color: 'var(--prs-muted)' }}
            >
              {t('value')}
            </p>
          </div>

          {/* What You'll Get */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              {/* What to Expect */}
              <div>
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: 'var(--prs-fg)',
                  }}
                >
                  {t('left.title')}
                </h4>
                <ul className="space-y-3">
                  {[0,1,2,3].map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'var(--prs-muted)' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: 'var(--prs-a2)' }}
                      />
                      {t(`left.items.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call Details */}
              <div>
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: 'var(--prs-fg)',
                  }}
                >
                  {t('right.title')}
                </h4>
                <ul className="space-y-3">
                  {[0,1,2,3].map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'var(--prs-muted)' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: 'var(--prs-a2)' }}
                      />
                      {t(`right.items.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
