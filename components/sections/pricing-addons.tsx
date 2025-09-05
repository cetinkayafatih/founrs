"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

export function PricingAddons() {
  const t = useTranslations();
  const addons = t.raw('pricing.addons.items');

  return (
    <Section className="bg-slate-900/30">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {t('pricing.addons.title')}
            </h2>
          </motion.div>

          {/* Addons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon: any, index: number) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-2xl font-display font-bold text-gradient">
                      {addon.price}
                    </p>
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
