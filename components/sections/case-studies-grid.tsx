"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { CaseStudy } from 'contentlayer/generated';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  const locale = useLocale();
  const t = useTranslations('caseStudiesPage.grid');

  if (caseStudies.length === 0) {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-royal-violet/20 rounded-t-2xl flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-white/60" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Industry Badge */}
                    <Badge variant="blue" className="mb-4">
                      {caseStudy.industry}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-gradient transition-colors">
                      {caseStudy.title}
                    </h3>

                    {/* Client */}
                    <p className="text-electric-blue font-medium mb-3">
                      {caseStudy.client}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {caseStudy.description}
                    </p>

                    {/* Challenge */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">{t('challengeLabel')}:</h4>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Results Preview */}
                    {caseStudy.results && caseStudy.results.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-medium mb-2">{t('resultsLabel')}:</h4>
                        <ul className="space-y-1">
                          {caseStudy.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="text-mint text-sm flex items-start">
                              <span className="mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                          {caseStudy.results.length > 2 && (
                            <li className="text-gray-400 text-sm">
                              +{caseStudy.results.length - 2} {t('moreResults')}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(caseStudy.date)}
                      </div>
                    </div>

                    {/* Read More */}
                    <Button variant="outline" asChild className="w-full group/btn">
                      <Link href={`/${locale}/case-studies/${caseStudy.slug}`}>
                        {t('readMore')}
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
