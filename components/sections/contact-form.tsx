"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, XCircle } from 'lucide-react';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { submitContactForm } from '@/lib/actions';

export function ContactForm() {
  const t = useTranslations('contactPage.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const useCases = t.raw('../contact.useCases');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const selectedUseCase = watch('useCase');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitContactForm(data);
      setSubmitResult({
        success: result.success,
        message: result.success ? result.message! : result.error!,
      });

      if (result.success) {
        reset();
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="bg-slate-900/30">
      <Container>
        <MaxWidthWrapper maxWidth="4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        {t('fields.name')} *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder={t('placeholders.name')}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        {t('fields.email')} *
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder={t('placeholders.email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        {t('fields.company')} *
                      </label>
                      <Input
                        {...register('company')}
                        placeholder={t('placeholders.company')}
                        className={errors.company ? 'border-red-500' : ''}
                      />
                      {errors.company && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    {/* Use Case */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        {t('fields.useCase')} *
                      </label>
                      <Select
                        onValueChange={(value) => setValue('useCase', value)}
                        value={selectedUseCase}
                      >
                        <SelectTrigger
                          className={errors.useCase ? 'border-red-500' : ''}
                        >
                          <SelectValue placeholder={t('placeholders.useCase')} />
                        </SelectTrigger>
                        <SelectContent>
                          {useCases.map((useCase: string) => (
                            <SelectItem key={useCase} value={useCase}>
                              {useCase}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.useCase && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.useCase.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      {t('fields.message')} *
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder={t('placeholders.message')}
                      rows={6}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Result */}
                  {submitResult && (
                    <div
                      className={`flex items-center space-x-2 p-4 rounded-lg ${
                        submitResult.success
                          ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                          : 'bg-red-500/10 border border-red-500/20 text-red-400'
                      }`}
                    >
                      {submitResult.success ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                      <span>{submitResult.message}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                                              <span className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {t('submitting')}
                      </span>
                    ) : (
                      <>
                        {t('submit')}
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-gray-400 text-sm text-center">
                    {t('privacyText')}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </MaxWidthWrapper>
      </Container>
    </Section>
  );
}
