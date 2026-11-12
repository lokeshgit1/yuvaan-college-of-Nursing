import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { Course, FAQItem } from '@/lib/types';
import { getSiteUrl } from '@/lib/utils';

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = '/images/campus-building.jpg',
}: MetadataParams): Metadata {
  const siteUrl = getSiteUrl();
  const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  const canonical = `${siteUrl}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [`${siteUrl}${ogImage}`],
    },
  };
}

export function buildCollegeJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': ['CollegeOrUniversity', 'LocalBusiness'],
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/logos/yuvaan-mark.svg`,
    image: `${siteUrl}/images/campus-building.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.phone.replace(/\s*\[CONFIRM\]/g, ''),
    email: siteConfig.email.replace(/\s*\[CONFIRM\]/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Sa 09:00-17:00',
    sameAs: Object.values(siteConfig.socials),
  };
}

export function buildCourseJsonLd(course: Course) {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.shortDescription,
    url: `${siteUrl}/courses/${course.slug}/`,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.name,
      sameAs: siteUrl,
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
  };
}

export function buildFaqJsonLd(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
