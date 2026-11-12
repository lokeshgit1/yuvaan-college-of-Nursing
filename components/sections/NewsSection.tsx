import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { NewsArticle } from '@/lib/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FadeInView } from '@/components/ui/MotionPrimitives';
import { formatDate } from '@/lib/utils';

export function NewsSection({ articles }: { articles: NewsArticle[] }) {
  return (
    <section className="bg-surface-cream/60 py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Campus Updates"
            title="News, Events & Clinical Workshops"
            description="Highlights from campus ceremonies, community outreach camps, and admission announcements."
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/notices/"
              className="inline-flex min-h-[44px] items-center rounded-btn border border-border bg-white px-5 py-2 text-sm font-semibold text-navy shadow-soft transition-colors hover:border-primary hover:text-primary-dark"
            >
              Official Notice Board
            </Link>
            <Link
              href="/news/"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-btn bg-primary-dark px-5 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary"
            >
              <span>All News</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article, idx) => {
            const fm = article.frontmatter;
            return (
              <FadeInView key={fm.slug} delay={idx * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                  <Link href={`/news/${fm.slug}/`} className="block overflow-hidden">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-surface-grey">
                      <img
                        src={fm.coverImage}
                        alt={fm.coverAlt}
                        width={640}
                        height={400}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                      <span className="rounded-full bg-surface-blush px-3 py-0.5 font-semibold text-accent-dark">
                        {fm.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        <time dateTime={fm.date}>{formatDate(fm.date)}</time>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        <span>{fm.readTime}</span>
                      </span>
                    </div>

                    <h3 className="mt-3 line-clamp-2 font-heading text-lg font-bold leading-snug text-navy md:text-xl">
                      <Link
                        href={`/news/${fm.slug}/`}
                        className="transition-colors hover:text-primary"
                      >
                        {fm.title}
                      </Link>
                    </h3>

                    <p className="mt-2 line-clamp-2 flex-1 text-[15px] leading-relaxed text-ink-muted">
                      {fm.excerpt}
                    </p>

                    <div className="mt-4 border-t border-border/70 pt-3">
                      <Link
                        href={`/news/${fm.slug}/`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-dark underline decoration-primary/40 underline-offset-4 hover:text-accent-dark"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
