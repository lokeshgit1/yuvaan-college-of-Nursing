import React from 'react';
import {
  getCourses,
  getFacilities,
  getNewsArticles,
  getPartners,
  getSiteConfig,
  getTestimonials,
} from '@/lib/content';
import { createPageMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { ApprovalsBar } from '@/components/sections/ApprovalsBar';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { JourneySteps } from '@/components/sections/JourneySteps';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { FacilitiesCarousel } from '@/components/sections/FacilitiesCarousel';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PartnersStrip } from '@/components/sections/PartnersStrip';
import { NewsSection } from '@/components/sections/NewsSection';
import { AdmissionsCtaBanner } from '@/components/sections/AdmissionsCtaBanner';

export const metadata = createPageMetadata({
  title: 'Yuvaan College of Nursing | GNM & ANM Nursing Courses in Khordha',
  description:
    'Explore General Nursing & Midwifery (GNM) and Auxiliary Nurse Midwifery (ANM) at Yuvaan College of Nursing, Mahura, Tamando, Khordha, Odisha.',
  path: '/',
});

export default function HomePage() {
  const site = getSiteConfig();
  const courses = getCourses({ featuredOnly: true });
  const facilities = getFacilities();
  const testimonials = getTestimonials();
  const partners = getPartners();
  const news = getNewsArticles(3);

  return (
    <>
      <HeroSection site={site} />
      <StatsStrip stats={site.stats} />
      <ApprovalsBar approvals={site.approvals} />
      <CoursesSection courses={courses} />
      <JourneySteps steps={site.journeySteps} />
      <WhyChooseSection items={site.whyChoose} />
      <FacilitiesCarousel facilities={facilities} />
      <TestimonialsSection testimonials={testimonials} />
      <PartnersStrip partners={partners} />
      <NewsSection articles={news} />
      <AdmissionsCtaBanner site={site} courses={courses} />
    </>
  );
}
