import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function buildWhatsAppUrl(phoneDigits: string, message: string): string {
  const cleanDigits = phoneDigits.replace(/\D/g, '');
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`;
}

export function buildTelHref(phone: string): string {
  const cleaned = phone.replace(/\[CONFIRM\]/gi, '').replace(/[^+\d]/g, '');
  return `tel:${cleaned}`;
}

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://yuvaancollegeofnursing.edu.in').replace(
    /\/+$/,
    ''
  );
}
