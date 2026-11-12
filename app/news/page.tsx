import React from 'react';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { getNewsArticles } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { NewsListClient } from '@/components/sections/NewsListClient';

export const metadata = createPageMetadata({
  title: 'News, Events & Workshops',
  description:
    'Read campus announcements, Lamp Lighting ceremony updates, community health outreach stories, and admission dates from Yuvaan College of Nursing.',
  path: '/news/',
});

export default function NewsPage() {
  const articles = getNewsArticles().map((a) => a.frontmatter);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'News & Events', path: '/news/' },
        ])}
      />

      <PageBanner
        eyebrow="Campus Journal"
        title="News, Events & Clinical Highlights"
        description="Updates on nursing workshops, community health camps, academic induction ceremonies, and institutional milestones."
        breadcrumbs={[{ label: 'News' }]}
      >
        <Link
          href="/notices/"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-btn border border-border bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:border-primary"
        >
          <Bell className="h-4 w-4 text-accent-dark" aria-hidden="true" />
          <span>View Official Notice Board</span>
        </Link>
      </PageBanner>

      <section className="bg-surface-mint/40 py-12 md:py-16">
        <div className="mx-auto max-w-container px-4 md:px-6">
          <NewsListClient articles={articles} />
        </div>
      </section>
    </>
  );
}
