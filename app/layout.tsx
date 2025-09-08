import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'

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
  title: {
    default: 'FOUNRS — AI Systems & Ops',
    template: '%s | FOUNRS',
  },
  description:
    'We design the intelligent automation foundations that power your growth. Beyond simple zaps—robust, scalable n8n systems delivered in 7 days.',
  keywords: [
    'automation',
    'n8n',
    'AI systems',
    'workflow automation',
    'business process',
  ],
  authors: [{ name: 'FOUNRS' }],
  creator: 'FOUNRS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
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
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOUNRS — AI Systems & Ops',
    description:
      'We design the intelligent automation foundations that power your growth.',
    images: ['/og-image.jpg'],
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
      <head>
        <link rel="alternate" hrefLang="en" href="https://founrs.com" />
        <link rel="alternate" hrefLang="tr" href="https://founrs.com/tr" />
        <link rel="canonical" href="https://founrs.com" />
      </head>
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  )
}