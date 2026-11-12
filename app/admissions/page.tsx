import React from 'react';
import { CalendarClock, CheckSquare, Download, ExternalLink, FileText } from 'lucide-react';
import { getCourses, getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { JourneySteps } from '@/components/sections/JourneySteps';
import { EnquiryForm } from '@/components/forms/EnquiryForm';

export const metadata = createPageMetadata({
  title: 'Admissions 2026–27 | Process, Eligibility, Fees & Forms',
  description:
    'Complete guide to Yuvaan College of Nursing admissions: eligibility rules, required documents checklist, important dates, fee schedule, and downloadable application PDFs.',
  path: '/admissions/',
});

export default function AdmissionsPage() {
  const site = getSiteConfig();
  const courses = getCourses();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Admissions', path: '/admissions/' },
        ])}
      />

      <PageBanner
        eyebrow={`Admissions ${site.admissionYear}`}
        title="Transparent Nursing Admissions & Fee Guide"
        description="Review course eligibility, required original documents, academic dates, and apply via our downloadable PDF form or online enquiry desk."
        breadcrumbs={[{ label: 'Admissions' }]}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={site.applicationLinks.admissionFormPdf}
            download
            className="inline-flex min-h-[46px] items-center gap-2 rounded-btn bg-accent-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Download Admission Form (PDF)</span>
          </a>
          <a
            href={site.applicationLinks.googleFormUrl}
            target={site.applicationLinks.googleFormUrl.startsWith('http') ? '_blank' : undefined}
            rel={
              site.applicationLinks.googleFormUrl.startsWith('http')
                ? 'noopener noreferrer'
                : undefined
            }
            className="inline-flex min-h-[46px] items-center gap-2 rounded-btn border border-border bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-primary"
          >
            <span>Apply Online / Enquire</span>
            <ExternalLink className="h-4 w-4 text-primary-dark" aria-hidden="true" />
          </a>
          <a
            href={site.applicationLinks.prospectusPdf}
            download
            className="inline-flex min-h-[46px] items-center gap-2 rounded-btn border border-border bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-primary"
          >
            <FileText className="h-4 w-4 text-primary-dark" aria-hidden="true" />
            <span>Prospectus PDF</span>
          </a>
        </div>
      </PageBanner>

      {/* 4-Step Journey */}
      <JourneySteps steps={site.journeySteps} />

      {/* Eligibility & Fee Table */}
      <section className="bg-surface-mint/50 py-14 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
                Eligibility &amp; Fee Matrix
              </p>
              <h2 className="mt-1 font-heading text-3xl font-semibold text-navy">
                Course-Wise Eligibility, Seats &amp; Annual Fees
              </h2>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-card border border-border bg-white shadow-card">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm">
              <thead className="bg-surface-mint text-navy">
                <tr>
                  <th className="px-4 py-3.5 font-heading font-semibold">Programme</th>
                  <th className="px-4 py-3.5 font-heading font-semibold">Eligibility Summary</th>
                  <th className="px-4 py-3.5 font-heading font-semibold">Duration</th>
                  <th className="px-4 py-3.5 font-heading font-semibold">Seats</th>
                  <th className="px-4 py-3.5 font-heading font-semibold">Annual Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {courses.map((course) => (
                  <tr key={course.slug} className="hover:bg-surface-cream/40">
                    <td className="px-4 py-4 font-semibold text-navy">{course.title}</td>
                    <td className="max-w-xs px-4 py-4 text-ink-muted">{course.eligibility}</td>
                    <td className="px-4 py-4 text-ink-muted">{course.duration}</td>
                    <td className="px-4 py-4 text-ink-muted">{course.seats}</td>
                    <td className="px-4 py-4 font-semibold text-primary-dark">
                      {course.annualFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-primary/20 mt-4 flex flex-wrap items-center justify-between gap-3 rounded-card border bg-white px-5 py-3.5 text-sm text-navy">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 shrink-0 text-primary-dark" aria-hidden="true" />
              <span>
                Submit your printed admission form at our Mahura, Khordha campus admission desk or send an
                online enquiry for counselling support.
              </span>
            </div>
            <a
              href={site.applicationLinks.feeStructurePdf}
              download
              className="font-semibold text-primary-dark underline underline-offset-4"
            >
              Download Fee Structure PDF
            </a>
          </div>
        </div>
      </section>

      {/* Documents Checklist + Important Dates */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-12">
          {/* Documents Checklist */}
          <div className="bg-surface-cream/60 rounded-card border border-border p-6 md:p-8 lg:col-span-6">
            <div className="flex items-center gap-2.5">
              <CheckSquare className="h-6 w-6 text-primary-dark" aria-hidden="true" />
              <h2 className="font-heading text-2xl font-semibold text-navy">
                Required Documents Checklist
              </h2>
            </div>
            <p className="mt-2 text-sm text-ink-muted">
              Bring originals along with two self-attested photocopies during counselling
              verification.
            </p>
            <ul className="mt-5 space-y-3">
              {site.documentsChecklist.map((doc) => (
                <li
                  key={doc}
                  className="border-border/70 flex items-start gap-2.5 rounded-lg border bg-white p-3.5 text-sm text-navy"
                >
                  <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-accent-dark" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div className="rounded-card border border-border bg-white p-6 shadow-card md:p-8 lg:col-span-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <CalendarClock className="h-6 w-6 text-accent-dark" aria-hidden="true" />
                <h2 className="font-heading text-2xl font-semibold text-navy">
                  Important Admission Dates
                </h2>
              </div>
            </div>
            <p className="mt-2 text-sm text-ink-muted">
              Academic admission schedule aligned with Odisha State Nursing Council notifications.
            </p>

            <div className="mt-5 divide-y divide-border">
              {site.admissionDates.map((item) => (
                <div
                  key={item.event}
                  className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-heading text-base font-semibold text-navy">{item.event}</p>
                    <p className="text-sm text-ink-muted">{item.date}</p>
                  </div>
                  <span className="inline-flex w-fit rounded-full bg-surface-mint px-3 py-1 text-xs font-semibold text-primary-dark">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-surface-mint/40 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
              Need Counselling?
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-navy">
              Submit an Admission Enquiry
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Receive guidance on course selection, eligibility verification, scholarship
              documentation, and campus visit slots.
            </p>
          </div>
          <EnquiryForm
            variant="full"
            courses={courses.map((c) => ({ slug: c.slug, title: c.title }))}
          />
        </div>
      </section>
    </>
  );
}
