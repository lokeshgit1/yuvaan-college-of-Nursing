import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import { SiteConfig } from '@/lib/types';
import { FadeInView } from '@/components/ui/MotionPrimitives';

export function HeroSection({ site }: { site: SiteConfig }) {
  return (
    <section className="bg-hero-gradient relative overflow-hidden border-b border-slate-800 pb-24 pt-12 text-white md:pb-28 md:pt-16">
      {/* Subtle Architectural Dot Pattern */}
      <div className="hero-dots-pattern pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
        {/* Left Editorial Column */}
        <FadeInView className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-sky-300">
              {site.hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-6 font-heading text-[38px] font-bold leading-[1.06] tracking-tight text-white md:text-[60px]">
            Care. Learn. <span className="text-sky-400">Lead.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.65] text-slate-300 md:text-[18px]">
            {site.hero.subheadline}
          </p>

          {/* Pill CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/courses/"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-btn bg-accent-dark px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#065f46]"
            >
              <span>{site.hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-btn border border-slate-600 bg-slate-800/70 px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-navy"
            >
              <CalendarCheck className="h-4 w-4 text-sky-400" aria-hidden="true" />
              <span>{site.hero.secondaryCta}</span>
            </Link>
          </div>

          {/* Glass Trust Chips */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] font-medium text-slate-200">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>INC &amp; ONMRC Norms</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>Clinical Permission Verified</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5">
              <Building2 className="h-4 w-4 text-sky-300" aria-hidden="true" />
              <span>SPA &amp; Safety Cleared</span>
            </span>
          </div>
        </FadeInView>

        {/* Right Architectural Arch Showcase */}
        <FadeInView delay={0.1} className="lg:col-span-5">
          <div className="relative mx-auto max-w-[390px]">
            {/* Crisp Structural Halo Frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-b-[34px] rounded-t-[192px] border border-sky-500/25"
            />

            <div className="relative overflow-hidden rounded-b-[28px] rounded-t-[185px] border-2 border-slate-700 bg-[#0F172A] shadow-2xl">
              <img
                src={site.hero.image}
                alt={site.hero.imageAlt}
                width={580}
                height={640}
                loading="eager"
                className="aspect-[4/4.6] w-full object-cover object-top"
              />

              {/* Bottom Integrated Glass Metrics Bar */}
              <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2.5 rounded-2xl border border-slate-700 bg-[#0B1324]/90 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-base font-bold leading-none text-white">
                      {site.hero.floatingBadges.topValue}
                    </p>
                    <p className="mt-1 truncate text-[11px] text-slate-300">
                      {site.hero.floatingBadges.topLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 border-l border-slate-700 pl-2.5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dark text-white">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-base font-bold leading-none text-white">
                      {site.hero.floatingBadges.bottomValue}
                    </p>
                    <p className="mt-1 truncate text-[11px] text-slate-300">
                      {site.hero.floatingBadges.bottomLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
