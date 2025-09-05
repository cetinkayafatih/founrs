'use client';

import React from 'react';
import { Heart, Eye, Shield } from 'lucide-react';

export function N8nBenefits() {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Open-Source Freedom',
      description: 'The power of a global community. n8n is constantly evolving, with new features and integrations driven by thousands of developers. You\'re not locked into a single company\'s roadmap.',
      highlights: [
        'Community-driven development',
        'No vendor lock-in',
        'Transparent roadmap',
        'Free forever option'
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Workflow Building',
      description: 'Complex logic, made simple. n8n\'s node-based canvas allows you to visualize and build even the most complex workflows intuitively, making them easy to understand and maintain.',
      highlights: [
        'Drag-and-drop interface',
        'Visual debugging',
        'Complex branching logic',
        'Easy team collaboration'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Self-Hosting for Ultimate Control',
      description: 'Your infrastructure, your rules. For businesses with strict security or compliance needs, self-hosting n8n is a game-changer, offering unparalleled security and control.',
      highlights: [
        'Complete data sovereignty',
        'Custom security policies',
        'Compliance-ready setup',
        'No external dependencies'
      ]
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
            More Than an Alternative—A Strategic Advantage
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            These unique strengths make n8n the foundation of choice for forward-thinking businesses.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
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
                {benefit.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                }}
              >
                {benefit.title}
              </h3>

              {/* Description */}
              <p
                className="text-base mb-6 leading-relaxed"
                style={{ color: 'var(--prs-muted)' }}
              >
                {benefit.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {benefit.highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlightIndex}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: 'var(--prs-muted)' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--prs-a2)' }}
                    />
                    {highlight}
                  </div>
                ))}
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

        {/* Expert Quote */}
        <div className="text-center mt-16">
          <div
            className="max-w-4xl mx-auto p-8 rounded-3xl border"
            style={{
              background: 'var(--prs-panel)',
              border: '1px solid var(--prs-stroke)',
            }}
          >
            <p
              className="text-lg leading-relaxed mb-4 italic"
              style={{ color: 'var(--prs-fg)' }}
            >
              "After building automation systems for 50+ companies, we can confidently say: 
              n8n is the most powerful and flexible automation platform available. 
              It's not just better than the alternatives—it's in a different league entirely."
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: 'var(--prs-a2)' }}
            >
              — FOUNRS Expert Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
