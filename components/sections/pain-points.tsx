"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, TrendingDown, Unlink } from 'lucide-react';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

const icons = [Clock, AlertCircle, TrendingDown, Unlink];

export function PainPointsSection() {
  const t = useTranslations();
  const painPoints = t.raw('sections.painPoints.points');

  return (
    <Section className="bg-slate-900/50">
      <Container>
        <MaxWidthWrapper>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {t('sections.painPoints.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('sections.painPoints.subtitle')}
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point: any, index: number) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:bg-white/10 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
