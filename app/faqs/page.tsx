import React from 'react';
import Link from 'next/link';
import { getFAQs } from '@/lib/content';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { FaqsClient } from '@/components/sections/FaqsClient';

export const metadata = createPageMetadata({
  title: 'Frequently Asked Questions (FAQs)',
  description:
    'Answers to common parent and student questions about GNM and ANM eligibility, fees, scholarships, hostel safety, and hospital training at Yuvaan College of Nursing.',
  path: '/faqs/',
});

export default function FaqsPage() {
  const faqs = getFAQs();

  return (
    <>
      <JsonLd data={buildFaqJsonLd(faqs)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'FAQs', path: '/faqs/' },
        ])}
      />

      <PageBanner
        eyebrow="Student & Parent Helpdesk"
        title="Frequently Asked Questions"
        description="Clear answers on nursing admissions, statutory approvals, clinical rotations, scholarships, and residential hostel facilities."
        breadcrumbs={[{ label: 'FAQs' }]}
      />

      <section className="bg-surface-cream/50 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <FaqsClient faqs={faqs} />

          <div className="mt-10 rounded-card border border-border bg-white p-6 text-center shadow-soft">
            <p className="font-heading text-lg font-semibold text-navy">
              Still have a question for our admissions team?
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Call us directly or book a guided campus visit to inspect labs and meet faculty.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact/"
                className="inline-flex min-h-[44px] items-center rounded-btn bg-accent-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
              >
                Contact Admissions Desk
              </Link>
              <Link
                href="/admissions/"
                className="inline-flex min-h-[44px] items-center rounded-btn border border-border px-5 py-2.5 text-sm font-semibold text-navy hover:border-primary"
              >
                View Admission Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
