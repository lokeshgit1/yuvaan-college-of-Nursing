import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/Breadcrumb';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageBanner({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageBannerProps) {
  return (
    <section className="bg-hero-gradient relative overflow-hidden border-b border-slate-800 py-14 text-white md:py-20">
      <div className="hero-dots-pattern pointer-events-none absolute inset-0 opacity-80" />
      <div className="relative mx-auto max-w-container px-4 md:px-6">
        <Breadcrumb items={breadcrumbs} dark />
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300">
            {eyebrow}
          </p>
        </div>
        <h1 className="max-w-3xl font-heading text-[32px] font-bold leading-[1.12] tracking-tight text-white md:text-[48px]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-[18px]">
          {description}
        </p>
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
