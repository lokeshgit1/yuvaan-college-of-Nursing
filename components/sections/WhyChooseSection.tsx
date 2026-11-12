import React from 'react';
import { GraduationCap, HeartHandshake, Home, Microscope, Stethoscope, Wallet } from 'lucide-react';
import { SiteConfig } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';
import { cn } from '@/lib/utils';

const iconMap = {
  graduation: GraduationCap,
  stethoscope: Stethoscope,
  home: Home,
  microscope: Microscope,
  wallet: Wallet,
  heartHandshake: HeartHandshake,
};

const tintMap = {
  teal: 'bg-surface-mint text-primary-dark',
  pink: 'bg-surface-blush text-accent-dark',
  sun: 'bg-surface-sun text-amber-900',
  blue: 'bg-sky-50 text-sky-800',
  mint: 'bg-emerald-50 text-emerald-800',
  cream: 'bg-orange-50 text-orange-900',
};

export function WhyChooseSection({ items }: { items: SiteConfig['whyChoose'] }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-12">
        {/* Left: 6 Why-Choose Points */}
        <div className="lg:col-span-7">
          <SectionHeader
            align="left"
            eyebrow="Why Choose Yuvaan"
            title="Supportive Mentorship Meets Real Hospital Training"
            description="Every detail of campus life—from simulation labs to safety clearances—is structured to help students grow into calm, capable nurses."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((item, idx) => {
              const Icon = iconMap[item.iconName];
              return (
                <FadeInView key={item.id} delay={idx * 0.04}>
                  <div className="group flex h-full items-start gap-3.5 rounded-card border border-border bg-surface-cream/40 p-5 shadow-soft transition-all duration-200 hover:border-primary/35 hover:bg-white hover:shadow-card">
                    <span
                      className={cn(
                        'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-transform group-hover:scale-105',
                        tintMap[item.tint]
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>

        {/* Right: Dark Architectural Feature + Photo Stack */}
        <FadeInView className="lg:col-span-5">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-card border border-border shadow-card-hover">
              <img
                src="/images/clinical-training.jpg"
                alt="Student nurses in uniform reviewing patient care charts in a hospital ward"
                width={640}
                height={420}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
              <div className="bg-hero-gradient flex flex-col justify-between rounded-card p-5 text-white shadow-card sm:col-span-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-300">
                  Campus Standard
                </p>
                <div className="mt-4">
                  <p className="font-heading text-2xl font-bold text-white">35,000</p>
                  <p className="text-xs text-sky-300">Sq. Ft. Campus • Est. 2025</p>
                  <p className="mt-2 text-[11px] font-medium text-slate-300">
                    Mahura, Khordha • Odisha
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-card border border-border shadow-card sm:col-span-3">
                <img
                  src="/images/skills-lab.jpg"
                  alt="Nursing faculty guiding students in the Nursing Foundation simulation lab"
                  width={520}
                  height={340}
                  loading="lazy"
                  className="h-full min-h-[170px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
