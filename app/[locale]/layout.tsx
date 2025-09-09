import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import '../globals.css'
import getMessages from '@/i18n/getMessages'
import { locales, type Locale } from '@/i18n/routing'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale
  const t = await getTranslations({ locale, namespace: 'common' })
  
  const title = `${t('brand')} — ${t('tagline')}`
  const description = locale === 'tr' 
    ? 'Büyümenizi güçlendiren akıllı otomasyon temelleri tasarlıyoruz. Basit zap\'lerin ötesinde—sağlam, ölçeklenebilir n8n sistemleri 7 günde teslim.'
    : 'We design the intelligent automation foundations that power your growth. Beyond simple zaps—robust, scalable n8n systems delivered in 7 days.'
  
  const keywords = locale === 'tr' 
    ? [
        'otomasyon',
        'n8n',
        'AI sistemler', 
        'iş akışı otomasyonu',
        'iş süreci otomasyonu',
        'dijital dönüşüm',
        'sistem entegrasyonu',
        'operasyon otomasyonu',
      ]
    : [
        'automation',
        'n8n',
        'AI systems',
        'workflow automation', 
        'business process automation',
        'digital transformation',
        'system integration',
        'operations automation',
      ]

  return {
    metadataBase: new URL('https://founrs.com'),
    title: {
      default: title,
      template: '%s — FOUNRS',
    },
    description,
    keywords,
    authors: [{ name: 'FOUNRS Team' }],
    creator: 'FOUNRS',
    publisher: 'FOUNRS',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'tr': '/tr',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      alternateLocale: locale === 'tr' ? ['en_US'] : ['tr_TR'],
      url: `https://founrs.com/${locale}`,
      siteName: 'FOUNRS',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
      creator: '@founrs',
      site: '@founrs',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      other: {
        'msvalidate.01': 'your-bing-verification-code',
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale as Locale

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages(locale)

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="alternate" hrefLang="en" href="https://founrs.com/en" />
        <link rel="alternate" hrefLang="tr" href="https://founrs.com/tr" />
        <link rel="alternate" hrefLang="x-default" href="https://founrs.com/en" />
      </head>
      <body className="bg-bg text-fg antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}