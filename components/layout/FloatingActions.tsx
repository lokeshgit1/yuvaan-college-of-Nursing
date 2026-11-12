'use client';

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { buildTelHref, buildWhatsAppUrl } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

interface FloatingActionsProps {
  phone: string;
  whatsappNumber: string;
  whatsappPrefill: string;
}

export function FloatingActions({ phone, whatsappNumber, whatsappPrefill }: FloatingActionsProps) {
  const waUrl = buildWhatsAppUrl(whatsappNumber, whatsappPrefill);
  const telUrl = buildTelHref(phone);

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 pb-[env(safe-area-inset-bottom)]"
      aria-label="Quick Contact Buttons"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Yuvaan College of Nursing Admissions"
        onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
        className="focus-visible:ring-primary/40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-card-hover transition-transform duration-200 hover:scale-105 focus-visible:ring-4"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={telUrl}
        aria-label="Call Yuvaan College of Nursing Admissions"
        onClick={() => trackEvent('call_click', { location: 'floating_button' })}
        className="focus-visible:ring-primary/40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-dark text-white shadow-card-hover transition-transform duration-200 hover:scale-105 focus-visible:ring-4"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
