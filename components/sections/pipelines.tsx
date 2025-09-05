"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, DollarSign, MessageCircle } from 'lucide-react';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const icons = [Users, DollarSign, MessageCircle];

export function PipelinesSection() {
  const t = useTranslations('sections.pipelines');
  const examples = t.raw('examples');

  return (
    <Section>
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
              {t('sections.pipelines.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('sections.pipelines.subtitle')}
            </p>
          </motion.div>

          {/* Pipeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example: any, index: number) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full hover:bg-white/10 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">
                        {example.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        {example.description}
                      </p>
                      <div className="mt-4">
                        <Badge variant="mint">
                          {t('badgeText')}
                        </Badge>
                      </div>
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
