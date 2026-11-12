import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outlineLight' | 'teal';

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-dark text-white hover:bg-[#065f46] shadow-sm hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white text-navy border border-border hover:border-primary hover:text-primary-dark shadow-soft hover:-translate-y-0.5',
  outlineLight:
    'bg-slate-800/70 text-white border border-slate-600 hover:bg-white hover:text-navy',
  teal: 'bg-primary-dark text-white hover:bg-[#075985] shadow-sm hover:-translate-y-0.5',
};

const baseClasses =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-btn px-6 py-3 text-[15px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-60';

export function ActionButton({
  variant = 'primary',
  className,
  children,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = 'primary',
  className,
  children,
  external = false,
  onClick,
}: BaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(baseClasses, variantClasses[variant], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </Link>
  );
}
