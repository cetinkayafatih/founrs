import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prismr.com';
  
  const robots = `User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

Sitemap: ${baseUrl}/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
