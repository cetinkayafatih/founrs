'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(mouseX, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(deltaX * 8);
    mouseY.set(-deltaY * 8);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  };


  return (
    <main
      id="main"
      className="min-h-screen pt-[72px] relative overflow-hidden"
      style={{ background: 'var(--prs-bg)' }}
    >
      {/* Background grain */}
      <div className="absolute inset-0 grain" />

      {/* Main content */}
      <div className="max-w-[1440px] mx-auto px-[120px] py-24">
        <div className="grid grid-cols-12 gap-6 items-center min-h-[calc(100vh-168px)]">
          {/* Left Column - Content */}
          <div className="col-span-6 space-y-8">
            {/* Badge */}
            <div className="animate-slide-up-1">
              <div
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(106, 168, 255, 0.1)',
                  color: 'var(--prs-a1)',
                  border: '1px solid rgba(106, 168, 255, 0.2)',
                }}
              >
                {t('badge')}
              </div>
            </div>

            {/* H1 with gradient underline */}
            <div className="animate-slide-up-2">
              <h1
                className="text-6xl font-bold leading-tight mb-4 relative"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: 'var(--prs-fg)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
              >
                {t('title')}
                <div
                  className="gradient-underline absolute -bottom-2 left-0 w-full animate-expand-underline"
                  style={{ transformOrigin: 'left' }}
                />
              </h1>
            </div>

            {/* Subheading */}
            <p
              className="text-xl leading-relaxed max-w-lg animate-slide-up-3"
              style={{ color: 'var(--prs-muted)' }}
            >
              {t('subtitle')}
            </p>

            {/* Single Primary CTA */}
            <div className="animate-slide-up-4">
              <a
                href="https://calendly.com/founrs/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-200 hover:scale-105 group"
                style={{
                  background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(106, 168, 255, 0.3)',
                }}
              >
                {t('primaryCta')}
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
            </div>

          </div>

          {/* Right Column - Clean Professional Visual */}
          <div className="col-span-6 relative">
            <div
              ref={containerRef}
              className="relative h-[600px] flex items-center justify-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Visual Container */}
              <div
                className="relative w-[500px] h-[350px] rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 18, 22, 0.9), rgba(10, 11, 13, 0.95))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06), 0 25px 80px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(106, 168, 255, 0.08), rgba(158, 124, 255, 0.08), rgba(255, 124, 203, 0.08))',
                  }}
                />

                {/* Central Focus Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative w-32 h-32"
                    style={{
                      transform: `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out',
                    }}
                  >
                    {/* Main geometric shape */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(45deg,
                          rgba(106, 168, 255, 0.9),
                          rgba(158, 124, 255, 0.95),
                          rgba(255, 124, 203, 0.9))`,
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(15px)',
                        boxShadow: `
                          0 0 60px rgba(106, 168, 255, 0.4),
                          inset 0 0 40px rgba(255, 255, 255, 0.15)
                        `,
                        animation: 'prismGlow 4s ease-in-out infinite alternate',
                      }}
                    />
                  </div>
                </div>

                {/* Floating accent elements */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`accent-${i}`}
                    className="absolute w-3 h-3 rounded-full opacity-40"
                    style={{
                      background: `var(--prs-a${(i % 3) + 1})`,
                      left: `${15 + (i % 4) * 25}%`,
                      top: `${20 + Math.floor(i / 4) * 25}%`,
                      animation: `floatCircle ${3 + (i % 3)}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                      filter: 'blur(0.5px)',
                    }}
                  />
                ))}

                {/* Grid pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Ambient glow effect */}
              <div
                className="absolute left-1/2 top-1/2 w-[400px] h-[400px] rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(158, 124, 255, 0.2) 0%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(40px)',
                  animation: 'prismGlow 6s ease-in-out infinite alternate',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}