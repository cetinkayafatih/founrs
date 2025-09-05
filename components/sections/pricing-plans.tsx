"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function PricingPlans() {
  const t = useTranslations();
  const locale = useLocale();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      key: 'starter',
      popular: false,
    },
    {
      key: 'pro',
      popular: true,
    },
    {
      key: 'enterprise',
      popular: false,
    },
  ];

  return (
    <Section>
      <Container>
        <MaxWidthWrapper>
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  !isYearly
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  isYearly
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {t('pricing.yearly')}
                <span className="ml-2 text-xs bg-mint text-gray-900 px-2 py-0.5 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const planData = t.raw(`pricing.plans.${plan.key}`);
              const features = planData.features;
              
              return (
                <motion.div
                  key={plan.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "relative",
                    plan.popular && "lg:scale-105"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-primary">
                        <Star className="w-4 h-4 mr-1" />
                        En Popüler
                      </Badge>
                    </div>
                  )}

                  <Card
                    className={cn(
                      "h-full",
                      plan.popular && "border-electric-blue/50 shadow-lg shadow-electric-blue/20"
                    )}
                  >
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl text-white mb-2">
                        {planData.name}
                      </CardTitle>
                      <p className="text-gray-400 mb-6">
                        {planData.description}
                      </p>
                      
                      <div className="mb-6">
                        {planData.price === 'Özel' ? (
                          <div className="text-3xl font-display font-bold text-white">
                            {planData.price} {planData.period}
                          </div>
                        ) : (
                          <div className="text-4xl font-display font-bold text-white">
                            {planData.currency}{isYearly ? Math.round(parseInt(planData.price) * 0.8) : planData.price}
                            <span className="text-lg text-gray-400 font-normal">
                              {planData.period}
                            </span>
                          </div>
                        )}
                        {isYearly && planData.price !== 'Özel' && (
                          <p className="text-sm text-gray-400 mt-2">
                            Yıllık ödeme ile %20 indirim
                          </p>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-4 mb-8">
                        {features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-mint mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link href={`/${locale}/contact`}>
                          {planData.price === 'Özel' ? 'İletişime Geç' : 'Başla'}
                        </Link>
                      </Button>
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
