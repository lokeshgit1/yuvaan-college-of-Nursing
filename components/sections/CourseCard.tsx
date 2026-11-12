import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, IndianRupee, Users } from 'lucide-react';
import { Course } from '@/lib/types';

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-card-hover">
      <Link href={`/courses/${course.slug}/`} className="relative block overflow-hidden">
        <div className="aspect-[16/10] w-full overflow-hidden bg-surface-grey">
          <img
            src={course.image}
            alt={course.imageAlt}
            width={640}
            height={400}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#0B1324]/45" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-dark shadow-soft">
            {course.shortTitle} · {course.level}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
            <span>{course.duration}</span>
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold leading-snug text-navy md:text-2xl">
          <Link
            href={`/courses/${course.slug}/`}
            className="transition-colors hover:text-primary"
          >
            {course.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-2 flex-1 text-[15px] leading-relaxed text-ink-muted">
          {course.shortDescription}
        </p>

        {/* Highlight Metrics Row */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 rounded-2xl bg-surface-mint/70 p-3 text-xs">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                Intake
              </span>
              <span className="font-bold text-navy">{course.seats}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 border-l border-primary/15 pl-2.5">
            <IndianRupee className="h-4 w-4 shrink-0 text-accent-dark" aria-hidden="true" />
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                Annual Fee
              </span>
              <span className="font-bold text-navy">{course.annualFee}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between pt-1">
          <Link
            href={`/courses/${course.slug}/`}
            className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-btn bg-primary-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            <span>Explore Syllabus &amp; Eligibility</span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
