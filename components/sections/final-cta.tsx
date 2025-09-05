'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Calendar, ArrowRight } from 'lucide-react';

export function FinalCtaSection() {
  const t = useTranslations('sections.finalCta');

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
          {/* Main Headline */}
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

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[0,1,2].map((i) => (
              {
                title: t(`benefits.${i}.title`),
                description: t(`benefits.${i}.description`)
              }
            )).map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border"
                style={{
                  background: 'var(--prs-bg)',
                  border: '1px solid var(--prs-stroke)',
                }}
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: 'var(--prs-fg)',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--prs-muted)' }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

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
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Social Proof */}
            <p
              className="text-sm"
              style={{ color: 'var(--prs-muted)' }}
            >
              {t('socialProof')}
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
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
