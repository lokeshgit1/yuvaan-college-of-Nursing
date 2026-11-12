import React from 'react';
import { Award, Briefcase, Building2, Users } from 'lucide-react';
import { StatItem } from '@/lib/types';
import { AnimatedCounter, FadeInView } from '@/components/ui/MotionPrimitives';

const iconMap = {
  users: Users,
  award: Award,
  hospital: Building2,
  briefcase: Briefcase,
};

export function StatsStrip({ stats }: { stats: StatItem[] }) {
  return (
    <section aria-label="College Key Statistics" className="relative z-10 -mt-12 pb-10 md:pb-14">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <FadeInView>
          <div className="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-card border border-border bg-white shadow-card-hover sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = iconMap[stat.iconName];
              const isWarm = idx % 2 === 1;
              return (
                <div
                  key={stat.id}
                  className="flex items-center gap-4 p-6 transition-colors hover:bg-surface-mint/40"
                >
                  <span
                    className={
                      isWarm
                        ? 'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-dark text-white shadow-soft'
                        : 'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-dark text-white shadow-soft'
                    }
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-[30px] font-bold leading-none text-navy">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
