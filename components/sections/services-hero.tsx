"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';

export function ServicesHero() {
  const t = useTranslations();

  return (
    <Section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <Container>
        <MaxWidthWrapper maxWidth="4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {t('nav.services')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              İş süreçlerinizi otomatikleştiren kapsamlı çözümler. 
              Her sektöre özel otomasyon hizmetleri sunuyoruz.
            </p>
          </motion.div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
