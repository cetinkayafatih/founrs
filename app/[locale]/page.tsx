import React from 'react';
import { Hero } from '@/components/Hero';
import { LogoWallSection } from '@/components/sections/logo-wall';
import { ProblemSolutionSection } from '@/components/sections/problem-solution';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { ServicesSection } from '@/components/sections/services-new';
import { WhyFounrsSection } from '@/components/sections/why-founrs';
import { FinalCtaSection } from '@/components/sections/final-cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoWallSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <ServicesSection />
      <WhyFounrsSection />
      <FinalCtaSection />
    </>
  );
}
