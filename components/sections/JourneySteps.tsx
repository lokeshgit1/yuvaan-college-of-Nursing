import React from 'react';
import Link from 'next/link';
import { Activity, ArrowRight, CreditCard, FileCheck2, MessageSquare } from 'lucide-react';
import { SiteConfig } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';

const stepIcons = {
  messageSquare: MessageSquare,
  fileCheck: FileCheck2,
  creditCard: CreditCard,
  activity: Activity,
};

export function JourneySteps({ steps }: { steps: SiteConfig['journeySteps'] }) {
  return (
    <section className="light-grid-pattern relative border-y border-border/70 bg-surface-mint/60 py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <SectionHeader
          eyebrow="Simple Admission Journey"
          title="Your Path to a Nursing Career"
          description="A clear, transparent four-step admission process from first enquiry to your first clinical rotation."
        />

        <div className="relative mt-12">
          {/* Desktop horizontal connector track */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-10 right-10 top-10 hidden h-0.5 bg-slate-200 lg:block"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, idx) => {
              const Icon = stepIcons[item.iconName];
              const isAccent = idx % 2 === 1;
              return (
                <FadeInView key={item.step} delay={idx * 0.06}>
                  <div className="relative flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1.5 hover:shadow-card-hover">
                    <div className="flex items-center justify-between">
                      <span
                        className={
                          isAccent
                            ? 'inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-dark text-white shadow-soft'
                            : 'inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-dark text-white shadow-soft'
                        }
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="font-heading text-3xl font-bold text-slate-200">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-dark">
                      {item.step}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-navy">{item.title}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/admissions/"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-btn bg-accent-dark px-8 py-3.5 text-[15px] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#065f46]"
          >
            <span>Start Your Application</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
