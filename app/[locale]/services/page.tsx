import React from 'react';
import { ServicesHeroNew } from '@/components/sections/services-hero-new';
import { ServicesGridNew } from '@/components/sections/services-grid-new';
import { FinalCtaSection } from '@/components/sections/final-cta';

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroNew />
      <ServicesGridNew />
      <FinalCtaSection />
    </>
  );
}