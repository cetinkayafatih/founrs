import React from 'react';
// import { allPosts } from 'contentlayer/generated';
import { BlogHero } from '@/components/sections/blog-hero';
import { BlogGrid } from '@/components/sections/blog-grid';

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  // Filter posts by locale
  const posts: any[] = []; // Temporary empty array
  // const posts = allPosts
  //   .filter(post => post.locale === locale)
  //   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <BlogHero />
      <BlogGrid posts={posts} />
    </>
  );
}
