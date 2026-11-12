import React from 'react';
import Link from 'next/link';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';
import { getFacilities, getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { FacilitiesCatalogClient } from '@/components/sections/FacilitiesCatalogClient';

export const metadata = createPageMetadata({
  title: 'Campus Facilities | Nursing Labs, Library, Hostel & Clinical Wards',
  description:
    'Explore Yuvaan College of Nursing facilities at Mahura (Near C.V. Raman College), Khordha: 35,000 sq. ft. SPA-approved campus, fire & pollution cleared block, nursing labs, and clinical training.',
  path: '/facilities/',
});

export default function FacilitiesPage() {
  const facilities = getFacilities();
  const site = getSiteConfig();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Facilities', path: '/facilities/' },
        ])}
      />

      <PageBanner
        eyebrow="Infrastructure & Campus Life"
        title="Designed for Safe Living & Hands-On Clinical Practice"
        description="Located at Mahura (Near C.V. Raman College), Tamando, Khordha across 35,000 sq. ft. (31,559 sq. ft. built-up area) with SPA approval, Registered Architect certification, Fire & Pollution clearances, and dedicated lab assistants."
        breadcrumbs={[{ label: 'Facilities' }]}
      >
        <Link
          href="/contact/"
          className="inline-flex min-h-[46px] items-center gap-2 rounded-btn bg-accent-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          <span>Schedule a Guided Campus Tour</span>
        </Link>
      </PageBanner>

      {/* Verified Campus Area & Clearances */}
      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-surface-mint/45 rounded-card border border-border p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
                Total Campus Area
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-navy">35,000 Sq. Ft.</p>
              <p className="text-xs text-ink-muted">Mahura, Near C.V. Raman College</p>
            </div>
            <div className="bg-surface-mint/45 rounded-card border border-border p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
                Total Built-Up Area
              </p>
              <p className="mt-1 font-heading text-xl font-bold text-navy">31,559 Sq. Ft.</p>
              <p className="text-xs text-ink-muted">{site.disclosure.buildingApproval}</p>
            </div>
            <div className="bg-surface-cream/70 rounded-card border border-border p-4 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                Verified Campus Safety &amp; Clinical Clearances
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-1.5 text-xs text-navy sm:grid-cols-2">
                {site.disclosure.clearances.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckCircle2
                      className="h-3.5 w-3.5 shrink-0 text-primary-dark"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-mint/40 py-12 md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <FacilitiesCatalogClient facilities={facilities} />
        </div>
      </section>
    </>
  );
}
