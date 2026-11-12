import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata = createPageMetadata({
  title: 'Anti-Ragging Policy & Helpline',
  description:
    'Zero-tolerance anti-ragging policy, national 24x7 helpline 1800-180-5522, and campus nodal officer contacts at Yuvaan College of Nursing.',
  path: '/legal/anti-ragging/',
});

export default function AntiRaggingPage() {
  const site = getSiteConfig();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Anti-Ragging Policy', path: '/legal/anti-ragging/' },
        ])}
      />

      <PageBanner
        eyebrow="Campus Safety & Student Welfare"
        title="Zero-Tolerance Anti-Ragging Notice"
        description="Yuvaan College of Nursing maintains a strict ragging-free academic and hostel environment in accordance with UGC and INC regulations."
        breadcrumbs={[{ label: 'Anti-Ragging Policy' }]}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div className="border-accent/30 bg-surface-blush/50 rounded-card border-2 p-6">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-accent-dark" aria-hidden="true" />
              <div>
                <h2 className="font-heading text-xl font-bold text-navy">
                  Strict Zero-Tolerance Policy
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  Ragging in any form—physical, verbal, psychological, or digital—within the college
                  campus, clinical wards, transport buses, or residential hostels is a punishable
                  offence. Verified complaints lead to immediate suspension, expulsion, and police
                  reporting under applicable statutory provisions.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-surface-mint/40 rounded-card border border-border p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                24×7 National Helpline
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-navy">
                {site.disclosure.antiRaggingHelpline}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Toll-free national anti-ragging helpline • Email: helpline@antiragging.in
              </p>
            </div>

            <div className="rounded-card border border-border bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
                  Campus Anti-Ragging Nodal Officer
                </p>
              </div>
              <p className="mt-2 inline-flex items-center gap-2 font-heading text-lg font-semibold text-navy">
                <Phone className="h-4 w-4 text-primary-dark" aria-hidden="true" />
                <span>{site.disclosure.nodalOfficerPhone}</span>
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                Email: {site.disclosure.nodalOfficerEmail}
              </p>
            </div>
          </div>

          <div className="rounded-card border border-border bg-white p-6 shadow-soft">
            <h2 className="font-heading text-xl font-semibold text-navy">
              Student &amp; Parent Undertaking Requirement
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              At admission, every student and parent/guardian submits a signed Anti-Ragging
              Affidavit as prescribed by UGC/INC guidelines. Dedicated hostel wardens and
              Anti-Ragging Squad members conduct routine campus inspections and orientation
              sessions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
