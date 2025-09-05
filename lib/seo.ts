import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  locale?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateSEO({
  title = 'PRISMR — Automate & Harmonize',
  description = 'İş süreçlerinizi otomatikleştirin, büyümeye odaklanın. n8n, Zapier ve özel entegrasyonlarla uçtan uca otomasyon çözümleri.',
  keywords = ['otomasyon', 'iş süreçleri', 'n8n', 'zapier', 'entegrasyon', 'dijital dönüşüm'],
  image = '/og-image.jpg',
  url = 'https://prismr.com',
  locale = 'tr_TR',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: SEOProps = {}): Metadata {
  const siteName = 'PRISMR';
  
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    
    openGraph: {
      type,
      title,
      description,
      url,
      siteName,
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@prismr',
      site: '@prismr',
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
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
    },
    
    alternates: {
      canonical: url,
      languages: {
        'tr-TR': `${url}/tr`,
        'en-US': `${url}/en`,
      },
    },
  };
}

export function generateBlogSEO({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  author,
  tags,
  locale = 'tr',
}: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  tags: string[];
  locale: string;
}): Metadata {
  const url = `https://prismr.com/${locale}/blog/${slug}`;
  const image = `/blog/${slug}-og.jpg`;
  
  return generateSEO({
    title: `${title} | PRISMR Blog`,
    description,
    keywords: [...tags, 'automation', 'blog', 'prismr'],
    image,
    url,
    locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    type: 'article',
    publishedTime,
    modifiedTime,
    author,
  });
}

export function generateCaseStudySEO({
  title,
  description,
  slug,
  client,
  industry,
  publishedTime,
  locale = 'tr',
}: {
  title: string;
  description: string;
  slug: string;
  client: string;
  industry: string;
  publishedTime: string;
  locale: string;
}): Metadata {
  const url = `https://prismr.com/${locale}/case-studies/${slug}`;
  const image = `/case-studies/${slug}-og.jpg`;
  
  return generateSEO({
    title: `${title} | Case Study | PRISMR`,
    description,
    keywords: ['vaka çalışması', 'case study', industry.toLowerCase(), client.toLowerCase(), 'otomasyon', 'başarı hikayesi'],
    image,
    url,
    locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    type: 'article',
    publishedTime,
  });
}

// JSON-LD structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PRISMR',
    description: 'Intelligent workflow automation',
    url: 'https://prismr.com',
    logo: 'https://prismr.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-555-555-5555',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [
      'https://linkedin.com/company/prismr',
      'https://twitter.com/prismr',
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PRISMR',
    url: 'https://prismr.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://prismr.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
