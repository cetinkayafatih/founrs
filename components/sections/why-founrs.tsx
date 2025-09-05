'use client';

import React from 'react';
import { Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function WhyFounrsSection() {
  const t = useTranslations('sections.whyFounrs');
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--prs-bg)' }}>
      {/* Background grain */}
      <div className="absolute inset-0 grain" />

      <div className="max-w-[1440px] mx-auto px-[120px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Column 1 - Professional Headshot */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-80 h-80 rounded-3xl overflow-hidden"
              style={{
                background: 'var(--prs-panel)',
                border: '1px solid var(--prs-stroke)',
                boxShadow: 'var(--prs-shadow)',
              }}
            >
              {/* Professional headshot placeholder */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--prs-a1), var(--prs-a2))',
                  color: 'white',
                }}
              >
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">👤</div>
                  <p className="text-sm opacity-70">Professional Headshot</p>
                  <p className="text-xs opacity-50 mt-1">Replace with actual photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Text Content */}
          <div className="space-y-6">
            {/* Small Title */}
            <div
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ 
                color: 'var(--prs-a2)',
                letterSpacing: '0.1em'
              }}
            >
              {t('badge')}
            </div>

            {/* Headline */}
            <h2
              className="text-4xl font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-inter)',
                color: 'var(--prs-fg)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}
            >
              {t('title')}
            </h2>

            {/* Main Paragraph */}
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--prs-muted)' }}
            >
              {t('description')}
            </p>

            {/* Founder Info */}
            <div className="space-y-4 pt-4">
              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: 'var(--prs-fg)',
                  }}
                >
                  {t('founder.name')}
                </h3>
                <p
                  className="text-base mb-6"
                  style={{ color: 'var(--prs-a2)' }}
                >
                  {t('founder.title')}
                </p>
              </div>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/founder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                  color: 'white',
                }}
              >
                <Linkedin className="w-5 h-5" />
                {t('linkedinButton')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
