'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export function N8nComparison() {
  const comparisonData = [
    {
      feature: 'Cost Model',
      n8n: 'Predictable & Scalable. Open-source and self-hosted options mean your costs don\'t punish your growth.',
      zapierMake: 'Expensive & Unpredictable. Pay-per-task models lead to surprise bills as your usage increases.'
    },
    {
      feature: 'Data Privacy & Control',
      n8n: '100% Your Data. With the ability to self-host, your sensitive customer and business data never leaves your infrastructure.',
      zapierMake: 'Third-Party Servers. Your data is processed and stored on their platforms, outside of your control.'
    },
    {
      feature: 'Flexibility & Customization',
      n8n: 'Limitless Possibilities. Connect to any custom API, run custom code (JavaScript/Python), and build complex, multi-path workflows.',
      zapierMake: 'Template-Driven & Rigid. You are often limited to pre-built connectors and simple, linear logic.'
    },
    {
      feature: 'Error Handling & Debugging',
      n8n: 'Transparent & Powerful. A visual debugger allows you to see exactly where and why a workflow failed, making fixes fast.',
      zapierMake: 'Opaque & Frustrating. Debugging can be a black box, wasting hours trying to identify a simple issue.'
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
            n8n vs. The Old Way (Zapier & Make)
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--prs-muted)' }}
          >
            An honest comparison from automation experts who've worked with all major platforms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-3xl border" style={{ border: '1px solid var(--prs-stroke)' }}>
          {/* Table Header */}
          <div
            className="grid grid-cols-3 gap-0 border-b"
            style={{ 
              background: 'var(--prs-bg)',
              borderBottom: '1px solid var(--prs-stroke)'
            }}
          >
            <div className="p-6 font-semibold text-center" style={{ color: 'var(--prs-muted)' }}>
              Feature
            </div>
            <div
              className="p-6 font-bold text-center border-l border-r"
              style={{ 
                color: 'var(--prs-fg)',
                borderLeft: '1px solid var(--prs-stroke)',
                borderRight: '1px solid var(--prs-stroke)',
                background: 'rgba(106, 168, 255, 0.05)'
              }}
            >
              n8n (The FOUNRS Way)
            </div>
            <div className="p-6 font-semibold text-center" style={{ color: 'var(--prs-muted)' }}>
              Zapier / Make
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-0 border-b last:border-b-0"
              style={{ 
                background: index % 2 === 0 ? 'var(--prs-panel)' : 'var(--prs-bg)',
                borderBottom: index < comparisonData.length - 1 ? '1px solid var(--prs-stroke)' : 'none'
              }}
            >
              {/* Feature Column */}
              <div className="p-6">
                <h3
                  className="font-semibold text-lg"
                  style={{ color: 'var(--prs-fg)' }}
                >
                  {row.feature}
                </h3>
              </div>

              {/* n8n Column */}
              <div
                className="p-6 border-l border-r"
                style={{ 
                  borderLeft: '1px solid var(--prs-stroke)',
                  borderRight: '1px solid var(--prs-stroke)'
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{ background: 'rgba(34, 197, 94, 0.1)' }}
                  >
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--prs-fg)' }}
                  >
                    {row.n8n}
                  </p>
                </div>
              </div>

              {/* Zapier/Make Column */}
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{ background: 'rgba(239, 68, 68, 0.1)' }}
                  >
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--prs-muted)' }}
                  >
                    {row.zapierMake}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p
            className="text-base italic"
            style={{ color: 'var(--prs-muted)' }}
          >
            "We've migrated over 200 workflows from Zapier and Make to n8n. 
            The difference in capability and cost-effectiveness is dramatic."
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: 'var(--prs-a2)' }}
          >
            — FOUNRS Team
          </p>
        </div>
      </div>
    </section>
  );
}
