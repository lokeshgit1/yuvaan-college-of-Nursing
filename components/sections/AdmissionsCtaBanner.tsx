'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ExternalLink, PhoneCall } from 'lucide-react';
import { Course, SiteConfig } from '@/lib/types';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { buildTelHref } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

interface AdmissionsCtaBannerProps {
  site: SiteConfig;
  courses: Course[];
}

export function AdmissionsCtaBanner({ site, courses }: AdmissionsCtaBannerProps) {
  return (
    <section className="bg-cta-gradient relative overflow-hidden border-t border-slate-800 py-16 text-white md:py-24">
      <div className="hero-dots-pattern pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-sky-500/20"
      />
      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-12">
        {/* Left CTA Copy */}
        <div className="lg:col-span-6">
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/80 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-sky-300">
            Admissions Open {site.admissionYear}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-[44px]">
            Ready to Begin Your Nursing Journey?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            Speak with our academic counselling team about course eligibility, scholarship guidance,
            hostel safety, and clinical rotations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={site.applicationLinks.prospectusPdf}
              download
              onClick={() => trackEvent('prospectus_download', { source: 'home_cta_banner' })}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-btn bg-white px-6 py-3 text-sm font-semibold text-navy shadow-md transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4 text-primary-dark" aria-hidden="true" />
              <span>Download Prospectus (PDF)</span>
            </a>

            <Link
              href="/admissions/"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-btn border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy"
            >
              <span>Admission Process &amp; Fees</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
            <PhoneCall className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span>
              Prefer speaking directly? Call{' '}
              <a
                href={buildTelHref(site.admissionsPhone)}
                onClick={() => trackEvent('call_click', { location: 'home_cta_banner' })}
                className="font-semibold text-white underline decoration-sky-400/60 underline-offset-4"
              >
                {site.admissionsPhone}
              </a>
            </span>
          </div>
        </div>

        {/* Right Mini Enquiry Form */}
        <div className="lg:col-span-6">
          <div className="rounded-[24px] bg-white/10 p-2 backdrop-blur-md ring-1 ring-white/20">
            <EnquiryForm
              variant="compact"
              heading="Quick Admission Enquiry"
              courses={courses.map((c) => ({ slug: c.slug, title: c.title }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
