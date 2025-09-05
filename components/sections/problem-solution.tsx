'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { X, Check } from 'lucide-react';

export function ProblemSolutionSection() {
  const t = useTranslations('sections.problemSolution');

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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* The Problem Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                }}
              >
                {t('problemTitle')}
              </h3>
            </div>

            <div className="space-y-6">
              {[0,1,2,3].map((i) => ({
                title: t(`problems.${i}.title`),
                description: t(`problems.${i}.description`)
              })).map((problem, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border"
                  style={{
                    background: 'rgba(239, 68, 68, 0.05)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                  }}
                >
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--prs-fg)' }}
                  >
                    {problem.title}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--prs-muted)' }}
                  >
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                }}
              >
                {t('solutionTitle')}
              </h3>
            </div>

            <div className="space-y-6">
              {[0,1,2,3].map((i) => ({
                title: t(`solutions.${i}.title`),
                description: t(`solutions.${i}.description`)
              })).map((solution, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border"
                  style={{
                    background: 'rgba(34, 197, 94, 0.05)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: 'var(--prs-fg)' }}
                  >
                    {solution.title}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--prs-muted)' }}
                  >
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
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
            {t('cta')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
