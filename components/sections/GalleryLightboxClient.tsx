'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Video, X } from 'lucide-react';
import { GalleryItem } from '@/lib/types';
import { cn } from '@/lib/utils';

const categories: ('All' | GalleryItem['category'])[] = [
  'All',
  'Campus',
  'Labs',
  'Clinical Training',
  'Events',
  'Hostel & Library',
];

export function GalleryLightboxClient({ items }: { items: GalleryItem[] }) {
  const [selectedCat, setSelectedCat] = useState<'All' | GalleryItem['category']>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const visibleItems =
    selectedCat === 'All' ? items : items.filter((item) => item.category === selectedCat);

  useEffect(() => {
    if (lightboxIdx === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') {
        setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % visibleItems.length));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIdx((prev) =>
          prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIdx, visibleItems.length]);

  const activePhoto = lightboxIdx !== null ? visibleItems[lightboxIdx] : null;

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery albums">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCat(cat);
              setLightboxIdx(null);
            }}
            className={cn(
              'min-h-[42px] rounded-full px-4 py-2 text-sm font-semibold transition-colors',
              selectedCat === cat
                ? 'bg-accent-dark text-white'
                : 'border border-border bg-white text-navy hover:bg-surface-mint'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, idx) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-card border border-border bg-white shadow-card"
          >
            <button
              type="button"
              onClick={() => setLightboxIdx(idx)}
              aria-label={`Open full view of ${item.title}`}
              className="relative block aspect-[16/10] w-full overflow-hidden bg-surface-grey text-left"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={640}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="bg-navy/75 absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-white opacity-90 transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <figcaption className="p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
                {item.category}
              </span>
              <h2 className="mt-1 font-heading text-base font-semibold text-navy">{item.title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Campus Orientation Highlights */}
      <div className="bg-surface-mint/40 rounded-card border border-border p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-accent-dark shadow-soft">
              <Video className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-xl font-semibold text-navy">
                Campus Walkthrough &amp; Lamp Lighting Highlights
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Families and prospective students are invited to tour our 35,000 sq. ft. Mahura, Khordha
                academic campus, Nursing Foundation Lab, and Central Library in person Monday to
                Saturday.
              </p>
            </div>
          </div>
          <a
            href="/contact/"
            className="inline-flex min-h-[42px] shrink-0 items-center rounded-btn bg-primary-dark px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#075985]"
          >
            Book Campus Visit
          </a>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="bg-navy/90 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-card bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
                  {activePhoto.category}
                </p>
                <p className="font-heading text-lg font-semibold text-navy">{activePhoto.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIdx(null)}
                aria-label="Close lightbox"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy hover:bg-surface-grey"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="max-h-[70vh] w-full object-contain"
              />
              {visibleItems.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setLightboxIdx((prev) =>
                        prev === null
                          ? null
                          : (prev - 1 + visibleItems.length) % visibleItems.length
                      )
                    }
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-card hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() =>
                      setLightboxIdx((prev) =>
                        prev === null ? null : (prev + 1) % visibleItems.length
                      )
                    }
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-card hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="px-5 py-3.5 text-sm text-ink-muted">{activePhoto.caption}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
