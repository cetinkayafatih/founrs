'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export function LogoWallSection() {
  const t = useTranslations('sections.logoWall');

  const technologies = [
    { name: 'n8n', logo: '🔗' },
    { name: 'Webflow', logo: '🌊' },
    { name: 'Airtable', logo: '📊' },
    { name: 'Notion', logo: '📝' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Slack', logo: '💬' },
    { name: 'Discord', logo: '🎮' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Google Sheets', logo: '📈' },
    { name: 'AWS', logo: '☁️' },
  ];

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'var(--prs-bg)' }}>
      {/* Background grain */}
      <div className="absolute inset-0 grain opacity-30" />

      <div className="max-w-[1440px] mx-auto px-[120px] relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--prs-fg)',
              letterSpacing: '-0.02em',
            }}
          >
            {t('title')}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:border-opacity-40"
              style={{
                background: 'var(--prs-panel)',
                border: '1px solid var(--prs-stroke)',
                minHeight: '120px',
              }}
            >
              {/* Logo/Icon */}
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.logo}
              </div>
              
              {/* Technology Name */}
              <div
                className="text-sm font-semibold text-center"
                style={{ color: 'var(--prs-fg)' }}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p
            className="text-base"
            style={{ color: 'var(--prs-muted)' }}
          >
            {t('bottomText')}
          </p>

          <div className="mt-6">
            <a
              href="https://calendly.com/founrs/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: 'transparent',
                color: 'var(--prs-a2)',
                border: '1px solid var(--prs-a2)',
              }}
            >
              {t('ctaButton')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
