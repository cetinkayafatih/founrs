"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Post } from 'contentlayer/generated';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate, getReadingTime } from '@/lib/utils';

interface BlogPostProps {
  post: Post;
  MDXContent: React.ComponentType;
}

export function BlogPost({ post, MDXContent }: BlogPostProps) {
  const locale = useLocale();

  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-8 lg:pt-40 lg:pb-12">
        <Container>
          <MaxWidthWrapper maxWidth="4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Button */}
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href={`/${locale}/blog`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Blog'a Dön
                </Link>
              </Button>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="mint">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-6 text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {getReadingTime(post.body.raw)} dakika okuma
                  </div>
                  <span>Yazar: {post.author}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Paylaş
                </Button>
              </div>

              {/* Featured Image */}
              {post.image && (
                <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-royal-violet/20 rounded-2xl mb-8" />
              )}
            </motion.div>
          </MaxWidthWrapper>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-0">
        <Container>
          <MaxWidthWrapper maxWidth="4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg mx-auto"
            >
              <MDXContent />
            </motion.div>
          </MaxWidthWrapper>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-900/30">
        <Container>
          <MaxWidthWrapper maxWidth="4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                İş süreçlerinizi otomatikleştirmeye hazır mısınız?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Uzmanlarımızla ücretsiz keşif görüşmesi yapın.
              </p>
              <Button size="lg" asChild>
                <Link href={`/${locale}/contact`}>
                  Ücretsiz Görüşme
                </Link>
              </Button>
            </motion.div>
          </MaxWidthWrapper>
        </Container>
      </Section>
    </>
  );
}
