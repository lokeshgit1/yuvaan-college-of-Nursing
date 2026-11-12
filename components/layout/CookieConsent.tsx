'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const STORAGE_KEY = 'yuvaan_cookie_consent_v1';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      // Ignore storage access restrictions
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'essential') => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Privacy and cookie preference"
      className="fixed bottom-4 left-4 z-30 max-w-sm rounded-card border border-border bg-white p-4 shadow-card-hover"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" aria-hidden="true" />
        <div className="space-y-2 text-xs leading-relaxed text-ink-muted">
          <p className="font-semibold text-navy">Your Privacy Matters</p>
          <p>
            We use essential browser storage and optional analytics to improve admission guidance.
            Enquiry details are used strictly for counselling. Read our{' '}
            <Link href="/legal/privacy/" className="font-semibold text-primary-dark underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              type="button"
              onClick={() => handleChoice('accepted')}
              className="min-h-[36px] rounded-btn bg-primary-dark px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#075985]"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => handleChoice('essential')}
              className="min-h-[36px] rounded-btn border border-border px-3.5 py-1.5 text-xs font-semibold text-navy hover:bg-surface-grey"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
