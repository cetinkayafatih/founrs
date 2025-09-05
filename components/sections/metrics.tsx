"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';

export function MetricsSection() {
  const t = useTranslations();
  const stats = t.raw('sections.metrics.stats');

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
              {t('sections.metrics.title')}
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat: any, index: number) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-300 font-medium text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
