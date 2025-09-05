"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Post } from 'contentlayer/generated';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate, getReadingTime } from '@/lib/utils';

interface BlogGridProps {
  posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const locale = useLocale();
  const t = useTranslations('blogPage.grid');
  const tCommon = useTranslations('common');

  if (posts.length === 0) {
    return (
      <Section>
        <Container>
          <MaxWidthWrapper>
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                {t('emptyState')}
              </p>
            </div>
          </MaxWidthWrapper>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader className="p-0">
                    {post.image && (
                      <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-royal-violet/20 rounded-t-2xl" />
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="mint" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-display font-semibold text-white mb-3 line-clamp-2 group-hover:text-gradient transition-colors">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {getReadingTime(post.body.raw)} {t('readingTimeUnit')}
                        </div>
                      </div>
                    </div>

                    {/* Read More */}
                    <Button variant="ghost" size="sm" asChild className="group/btn p-0 h-auto">
                      <Link href={`/${locale}/blog/${post.slug}`}>
                        {tCommon('readMore')}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
