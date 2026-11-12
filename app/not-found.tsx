import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-hero-gradient py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">
          Error 404
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-navy md:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          The page you are looking for may have moved or is temporarily unavailable. Let us help you
          find our nursing courses, admissions details, or contact desk.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-btn bg-accent-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065f46]"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/courses/"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-btn border border-border bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-primary"
          >
            <BookOpen className="h-4 w-4 text-primary-dark" aria-hidden="true" />
            <span>Explore Courses</span>
          </Link>
          <Link
            href="/contact/"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-btn border border-border bg-white px-6 py-3 text-sm font-semibold text-navy hover:border-primary"
          >
            <Phone className="h-4 w-4 text-primary-dark" aria-hidden="true" />
            <span>Contact Admissions</span>
          </Link>
        </div>

        <div className="mt-6">
          <Link
            href="/admissions/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-dark underline underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Go to Admissions 2026–27</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
