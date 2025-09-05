'use client';

import React from 'react';

interface MetricsBadgeProps {
  children: React.ReactNode;
  delay?: number;
}

function Badge({ children, delay = 0 }: MetricsBadgeProps) {
  return (
    <div
      className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all duration-200 hover:scale-105 animate-slide-up-badge"
      style={{
        background: 'rgba(17, 18, 22, 0.8)',
        border: '1px solid var(--prs-stroke)',
        color: 'var(--prs-fg)',
        boxShadow: 'var(--prs-shadow)',
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
}

export function MetricsBadge() {
  return (
    <div className="absolute bottom-8 left-8 flex flex-col gap-3 z-10">
      <Badge delay={0.8}>
        <div className="flex items-center gap-2">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ background: '#10B981' }}
          />
          <span>99.95% uptime</span>
        </div>
      </Badge>
      
      <Badge delay={1.0}>
        <div className="flex items-center gap-2">
          <div 
            className="w-2 h-2 rounded-full spectral"
          />
          <span>200+ integrations</span>
        </div>
      </Badge>
    </div>
  );
}
