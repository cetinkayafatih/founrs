"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { HeroIllustration } from '@/components/illustrations/hero-illustration';

export function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-royal-violet/5" />
      
      <Container>
        <MaxWidthWrapper maxWidth="6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex mb-6"
              >
                <Badge variant="blue" className="text-sm px-4 py-2">
                  {t('hero.badge')}
                </Badge>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
              >
                {t('hero.title')}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" asChild className="group">
                  <Link href={`/${locale}/contact`}>
                    {t('hero.primaryCta')}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" asChild className="group">
                  <Link href={`/${locale}/services`}>
                    <Play className="mr-2 h-5 w-5" />
                    {t('hero.secondaryCta')}
                  </Link>
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-sm text-gray-400 mb-4">
                  {t('hero.socialProof')}
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                  <span className="text-gray-500 font-medium">n8n</span>
                  <span className="text-gray-500 font-medium">Zapier</span>
                  <span className="text-gray-500 font-medium">Make</span>
                  <span className="text-gray-500 font-medium">HubSpot</span>
                  <span className="text-gray-500 font-medium">Supabase</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <HeroIllustration />
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
