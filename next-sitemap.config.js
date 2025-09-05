/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://prismr.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*'],
  alternateRefs: [
    {
      href: 'https://prismr.com/tr',
      hreflang: 'tr',
    },
    {
      href: 'https://prismr.com/en',
      hreflang: 'en',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },
};
