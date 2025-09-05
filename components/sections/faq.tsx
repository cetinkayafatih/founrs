"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const t = useTranslations();
  const faqItems = t.raw('sections.faq.items');

  return (
    <Section className="bg-slate-900/30">
      <Container>
        <MaxWidthWrapper maxWidth="4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {t('sections.faq.title')}
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item: any, index: number) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg px-6 bg-white/5"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-medium text-white">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
