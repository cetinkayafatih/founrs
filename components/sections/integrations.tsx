"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { LogoCloud } from '@/components/ui/logo-cloud';

export function IntegrationsSection() {
  const t = useTranslations('sections.integrations');

  const integrations = [
    { name: 'n8n', logo: '/logos/n8n.svg' },
    { name: 'Zapier', logo: '/logos/zapier.svg' },
    { name: 'Make', logo: '/logos/make.svg' },
    { name: 'Slack', logo: '/logos/slack.svg' },
    { name: 'Google Workspace', logo: '/logos/google.svg' },
    { name: 'WhatsApp', logo: '/logos/whatsapp.svg' },
    { name: 'Supabase', logo: '/logos/supabase.svg' },
    { name: 'Notion', logo: '/logos/notion.svg' },
    { name: 'HubSpot', logo: '/logos/hubspot.svg' },
    { name: 'Airtable', logo: '/logos/airtable.svg' },
    { name: 'Shopify', logo: '/logos/shopify.svg' },
    { name: 'Stripe', logo: '/logos/stripe.svg' },
  ];

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {t('sections.integrations.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('sections.integrations.subtitle')}
            </p>
          </motion.div>

          {/* Logo Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LogoCloud logos={integrations} />
          </motion.div>

          {/* Additional text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-lg">
              {t('additionalText')}
            </p>
          </motion.div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
