import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import { Course, SiteConfig } from '@/lib/types';
import { buildTelHref } from '@/lib/utils';

interface FooterProps {
  site: SiteConfig;
  courses: Course[];
}

export function Footer({ site, courses }: FooterProps) {
  const cleanEmail = site.email.replace(/\s*\[CONFIRM\]/g, '').trim();

  return (
    <footer className="relative bg-[#070B19] text-white">
      <div className="h-1 w-full bg-primary" />
      <div className="mx-auto max-w-container px-4 py-14 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <img
                src="/logos/yuvaan-mark.svg"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl bg-white/10 object-contain p-1 shadow-sm ring-1 ring-white/15"
              />
              <div>
                <span className="block font-heading text-xl font-bold text-white">Yuvaan</span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-amber-300">
                  College of Nursing
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">{site.tagline}</p>
            <Link
              href="/admissions/"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-btn border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-accent hover:bg-accent-dark"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yuvaan College of Nursing on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-200 transition-colors hover:bg-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yuvaan College of Nursing on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-200 transition-colors hover:bg-accent-dark"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yuvaan College of Nursing on YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-200 transition-colors hover:bg-accent-dark"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yuvaan College of Nursing on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-200 transition-colors hover:bg-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="mb-4 font-heading text-base font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about/" className="transition-colors hover:text-amber-300">
                  About Us &amp; Approvals
                </Link>
              </li>
              <li>
                <Link href="/admissions/" className="transition-colors hover:text-amber-300">
                  Admissions &amp; Fees
                </Link>
              </li>
              <li>
                <Link href="/facilities/" className="transition-colors hover:text-amber-300">
                  Campus &amp; Labs
                </Link>
              </li>
              <li>
                <Link href="/faculty/" className="transition-colors hover:text-amber-300">
                  Faculty Directory
                </Link>
              </li>
              <li>
                <Link href="/placements/" className="transition-colors hover:text-amber-300">
                  Placements &amp; Hospitals
                </Link>
              </li>
              <li>
                <Link href="/notices/" className="transition-colors hover:text-amber-300">
                  Official Notices
                </Link>
              </li>
              <li>
                <Link href="/faqs/" className="transition-colors hover:text-amber-300">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="transition-colors hover:text-amber-300">
                  Campus Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h2 className="mb-4 font-heading text-base font-semibold text-white">
              Nursing Programmes
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link
                    href={`/courses/${course.slug}/`}
                    className="transition-colors hover:text-amber-300"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h2 className="mb-4 font-heading text-base font-semibold text-white">Contact Info</h2>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dark text-white">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Admissions Helpline
                  </span>
                  <a href={buildTelHref(site.phone)} className="font-medium hover:text-white">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-dark text-white">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Email Desk
                  </span>
                  <a
                    href={`mailto:${cleanEmail}`}
                    className="break-all font-medium hover:text-white"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-dark text-white">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Campus Address
                  </span>
                  <span className="leading-relaxed">{site.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-7 text-xs text-slate-400 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}, Mahura, Khordha. All rights reserved.
          </p>
          <nav aria-label="Legal Navigation" className="flex flex-wrap items-center gap-5">
            <Link href="/legal/privacy/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/legal/terms/" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
            <Link href="/legal/anti-ragging/" className="transition-colors hover:text-white">
              Anti-Ragging Notice
            </Link>
            <Link href="/legal/disclosure/" className="transition-colors hover:text-white">
              Mandatory Disclosure
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
