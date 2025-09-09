import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

import './globals.css'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://founrs.com'),
  title: {
    default: 'FOUNRS — AI Systems & Ops',
    template: '%s — FOUNRS',
  },
  description:
    'We design the intelligent automation foundations that power your growth. Beyond simple zaps—robust, scalable n8n systems delivered in 7 days.',
  keywords: [
    'automation',
    'n8n',
    'AI systems',
    'workflow automation',
    'business process automation',
    'digital transformation',
    'system integration',
    'operations automation',
  ],
  authors: [{ name: 'FOUNRS Team' }],
  creator: 'FOUNRS',
  publisher: 'FOUNRS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'tr-TR': '/tr-TR',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR'],
    url: 'https://founrs.com',
    siteName: 'FOUNRS',
    title: 'FOUNRS — AI Systems & Ops',
    description:
      'We design the intelligent automation foundations that power your growth.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FOUNRS — AI Systems & Ops',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOUNRS — AI Systems & Ops',
    description:
      'We design the intelligent automation foundations that power your growth.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head />
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  )
}