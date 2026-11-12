'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, Mail, Phone } from 'lucide-react';
import { buildTelHref } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

interface TopBarProps {
  phone: string;
  email: string;
  admissionYear: string;
  notices: { id: string; title: string }[];
}

export function TopBar({ phone, email, admissionYear, notices }: TopBarProps) {
  const [noticeIdx, setNoticeIdx] = useState(0);

  useEffect(() => {
    if (notices.length <= 1) return;
    const timer = setInterval(() => {
      setNoticeIdx((prev) => (prev + 1) % notices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [notices.length]);

  const currentNotice = notices[noticeIdx];
  const cleanEmail = email.replace(/\s*\[CONFIRM\]/g, '').trim();

  return (
    <div className="border-b border-slate-800 bg-[#070B19] text-[13px] text-slate-300">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-2 px-4 py-2 md:px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={buildTelHref(phone)}
            onClick={() => trackEvent('call_click', { location: 'topbar' })}
            className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
            <span>{phone}</span>
          </a>
          <a
            href={`mailto:${cleanEmail}`}
            className="hidden items-center gap-1.5 text-slate-300 transition-colors hover:text-white sm:inline-flex"
          >
            <Mail className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
            <span>{cleanEmail}</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          {currentNotice ? (
            <Link
              href="/notices/"
              className="hidden max-w-[340px] items-center gap-1.5 truncate text-xs text-slate-300 transition-colors hover:text-white lg:inline-flex"
              title={currentNotice.title}
            >
              <Bell className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
              <span className="truncate">{currentNotice.title}</span>
            </Link>
          ) : null}
          <Link
            href="/admissions/"
            className="inline-flex items-center rounded-full bg-accent-dark px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#065f46]"
          >
            Admissions Open {admissionYear}
          </Link>
        </div>
      </div>
    </div>
  );
}
