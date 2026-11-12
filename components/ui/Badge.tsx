import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'mint' | 'blush' | 'sun' | 'navy' | 'confirm';
  className?: string;
}

export function Badge({ children, variant = 'mint', className }: BadgeProps) {
  const styles = {
    mint: 'bg-surface-mint text-primary-dark border border-primary/20',
    blush: 'bg-surface-blush text-accent-dark border border-accent/20',
    sun: 'bg-surface-sun text-navy border border-amber-300/60',
    navy: 'bg-navy text-white',
    confirm: 'bg-amber-50 text-amber-900 border border-amber-300 font-semibold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold leading-none',
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function ConfirmBadge({ className }: { className?: string }) {
  return (
    <span
      title="Placeholder metric or fact to be verified by Yuvaan College of Nursing before launch"
      className={cn(
        'inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-900',
        className
      )}
    >
      [CONFIRM]
    </span>
  );
}
