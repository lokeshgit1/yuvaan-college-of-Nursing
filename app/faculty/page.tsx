import React from 'react';
import { getFaculty } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { FacultyCatalogClient } from '@/components/sections/FacultyCatalogClient';

export const metadata = createPageMetadata({
  title: 'Faculty & Academic Leadership',
  description:
    'Meet the Principal, Vice-Principal, and nursing tutors mentoring GNM and ANM students at Yuvaan College of Nursing, Mahura, Khordha.',
  path: '/faculty/',
});

export default function FacultyPage() {
  const faculty = getFaculty();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Faculty', path: '/faculty/' },
        ])}
      />

      <PageBanner
        eyebrow="Academic Mentors"
        title="Dedicated Nursing Faculty & Lab Support"
        description="Led by Principal Subhalaxmi Behera and Vice-Principal Debasis Sahu alongside six B.Sc. Nursing Lecturers and two B.Sc. Lab Assistants supporting GNM and ANM learners."
        breadcrumbs={[{ label: 'Faculty' }]}
      />

      <section className="bg-surface-cream/40 py-12 md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FacultyCatalogClient faculty={faculty} />
        </div>
      </section>
    </>
  );
}
