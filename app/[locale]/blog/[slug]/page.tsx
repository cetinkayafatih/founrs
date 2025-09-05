import React from 'react';
import { notFound } from 'next/navigation';
// import { allPosts } from 'contentlayer/generated';
// import { getMDXComponent } from 'next-contentlayer/hooks';

import { BlogPost } from '@/components/sections/blog-post';

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function BlogPostPage({ params: { locale, slug } }: BlogPostPageProps) {
  
  // Temporary redirect to blog list
  notFound();
  
  // const post = allPosts.find(
  //   (post) => post.slug === slug && post.locale === locale
  // );

  // if (!post) {
  //   notFound();
  // }

  // const MDXContent = getMDXComponent(post.body.code);

  // return <BlogPost post={post} MDXContent={MDXContent} />;
}

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  // const posts = allPosts.filter(post => post.locale === locale);
  
  return []; // Empty for now
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }));
}
