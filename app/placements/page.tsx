import React from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase, Building2, CheckCircle2, Stethoscope } from 'lucide-react';
import { getPartners, getPlacementData, getTestimonials } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { PartnersStrip } from '@/components/sections/PartnersStrip';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const metadata = createPageMetadata({
  title: 'Placements, Clinical Rotations & Alumni Careers',
  description:
    'Learn how Yuvaan College of Nursing prepares graduates for staff nurse, critical care, NORCET/government nursing officer, and international healthcare roles.',
  path: '/placements/',
});

export default function PlacementsPage() {
  const { highlights, sectors } = getPlacementData();
  const partners = getPartners();
  const testimonials = getTestimonials();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Placements & Careers', path: '/placements/' },
        ])}
      />

      <PageBanner
        eyebrow="Career & Clinical Support"
        title="From Supervised Clinical Rotations to Confident Nursing Careers"
        description="Our dedicated Placement & Career Cell connects eligible graduates with multi-specialty hospitals and prepares students for competitive nursing officer exams."
        breadcrumbs={[{ label: 'Placements & Alumni' }]}
      />

      {/* Highlights */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="bg-surface-mint/40 rounded-card border border-b-[3px] border-border border-b-primary p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <p className="font-heading text-4xl font-bold text-navy">{item.metric}</p>
                </div>
                <h2 className="mt-2 font-heading text-base font-semibold text-primary-dark">
                  {item.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-ink-muted">
            Note: We do not make exaggerated employment guarantees. Placement offers depend on
            clinical attendance, university examination clearance, state council registration, and
            hospital interview performance.
          </p>
        </div>
      </section>

      {/* Career Sectors */}
      <section className="bg-surface-mint/50 py-14 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              Career Pathways
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-navy">
              Where Yuvaan Nursing Graduates Serve
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {sectors.map((sec, idx) => {
              const Icon = idx === 0 ? Building2 : idx === 1 ? Stethoscope : Briefcase;
              return (
                <article
                  key={sec.title}
                  className="flex flex-col rounded-card border border-border bg-white p-6 shadow-card"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-mint text-primary-dark">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-navy">{sec.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {sec.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {sec.roles.map((role) => (
                      <li
                        key={role}
                        className="flex items-center gap-2 text-sm font-medium text-navy"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-primary-dark"
                          aria-hidden="true"
                        />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/admissions/"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-btn bg-accent-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
            >
              <span>Explore Admissions {new Date().getFullYear()}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <PartnersStrip partners={partners} />
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
