import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <SectionHeader
          eyebrow="Student & Parent Voices"
          title="Trusted by Aspiring Nurses & Their Families"
          description="Hear how structured clinical training, faculty mentorship, and campus safety shape student confidence at Yuvaan College of Nursing."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <FadeInView key={item.id} delay={idx * 0.06}>
              <article className="flex h-full flex-col justify-between rounded-card border border-t-4 border-border border-t-primary bg-surface-mint/30 p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-card-hover">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="h-4 w-4 fill-feedback-star text-feedback-star"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-primary/30" aria-hidden="true" />
                  </div>

                  <blockquote className="mt-4 text-[15px] italic leading-relaxed text-ink">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/80 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-dark font-heading text-sm font-bold text-white">
                      {item.initials}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-bold text-navy">{item.name}</p>
                      <p className="text-xs text-ink-muted">
                        {item.role} • {item.course}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
