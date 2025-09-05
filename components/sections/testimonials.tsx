"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';

export function TestimonialsSection() {
  const t = useTranslations();
  const testimonials = t.raw('sections.testimonials.items');

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
              {t('sections.testimonials.title')}
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-electric-blue mb-4" />
                      <p className="text-lg text-gray-200 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-semibold">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
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
