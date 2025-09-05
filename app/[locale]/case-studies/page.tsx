import React from 'react';
// import { allCaseStudies } from 'contentlayer/generated';
import { CaseStudiesHero } from '@/components/sections/case-studies-hero';
import { CaseStudiesGrid } from '@/components/sections/case-studies-grid';

interface CaseStudiesPageProps {
  params: {
    locale: string;
  };
}

export default async function CaseStudiesPage({ params: { locale } }: CaseStudiesPageProps) {
  // Filter case studies by locale
  const caseStudies: any[] = []; // Temporary empty array
  // const caseStudies = allCaseStudies
  //   .filter(study => study.locale === locale)
  //   .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid caseStudies={caseStudies} />
    </>
  );
}
