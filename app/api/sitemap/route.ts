import { NextResponse } from 'next/server';
// import { allPosts, allCaseStudies } from 'contentlayer/generated';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prismr.com';
  
  // Static pages
  const staticPages = [
    '',
    '/tr',
    '/en',
    '/tr/services',
    '/en/services',
    '/tr/solutions',
    '/en/solutions',
    '/tr/pricing',
    '/en/pricing',
    '/tr/contact',
    '/en/contact',
    '/tr/blog',
    '/en/blog',
    '/tr/case-studies',
    '/en/case-studies',
  ];

  // Blog posts
  const blogPages: string[] = []; // Temporary empty
  // const blogPages = allPosts.map(post => 
  //   `/${post.locale}/blog/${post.slug}`
  // );

  // Case studies
  const caseStudyPages: string[] = []; // Temporary empty
  // const caseStudyPages = allCaseStudies.map(caseStudy => 
  //   `/${caseStudy.locale}/case-studies/${caseStudy.slug}`
  // );

  const allPages = [...staticPages, ...blogPages, ...caseStudyPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(page => {
    const url = `${baseUrl}${page}`;
    const lastmod = new Date().toISOString();
    const priority = page === '' || page === '/tr' || page === '/en' ? '1.0' : '0.8';
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
