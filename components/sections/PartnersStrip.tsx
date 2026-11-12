import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PartnerHospital } from '@/lib/types';

export function PartnersStrip({ partners }: { partners: PartnerHospital[] }) {
  return (
    <section
      aria-label="Hospital and Placement Partners"
      className="border-y border-border/70 bg-surface-mint/50 py-14 md:py-16"
    >
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-dark">
              Hospital &amp; Placement Partners
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold text-navy md:text-[32px]">
              Clinical Training &amp; Recruitment Network
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              Affiliated multi-specialty hospitals and community health centres supporting
              supervised ward, maternity, and primary care rotations.
            </p>
          </div>
          <Link
            href="/placements/"
            className="inline-flex items-center gap-1.5 rounded-btn border border-primary/20 bg-white px-4 py-2 text-xs font-semibold text-primary-dark shadow-soft transition-colors hover:bg-primary-dark hover:text-white"
          >
            <span>Placement Support Details</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Desktop even grid */}
        <div className="mt-8 hidden grid-cols-2 gap-4 sm:grid md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center rounded-card border border-border bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
              title={`${partner.name} — ${partner.type}`}
            >
              <img
                src={partner.logoPath}
                alt={partner.name}
                width={220}
                height={56}
                loading="lazy"
                className="h-12 w-auto object-contain grayscale transition-all duration-200 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Mobile auto-scroll marquee */}
        <div className="mt-8 overflow-hidden sm:hidden">
          <div className="animate-marquee flex w-max gap-4">
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="flex w-52 shrink-0 items-center justify-center rounded-card border border-border bg-white p-3 shadow-soft"
              >
                <img
                  src={partner.logoPath}
                  alt={partner.name}
                  width={220}
                  height={56}
                  loading="lazy"
                  className="h-11 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
