import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle2, Compass, HeartHandshake, ShieldCheck, Target } from 'lucide-react';
import { getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { FadeInView } from '@/components/ui/MotionPrimitives';

export const metadata = createPageMetadata({
  title: 'About Us | Heritage, Vision & Approvals',
  description:
    'Learn about Yuvaan College of Nursing—our educational mission, leadership messages, clinical training values, and statutory recognition details.',
  path: '/about/',
});

export default function AboutPage() {
  const site = getSiteConfig();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about/' },
        ])}
      />

      <PageBanner
        eyebrow="About the Institution"
        title="Educating Competent, Compassionate Nurses"
        description={`Founded under ${site.about.trustName} (Est. ${site.about.establishedYear}), Yuvaan College of Nursing combines disciplined academic science with guided hospital mentorship.`}
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Overview */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-12">
          <FadeInView className="lg:col-span-6">
            <div className="overflow-hidden rounded-card border border-border shadow-card">
              <img
                src="/images/campus-building.jpg"
                alt="Yuvaan College of Nursing modern academic campus and green courtyard"
                width={760}
                height={480}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </FadeInView>

          <FadeInView delay={0.08} className="space-y-5 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              Institutional Philosophy
            </p>
            <h2 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
              Clinical Precision Rooted in Human Dignity
            </h2>
            <p className="text-[15px] leading-relaxed text-ink-muted md:text-base">
              At Yuvaan College of Nursing, nursing education extends beyond memorising textbooks.
              Students practise clinical skills inside well-equipped Nursing Foundation and
              simulation laboratories before entering multi-specialty hospital wards alongside
              experienced nurse tutors.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-muted md:text-base">
              We serve aspiring nursing students and their families with transparent admission
              guidance, safe on-campus residential hostels, and structured placement preparation.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/courses/"
                className="inline-flex min-h-[44px] items-center rounded-btn bg-accent-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
              >
                Explore Programmes
              </Link>
              <Link
                href="/legal/disclosure/"
                className="inline-flex min-h-[44px] items-center rounded-btn border border-border px-5 py-2.5 text-sm font-semibold text-navy hover:border-primary"
              >
                Mandatory Public Disclosure
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-surface-mint py-14 md:py-20">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6">
          <FadeInView>
            <div className="flex h-full flex-col rounded-card border border-border bg-white p-7 shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-blush text-accent-dark">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-navy">Our Vision</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{site.about.vision}</p>
            </div>
          </FadeInView>

          <FadeInView delay={0.08}>
            <div className="flex h-full flex-col rounded-card border border-border bg-white p-7 shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-mint text-primary-dark">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-navy">Our Mission</h2>
              <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-ink-muted">
                {site.about.mission.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-primary-dark"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Leadership & Management */}
      <section className="bg-surface-cream/60 py-14 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              Management &amp; Academic Leadership
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-navy md:text-4xl">
              Institutional Leadership Desk
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Verified governance and academic officers of Yuvaan College of Nursing (Mahura,
              Khordha, Odisha • Est. {site.about.establishedYear}).
            </p>
          </div>

          {/* 4 Verified Leaders Grid */}
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: site.about.chairmanName,
                role: 'Chairperson & Authorised Rep.',
                detail: `Mob: ${site.about.chairmanPhone}`,
                img: site.about.chairmanImage,
              },
              {
                name: site.about.secretaryName,
                role: 'Secretary',
                detail: `Mob: ${site.about.secretaryPhone}`,
                img: site.about.secretaryImage,
              },
              {
                name: site.about.principalName,
                role: 'Principal',
                detail: `Qualification: ${site.about.principalQualification}`,
                img: site.about.principalImage,
              },
              {
                name: site.about.vicePrincipalName,
                role: 'Vice-Principal',
                detail: `Qualification: ${site.about.vicePrincipalQualification}`,
                img: site.about.vicePrincipalImage,
              },
            ].map((leader) => (
              <div
                key={leader.role}
                className="flex items-center gap-3.5 rounded-card border border-border bg-white p-4 shadow-soft"
              >
                {leader.img ? (
                  <img
                    src={leader.img}
                    alt={`${leader.name} — ${leader.role}`}
                    width={68}
                    height={68}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-full border-2 border-surface-mint object-cover object-top"
                  />
                ) : (
                  <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-surface-mint bg-navy font-heading text-lg font-bold text-white">
                    {leader.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                    {leader.role}
                  </p>
                  <h3 className="truncate font-heading text-base font-semibold text-navy">
                    {leader.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-ink-muted">{leader.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-card border border-border bg-white p-7 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-mint text-primary-dark">
                    <Award className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-navy">
                      Principal&apos;s Message
                    </h3>
                    <p className="text-xs font-medium text-ink-muted">
                      {site.about.principalName} • {site.about.principalQualification}
                    </p>
                  </div>
                </div>
              </div>
              <blockquote className="mt-5 border-l-4 border-primary pl-4 text-[15px] italic leading-relaxed text-ink">
                &ldquo;{site.about.principalMessage}&rdquo;
              </blockquote>
            </article>

            <article className="rounded-card border border-border bg-white p-7 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-blush text-accent-dark">
                    <HeartHandshake className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-navy">
                      Chairperson&apos;s Message
                    </h3>
                    <p className="text-xs font-medium text-ink-muted">{site.about.chairmanName}</p>
                  </div>
                </div>
              </div>
              <blockquote className="mt-5 border-l-4 border-accent-dark pl-4 text-[15px] italic leading-relaxed text-ink">
                &ldquo;{site.about.chairmanMessage}&rdquo;
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* Approvals Table */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
                Statutory Compliance
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-navy">
                Approvals &amp; Regulatory Affiliations
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Verified promoter trust registration, ONMRC application details, clinical
                permission, and SPA campus safety clearances.
              </p>
            </div>
            <Link
              href="/legal/disclosure/"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-btn bg-primary-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#075985]"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>View Full Mandatory Disclosure</span>
            </Link>
          </div>

          <div className="mt-8 overflow-x-auto rounded-card border border-border shadow-soft">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead className="bg-surface-mint/60 text-navy">
                <tr>
                  <th className="px-5 py-3.5 font-heading font-semibold">Regulatory Body</th>
                  <th className="px-5 py-3.5 font-heading font-semibold">Purpose</th>
                  <th className="px-5 py-3.5 font-heading font-semibold">Reference / Code</th>
                  <th className="px-5 py-3.5 font-heading font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {site.approvals.map((app) => (
                  <tr key={app.id}>
                    <td className="px-5 py-4 font-semibold text-navy">{app.title}</td>
                    <td className="px-5 py-4 text-ink-muted">{app.authority}</td>
                    <td className="px-5 py-4 font-mono text-xs text-navy">{app.regNumber}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
