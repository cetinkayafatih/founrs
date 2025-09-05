"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

export function ContactHero() {
  const t = useTranslations('contactPage.hero');

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t('methods.whatsapp.title'),
      description: t('methods.whatsapp.description'),
      action: t('methods.whatsapp.action'),
      href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
    },
    {
      icon: Mail,
      title: t('methods.email.title'),
      description: t('methods.email.description'),
      action: t('methods.email.action'),
      href: 'mailto:hi@prismr.com',
    },
    {
      icon: Phone,
      title: t('methods.phone.title'),
      description: t('methods.phone.description'),
      action: t('methods.phone.action'),
      href: 'tel:+905555555555',
    },
  ];

  return (
    <Section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <Container>
        <MaxWidthWrapper>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:bg-white/10 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {method.description}
                      </p>
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-electric-blue hover:text-royal-violet transition-colors font-medium"
                      >
                        {method.action}
                      </a>
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
