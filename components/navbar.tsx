"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.services'), href: `/${locale}/services` },
    { name: t('nav.solutions'), href: `/${locale}/solutions` },
    { name: t('nav.pricing'), href: `/${locale}/pricing` },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled 
          ? 'rgba(10, 11, 13, 0.8)' 
          : 'rgba(10, 11, 13, 0.4)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : '1px solid transparent',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo href={`/${locale}`} size="lg" />
          </div>

          {/* Center Navigation - Premium Style */}
          <div className="hidden lg:flex lg:items-center lg:space-x-12">
            {navigation.map((item, index) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="group relative py-2 px-1 block"
                >
                  <span 
                    className="text-sm font-medium transition-all duration-300 group-hover:text-white"
                    style={{ color: 'var(--prs-fg)' }}
                  >
                    {item.name}
                  </span>
                  
                  {/* Hover underline */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300"
                    style={{ transformOrigin: 'center' }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Right Actions - Premium Style */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Language Switcher */}
            <Link
              href={locale === 'tr' ? '/en' : '/tr'}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
              style={{ color: 'var(--prs-muted)' }}
            >
              <Globe size={16} />
              <span className="text-sm font-medium uppercase">
                {locale === 'tr' ? 'EN' : 'TR'}
              </span>
            </Link>

            {/* Book a Call Button */}
            <a
              href="https://calendly.com/founrs/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 overflow-hidden hover:scale-105"
              style={{
                background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                color: 'white',
                boxShadow: '0 4px 20px rgba(106, 168, 255, 0.25)',
              }}
            >
              <span className="relative z-10">{t('nav.contact')}</span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* Menu Dots Button */}
            <button
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/5"
              style={{ color: 'var(--prs-muted)' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="4" cy="10" r="1.5" fill="currentColor" />
                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                <circle cx="16" cy="10" r="1.5" fill="currentColor" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/5 active:scale-95"
              style={{ color: 'var(--prs-fg)' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="lg:hidden transition-all duration-300"
            style={{
              background: 'rgba(10, 11, 13, 0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="max-w-[1440px] mx-auto px-[120px] py-8">
              <div className="space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  {navigation.map((item, index) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="group block py-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <span 
                          className="text-lg font-medium transition-all duration-200 group-hover:text-white"
                          style={{ color: 'var(--prs-fg)' }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  {/* Language Switcher */}
                  <Link
                    href={locale === 'tr' ? '/en' : '/tr'}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                    style={{ color: 'var(--prs-muted)' }}
                  >
                    <Globe size={16} />
                    <span className="text-sm font-medium uppercase">
                      {locale === 'tr' ? 'EN' : 'TR'}
                    </span>
                  </Link>

                  {/* Book a Call Button */}
                  <a
                    href="https://calendly.com/founrs/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'linear-gradient(12deg, var(--prs-a1), var(--prs-a2), var(--prs-a3))',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(106, 168, 255, 0.25)',
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.contact')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
