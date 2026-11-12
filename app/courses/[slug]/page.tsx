import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  GraduationCap,
  IndianRupee,
  Phone,
  Stethoscope,
  Users,
} from 'lucide-react';
import { getCourseBySlug, getCourseSlugs, getSiteConfig } from '@/lib/content';
import {
  buildBreadcrumbJsonLd,
  buildCourseJsonLd,
  buildFaqJsonLd,
  createPageMetadata,
} from '@/lib/seo';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildTelHref } from '@/lib/utils';

export function generateStaticParams() {
  return getCourseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) {
    return createPageMetadata({
      title: 'Course Not Found',
      description: 'Requested nursing course was not found.',
      path: '/courses/',
    });
  }
  return createPageMetadata({
    title: `${course.title} | Eligibility, Syllabus & Fees`,
    description: course.shortDescription,
    path: `/courses/${course.slug}/`,
    ogImage: course.image,
  });
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const site = getSiteConfig();

  const syllabusAccordion = course.syllabus.map((term, idx) => ({
    id: `syl-${idx}`,
    title: term.term,
    badge: `${term.subjects.length} Core Areas`,
    content: (
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {term.subjects.map((subj) => (
          <li key={subj} className="flex items-start gap-2 text-navy">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-dark" aria-hidden="true" />
            <span>{subj}</span>
          </li>
        ))}
      </ul>
    ),
  }));

  const faqAccordion = course.faqs.map((faq, idx) => ({
    id: `cfaq-${idx}`,
    title: faq.question,
    content: <p>{faq.answer}</p>,
  }));

  return (
    <>
      <JsonLd data={buildCourseJsonLd(course)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Courses', path: '/courses/' },
          { name: course.shortTitle, path: `/courses/${course.slug}/` },
        ])}
      />
      {course.faqs.length > 0 ? (
        <JsonLd
          data={buildFaqJsonLd(
            course.faqs.map((f, i) => ({
              id: `c-${i}`,
              category: 'Admissions & Eligibility',
              question: f.question,
              answer: f.answer,
            }))
          )}
        />
      ) : null}

      {/* Hero Banner with Key Facts Bar */}
      <section className="bg-hero-gradient relative overflow-hidden border-b border-white/10 py-12 text-white md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <Breadcrumb
            dark items={[{ label: 'Courses', href: '/courses/' }, { label: course.shortTitle }]}
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300 backdrop-blur-sm">
                  {course.level} Programme
                </span>
              </div>

              <h1 className="mt-3 font-heading text-3xl font-bold text-white md:text-[44px] md:leading-tight">
                {course.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                {course.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/admissions/"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-btn bg-accent-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={site.applicationLinks.prospectusPdf}
                  download
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-btn border border-border bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-primary"
                >
                  <Download className="h-4 w-4 text-primary-dark" aria-hidden="true" />
                  <span>Prospectus PDF</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-card border-4 border-white shadow-card-hover">
                <img
                  src={course.image}
                  alt={course.imageAlt}
                  width={680}
                  height={425}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Facts Bar */}
          <div className="mt-8 grid grid-cols-1 gap-4 rounded-card border border-border bg-white p-5 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Duration
                </p>
                <p className="mt-0.5 font-heading text-sm font-semibold text-navy">
                  {course.duration}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Annual Intake
                </p>
                <p className="mt-0.5 font-heading text-sm font-semibold text-navy">
                  {course.seats}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <IndianRupee
                className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Annual Fee
                </p>
                <p className="mt-0.5 font-heading text-sm font-semibold text-navy">
                  {course.annualFee}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap
                className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Eligibility
                </p>
                <p className="mt-0.5 text-xs font-medium leading-snug text-navy">
                  {course.eligibility}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sticky Side Card */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            {/* Overview & Highlights */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-navy md:text-3xl">
                Programme Overview
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{course.overview}</p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.highlights.map((item) => (
                  <div
                    key={item}
                    className="bg-surface-mint/40 flex items-start gap-2.5 rounded-card border border-border p-4 text-sm text-navy"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Accordion */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-navy md:text-3xl">
                Syllabus Summary
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Structured curriculum aligned with Indian Nursing Council guidelines.
              </p>
              <div className="mt-5">
                <Accordion items={syllabusAccordion} defaultOpenIndex={0} />
              </div>
            </div>

            {/* Clinical Training */}
            <div className="rounded-card border border-border bg-surface-cream p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-dark shadow-soft">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-navy">
                    Clinical &amp; Hospital Training
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                    {course.clinicalTraining}
                  </p>
                </div>
              </div>
            </div>

            {/* Career Options */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-navy md:text-3xl">
                Career &amp; Progression Options
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.careerOptions.map((career) => (
                  <li
                    key={career}
                    className="flex items-start gap-2.5 rounded-card border border-border p-4 text-sm font-medium text-navy"
                  >
                    <Briefcase
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark"
                      aria-hidden="true"
                    />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee Breakdown */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-heading text-2xl font-semibold text-navy md:text-3xl">
                  Annual Fee Structure
                </h2>
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                Fee schedule for tuition, clinical/lab access, examination, and optional hostel
                facilities.
              </p>
              <div className="mt-4 overflow-x-auto rounded-card border border-border">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-surface-mint/60 text-navy">
                    <tr>
                      <th className="px-4 py-3 font-heading font-semibold">Fee Component</th>
                      <th className="px-4 py-3 font-heading font-semibold">Amount</th>
                      <th className="px-4 py-3 font-heading font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-white">
                    {course.feeBreakdown.map((row) => (
                      <tr key={row.item}>
                        <td className="px-4 py-3 font-medium text-navy">{row.item}</td>
                        <td className="px-4 py-3 font-semibold text-primary-dark">{row.amount}</td>
                        <td className="px-4 py-3 text-ink-muted">{row.note || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Course FAQs */}
            {course.faqs.length > 0 ? (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy md:text-3xl">
                  Course Questions
                </h2>
                <div className="mt-4">
                  <Accordion items={faqAccordion} defaultOpenIndex={0} />
                </div>
              </div>
            ) : null}
          </div>

          {/* Sticky Sidebar CTA Card */}
          <aside className="lg:col-span-4">
            <div className="bg-surface-mint/50 sticky top-24 space-y-5 rounded-card border border-border p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-dark">
                Admissions {site.admissionYear}
              </p>
              <h3 className="font-heading text-2xl font-semibold text-navy">
                Interested in {course.shortTitle}?
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                Download our official admission form PDF, send an online admission enquiry, or call
                our counselling desk for eligibility checks.
              </p>

              <div className="space-y-3 pt-1">
                <Link
                  href="/contact/"
                  className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-btn bg-accent-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
                >
                  <span>Enquire About This Course</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href={site.applicationLinks.admissionFormPdf}
                  download
                  className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-btn border border-border bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-primary"
                >
                  <Download className="h-4 w-4 text-primary-dark" aria-hidden="true" />
                  <span>Admission Form (PDF)</span>
                </a>

                <a
                  href={site.applicationLinks.googleFormUrl}
                  target={
                    site.applicationLinks.googleFormUrl.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    site.applicationLinks.googleFormUrl.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="border-primary/30 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-btn border bg-white px-5 py-3 text-sm font-semibold text-primary-dark hover:bg-surface-mint"
                >
                  <span>Online Application Desk</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="border-t border-border pt-4 text-sm">
                <p className="text-xs font-medium text-ink-muted">Speak to Counsellor</p>
                <a
                  href={buildTelHref(site.admissionsPhone)}
                  className="mt-1 inline-flex items-center gap-1.5 font-semibold text-navy hover:text-primary-dark"
                >
                  <Phone className="h-4 w-4 text-primary-dark" aria-hidden="true" />
                  <span>{site.admissionsPhone}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
