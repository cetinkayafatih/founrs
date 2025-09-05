import React from 'react';
import { WhyN8nHero } from '@/components/sections/why-n8n-hero';
import { N8nComparison } from '@/components/sections/n8n-comparison';
import { N8nBenefits } from '@/components/sections/n8n-benefits';
import { FinalCtaN8nSection } from '@/components/sections/final-cta-n8n';

export default function SolutionsPage() {
  return (
    <>
      <WhyN8nHero />
      <N8nComparison />
      <N8nBenefits />
      <FinalCtaN8nSection />
    </>
  );
}
