import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../lib/i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locale = requestLocale || 'tr';
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../locales/${locale}/common.json`)).default
  };
});
