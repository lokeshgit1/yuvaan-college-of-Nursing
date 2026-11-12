import React from 'react';
import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { ApprovalItem } from '@/lib/types';

export function ApprovalsBar({ approvals }: { approvals: ApprovalItem[] }) {
  return (
    <section
      aria-label="Approvals and Recognition"
      className="border-y border-border/80 bg-surface-cream py-10"
    >
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-dark">
              Recognition &amp; Statutory Governance
            </p>
            <p className="mt-0.5 text-sm text-ink-muted">
              Promoter trust registration, campus safety clearances, and council/clinical NOC status
            </p>
          </div>
          <Link
            href="/legal/disclosure/"
            className="inline-flex items-center gap-1.5 rounded-btn border border-primary/20 bg-white px-4 py-2 text-xs font-semibold text-primary-dark shadow-soft transition-colors hover:bg-primary-dark hover:text-white"
          >
            <span>Mandatory Disclosure</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approvals.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between rounded-card border border-border bg-white p-4 shadow-soft ${
                idx % 2 === 0 ? 'border-l-4 border-l-primary' : 'border-l-4 border-l-accent'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <BadgeCheck
                  className={`mt-0.5 h-5 w-5 shrink-0 ${
                    idx % 2 === 0 ? 'text-primary' : 'text-accent'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading text-sm font-bold text-navy">{item.title}</h3>
                  <p className="mt-0.5 text-xs text-ink-muted">{item.authority}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-2.5 text-xs">
                <span className="font-medium text-navy">{item.regNumber}</span>
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                  {item.status || 'Verified'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
