import React from 'react';
import { getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata = createPageMetadata({
  title: 'Terms of Use',
  description:
    'Terms governing informational use of the Yuvaan College of Nursing website, admission guidelines, and external links.',
  path: '/legal/terms/',
});

export default function TermsPage() {
  const site = getSiteConfig();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Terms of Use', path: '/legal/terms/' },
        ])}
      />

      <PageBanner
        eyebrow="Legal Notice"
        title="Terms of Use"
        description="Guidelines governing access to course schedules, downloadable circulars, and admission notices on this portal."
        breadcrumbs={[{ label: 'Terms of Use' }]}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-[15px] leading-relaxed text-ink md:px-6">
          <h2 className="font-heading text-2xl font-semibold text-navy">
            1. Informational Purpose
          </h2>
          <p className="text-ink-muted">
            Content published on {site.name}&apos;s website—including syllabus summaries, academic
            calendars, fee figures, and seat matrices—is intended for general student and parent
            guidance. Final admission eligibility, examination rules, and fees remain governed by
            current notifications from the Indian Nursing Council (INC), State Nursing Council, and
            Affiliated Health University.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-navy">
            2. Statutory Admissions &amp; Academic Governance
          </h2>
          <p className="text-ink-muted">
            Admissions, clinical posting rosters, attendance thresholds, and examination rules are
            governed by official circulars issued by {site.name} in accordance with the Indian
            Nursing Council (INC) and Odisha Nurses &amp; Midwives Registration Council (ONMRC).
          </p>

          <h2 className="font-heading text-2xl font-semibold text-navy">
            3. Intellectual Property &amp; Acceptable Use
          </h2>
          <p className="text-ink-muted">
            Institutional emblems, prospectuses, and circulars belong to {site.name} and{' '}
            {site.about.trustName}. Automated scraping, spam submissions, or unauthorised
            republication is prohibited.
          </p>
        </div>
      </section>
    </>
  );
}
