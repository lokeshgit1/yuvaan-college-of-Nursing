import React from 'react';
import { getNotices } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { NoticesClient } from '@/components/sections/NoticesClient';

export const metadata = createPageMetadata({
  title: 'Official Notice Board & Circulars',
  description:
    'Check latest admission circulars, examination timetables, scholarship updates, clinical rosters, and downloadable PDF notices from Yuvaan College of Nursing.',
  path: '/notices/',
});

export default function NoticesPage() {
  const notices = getNotices();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Notice Board', path: '/notices/' },
        ])}
      />

      <PageBanner
        eyebrow="Academic & Administrative Desk"
        title="Official Notice Board & Circulars"
        description="Filter official college circulars by category and download attached PDF notices from Yuvaan College of Nursing."
        breadcrumbs={[{ label: 'Notices' }]}
      />

      <section className="bg-surface-mint/40 py-12 md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <NoticesClient notices={notices} />
        </div>
      </section>
    </>
  );
}
