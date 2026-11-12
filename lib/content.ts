import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { siteConfig } from '@/data/site';
import { coursesData } from '@/data/courses';
import { facultyData } from '@/data/faculty';
import { testimonialsData } from '@/data/testimonials';
import { faqsData } from '@/data/faqs';
import { partnersData } from '@/data/partners';
import { noticesData } from '@/data/notices';
import { facilitiesData } from '@/data/facilities';
import { galleryData } from '@/data/gallery';
import { careerSectors, placementHighlights } from '@/data/placements';
import type {
  Course,
  CourseLevel,
  FAQItem,
  FacilityItem,
  FacultyMember,
  GalleryItem,
  NewsArticle,
  NewsFrontmatter,
  NoticeCategory,
  NoticeItem,
  PartnerHospital,
  SiteConfig,
  Testimonial,
} from '@/lib/types';

/**
 * Content access layer.
 * In v1, all getters read typed local files in /data and MDX files in /data/news.
 * In v2, swap implementations inside this module to query Sanity/Strapi/DB without modifying pages.
 */

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function getCourses(filter?: { level?: CourseLevel; featuredOnly?: boolean }): Course[] {
  let list = coursesData;
  if (filter?.level) {
    list = list.filter((c) => c.level === filter.level);
  }
  if (filter?.featuredOnly) {
    list = list.filter((c) => c.featured);
  }
  return list;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((c) => c.slug === slug);
}

export function getCourseSlugs(): string[] {
  return coursesData.map((c) => c.slug);
}

export function getFaculty(department?: string): FacultyMember[] {
  if (!department || department === 'All') return facultyData;
  return facultyData.filter((f) => f.department === department);
}

export function getTestimonials(): Testimonial[] {
  return testimonialsData;
}

export function getFAQs(category?: FAQItem['category']): FAQItem[] {
  if (!category) return faqsData;
  return faqsData.filter((f) => f.category === category);
}

export function getPartners(): PartnerHospital[] {
  return partnersData;
}

export function getNotices(category?: NoticeCategory): NoticeItem[] {
  const sorted = [...noticesData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  if (!category) return sorted;
  return sorted.filter((n) => n.category === category);
}

export function getFacilities(category?: FacilityItem['category']): FacilityItem[] {
  if (!category) return facilitiesData;
  return facilitiesData.filter((f) => f.category === category);
}

export function getGalleryItems(category?: GalleryItem['category']): GalleryItem[] {
  if (!category) return galleryData;
  return galleryData.filter((g) => g.category === category);
}

export function getPlacementData() {
  return {
    highlights: placementHighlights,
    sectors: careerSectors,
  };
}

const NEWS_DIR = path.join(process.cwd(), 'data', 'news');

export function getNewsArticles(limit?: number): NewsArticle[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  const files = fs.readdirSync(NEWS_DIR).filter((file) => file.endsWith('.mdx'));

  const articles = files.map((fileName) => {
    const filePath = path.join(NEWS_DIR, fileName);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const slug = (data.slug as string) || fileName.replace(/\.mdx$/, '');

    const frontmatter: NewsFrontmatter = {
      title: String(data.title || 'Untitled Notice'),
      slug,
      date: String(data.date || '2026-01-01'),
      category: String(data.category || 'Campus'),
      readTime: String(data.readTime || '3 min read'),
      excerpt: String(data.excerpt || ''),
      coverImage: String(data.coverImage || '/images/campus-building.jpg'),
      coverAlt: String(data.coverAlt || String(data.title || 'Yuvaan College of Nursing')),
      author: String(data.author || 'Editorial Desk'),
      featured: Boolean(data.featured),
    };

    return {
      frontmatter,
      content,
    };
  });

  articles.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );

  return typeof limit === 'number' ? articles.slice(0, limit) : articles;
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return getNewsArticles().find((a) => a.frontmatter.slug === slug);
}

export function getNewsSlugs(): string[] {
  return getNewsArticles().map((a) => a.frontmatter.slug);
}
