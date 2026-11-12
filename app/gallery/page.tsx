import React from 'react';
import { getGalleryItems } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { GalleryLightboxClient } from '@/components/sections/GalleryLightboxClient';

export const metadata = createPageMetadata({
  title: 'Student Life & Campus Gallery',
  description:
    'Explore photographs from Yuvaan College of Nursing laboratories, clinical hospital rotations, Lamp Lighting ceremonies, community camps, and library spaces.',
  path: '/gallery/',
});

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery/' },
        ])}
      />

      <PageBanner
        eyebrow="Campus & Student Life"
        title="Life Inside Yuvaan College of Nursing"
        description="Browse campus laboratories, hospital postings, outreach camps, and student ceremonies. Click any photograph for full-screen view."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <GalleryLightboxClient items={items} />
        </div>
      </section>
    </>
  );
}
