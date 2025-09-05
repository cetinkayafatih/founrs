import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Logo } from '@/components/logo';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-[120px] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Column 2 - Navigate */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              {t('footer.navigate')}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/solutions`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('nav.solutions')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/pricing`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              {t('footer.connect')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://linkedin.com/company/founrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.social.linkedin')}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/founrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.social.twitter')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@founrs.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.social.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}