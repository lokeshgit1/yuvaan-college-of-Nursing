import React from 'react';
import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { getCourses, getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { buildTelHref, buildWhatsAppUrl } from '@/lib/utils';

export const metadata = createPageMetadata({
  title: 'Contact Us | Admissions Desk, Location & Campus Visit',
  description:
    'Reach Yuvaan College of Nursing admissions desk by phone, WhatsApp, email, or online enquiry form, or get directions to visit the campus.',
  path: '/contact/',
});

export default function ContactPage() {
  const site = getSiteConfig();
  const courses = getCourses();
  const waUrl = buildWhatsAppUrl(site.whatsappNumber, site.whatsappPrefill);
  const cleanEmail = site.admissionsEmail.replace(/\s*\[CONFIRM\]/g, '').trim();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ])}
      />

      <PageBanner
        eyebrow="Admissions & Counselling Desk"
        title="Get in Touch or Book a Campus Visit"
        description="Speak directly with our nursing counsellors, send an enquiry, or plan a weekday/Saturday visit with your family."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-surface-mint/40 py-12 md:py-16">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-12">
          {/* Left: Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              variant="full"
              heading="Send an Admission Enquiry"
              courses={courses.map((c) => ({ slug: c.slug, title: c.title }))}
            />
          </div>

          {/* Right: Direct Details + Map */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-card border border-border bg-white p-6 shadow-card">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-heading text-xl font-semibold text-navy">
                  Campus &amp; Helpline Details
                </h2>
                <span className="rounded-full bg-surface-mint px-2.5 py-0.5 text-[11px] font-semibold text-primary-dark">
                  Est. {site.about.establishedYear}
                </span>
              </div>

              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-blush text-accent-dark">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Admissions Helpline ({site.about.contactPersonName})
                    </p>
                    <a
                      href={buildTelHref(site.admissionsPhone)}
                      className="font-semibold text-navy hover:text-primary-dark"
                    >
                      {site.admissionsPhone}
                    </a>
                    <p className="text-xs text-ink-muted">
                      Office / Trust Desk:{' '}
                      <a
                        href={buildTelHref(site.alternatePhone)}
                        className="font-medium text-navy hover:text-primary-dark"
                      >
                        {site.alternatePhone}
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-mint text-primary-dark">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Email Desk
                    </p>
                    <a
                      href={`mailto:${cleanEmail}`}
                      className="break-all font-semibold text-navy hover:text-primary-dark"
                    >
                      {site.admissionsEmail}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-sun text-amber-900">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Campus Visiting Hours
                    </p>
                    <p className="font-medium text-navy">{site.officeHours}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-mint text-primary-dark">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Campus Address
                    </p>
                    <p className="leading-relaxed text-navy">{site.address}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-btn bg-[#128C7E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0e6f64]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Desk</span>
                </a>
                <a
                  href={site.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-btn border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:border-primary"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="h-4 w-4 text-primary-dark" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-card border border-border bg-white shadow-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5 text-xs font-semibold text-navy">
                <span>Near C.V. Raman College, Mahura, Tamando, Khordha, Odisha – 752054</span>
              </div>
              <iframe
                title="Yuvaan College of Nursing Location Map"
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
