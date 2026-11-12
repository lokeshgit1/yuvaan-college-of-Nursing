import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <div
        className={cn(
          'mb-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-surface-mint px-3.5 py-1',
          align === 'center' && 'mx-auto'
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary-dark">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-heading text-[28px] font-bold leading-[1.16] tracking-tight text-navy md:text-[40px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
