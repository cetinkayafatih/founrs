'use client';

import React from 'react';

export function WhyN8nHero() {
  return (
    <section className="pt-[72px] py-24 relative overflow-hidden" style={{ background: 'var(--prs-bg)' }}>
      {/* Background grain */}
      <div className="absolute inset-0 grain" />

      <div className="max-w-[1440px] mx-auto px-[120px] relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1
            className="text-5xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-inter)',
              color: 'var(--prs-fg)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}
          >
            Why We Chose n8n (And Why You Should Too)
          </h1>

          {/* Subheading */}
          <p
            className="text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            In a world of rigid, expensive automation platforms, n8n offers a revolutionary combination 
            of power, flexibility, and control. As experts, here's why we've built our entire agency on it.
          </p>
        </div>
      </div>
    </section>
  );
}
