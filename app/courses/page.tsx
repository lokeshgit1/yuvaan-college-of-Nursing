import React from 'react';
import { getCourses } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { CoursesCatalogClient } from '@/components/sections/CoursesCatalogClient';

export const metadata = createPageMetadata({
  title: 'Nursing Courses | GNM & ANM Programmes',
  description:
    'Explore General Nursing & Midwifery (GNM) and Auxiliary Nurse Midwifery (ANM) at Yuvaan College of Nursing, Mahura, Khordha with eligibility, seats, syllabus, and clinical training.',
  path: '/courses/',
});

export default function CoursesPage() {
  const courses = getCourses();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Courses', path: '/courses/' },
        ])}
      />

      <PageBanner
        eyebrow="Academic Programmes"
        title="GNM & ANM Nursing Courses"
        description="Yuvaan College of Nursing offers two dedicated nursing diploma programmes—GNM (General Nursing & Midwifery) and ANM (Auxiliary Nurse Midwifery)."
        breadcrumbs={[{ label: 'Courses' }]}
      />

      <section className="bg-surface-mint/50 py-12 md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <CoursesCatalogClient courses={courses} />
        </div>
      </section>
    </>
  );
}
