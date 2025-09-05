import React from 'react';
import { PricingHero } from '@/components/sections/pricing-hero';
import { PricingPhilosophy } from '@/components/sections/pricing-philosophy';
import { PricingGuide } from '@/components/sections/pricing-guide';
import { PricingCta } from '@/components/sections/pricing-cta';

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPhilosophy />
      <PricingGuide />
      <PricingCta />
    </>
  );
}
