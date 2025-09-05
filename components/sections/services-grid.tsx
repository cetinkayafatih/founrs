"use client";

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Users, 
  DollarSign, 
  MessageCircle, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';

import { Section, Container, MaxWidthWrapper } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Workflow,
    title: 'İş Akışı Otomasyonu',
    description: 'Tekrarlayan görevleri otomatikleştirerek zaman tasarrufu sağlayın.',
    features: [
      'n8n workflow tasarımı',
      'Zapier entegrasyonları',
      'Özel otomasyon çözümleri',
      'API bağlantıları'
    ],
    badge: 'Popüler'
  },
  {
    icon: Users,
    title: 'CRM & Lead Yönetimi',
    description: 'Müşteri ilişkilerinizi otomatik sistemlerle güçlendirin.',
    features: [
      'HubSpot otomasyonu',
      'Pipedrive entegrasyonu',
      'Lead scoring',
      'E-posta pazarlama'
    ]
  },
  {
    icon: DollarSign,
    title: 'Finansal Süreçler',
    description: 'Fatura, ödeme ve muhasebe işlemlerini otomatikleştirin.',
    features: [
      'Fatura otomasyonu',
      'Ödeme takibi',
      'Gider yönetimi',
      'Mali raporlama'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Destek Botları',
    description: 'WhatsApp ve chat botlarıyla 7/24 müşteri desteği.',
    features: [
      'WhatsApp Business API',
      'Chatbot geliştirme',
      'Otomatik yanıtlar',
      'Ticket yönetimi'
    ]
  },
  {
    icon: BarChart3,
    title: 'Veri & Raporlama',
    description: 'Verilerinizi otomatik raporlara dönüştürün.',
    features: [
      'Google Sheets otomasyonu',
      'BigQuery entegrasyonu',
      'Dashboard oluşturma',
      'Otomatik raporlar'
    ]
  }
];

export function ServicesGrid() {
  const locale = useLocale();

  return (
    <Section>
      <Container>
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={index === 0 ? 'lg:col-span-2' : ''}
                >
                  <Card className="h-full hover:bg-white/10 transition-all duration-300 group relative">
                    {service.badge && (
                      <div className="absolute -top-3 -right-3">
                        <Badge className="bg-gradient-primary">
                          {service.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-mint rounded-full mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" size="sm" asChild className="group/btn">
                        <Link href={`/${locale}/contact`}>
                          Detayları Al
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
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
