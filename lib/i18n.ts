import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['tr', 'en'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locale = requestLocale || 'tr';
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../locales/${locale}/common.json`)).default
  };
});
