import React from 'react';
import { getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'How Yuvaan College of Nursing collects, uses, and safeguards student and parent enquiry information.',
  path: '/legal/privacy/',
});

export default function PrivacyPolicyPage() {
  const site = getSiteConfig();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Legal', path: '/legal/privacy/' },
          { name: 'Privacy Policy', path: '/legal/privacy/' },
        ])}
      />

      <PageBanner
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        description="Committed to handling student and guardian admission enquiries with respect and transparency."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-[15px] leading-relaxed text-ink md:px-6">
          <div className="rounded-card border border-amber-200 bg-amber-50/70 p-4 text-sm text-amber-950">
            <strong>Notice:</strong> Review and customise this template with your Trust&apos;s legal
            counsel and verified contact address before final publication.
          </div>

          <h2 className="font-heading text-2xl font-semibold text-navy">
            1. Information We Collect
          </h2>
          <p className="text-ink-muted">
            When you voluntarily submit an admission enquiry form on our website, we collect your
            name, mobile number, email address, city/district, preferred nursing programme, and any
            message you share. This static website does not run user accounts or store uploaded
            documents on a database server.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-navy">
            2. How Enquiry Information Is Used
          </h2>
          <p className="text-ink-muted">
            Details submitted through our enquiry forms are delivered directly to the {site.name}{' '}
            Admissions Desk email inbox solely to respond to your counselling query, share
            prospectus/eligibility details, or schedule a campus visit. We do not sell, rent, or
            share applicant contact information with unrelated third-party marketers.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-navy">
            3. Analytics &amp; Browser Storage
          </h2>
          <p className="text-ink-muted">
            We store your cookie preference choice locally in your browser. Where Google Analytics
            (GA4) is enabled by the institution, anonymised aggregate page-visit counts help improve
            website clarity and navigation.
          </p>

          <h2 className="font-heading text-2xl font-semibold text-navy">
            4. Data Deletion &amp; Contact
          </h2>
          <p className="text-ink-muted">
            To request correction or deletion of enquiry emails you have submitted, please write to{' '}
            <strong>{site.email}</strong> or call <strong>{site.phone}</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
