import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  dark = false,
}: {
  items: BreadcrumbItem[];
  dark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol
        className={cn(
          'flex flex-wrap items-center gap-1.5 text-[13px]',
          dark ? 'text-slate-300' : 'text-ink-muted'
        )}
      >
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={cn(
              'inline-flex items-center gap-1 font-medium transition-colors',
              dark ? 'text-slate-300 hover:text-white' : 'text-ink-muted hover:text-primary-dark'
            )}
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              <ChevronRight
                className={cn('h-3.5 w-3.5', dark ? 'text-slate-500' : 'text-ink-muted/70')}
                aria-hidden="true"
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    'font-medium transition-colors',
                    dark
                      ? 'text-slate-300 hover:text-white'
                      : 'text-ink-muted hover:text-primary-dark'
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn('font-semibold', dark ? 'text-emerald-400' : 'text-navy')}
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
