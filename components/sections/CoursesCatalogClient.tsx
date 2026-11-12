'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Course } from '@/lib/types';
import { CourseCard } from '@/components/sections/CourseCard';
import { cn } from '@/lib/utils';

const courseFilters = ['All', 'GNM', 'ANM'] as const;

export function CoursesCatalogClient({ courses }: { courses: Course[] }) {
  const [selectedFilter, setSelectedFilter] = useState<(typeof courseFilters)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesTab =
        selectedFilter === 'All' || course.shortTitle.toUpperCase() === selectedFilter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.shortDescription.toLowerCase().includes(q) ||
        course.eligibility.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [courses, selectedFilter, query]);

  return (
    <div className="space-y-8">
      {/* Filter & Search Bar */}
      <div className="flex flex-col justify-between gap-4 rounded-card border border-border bg-white p-4 shadow-soft md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter nursing courses">
          {courseFilters.map((tab) => {
            const active = selectedFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedFilter(tab)}
                className={cn(
                  'min-h-[42px] rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                  active
                    ? 'bg-accent-dark text-white'
                    : 'bg-surface-mint/60 text-navy hover:bg-surface-mint'
                )}
              >
                {tab === 'All' ? 'All Programmes (2)' : tab}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <label htmlFor="course-search" className="sr-only">
            Search nursing courses
          </label>
          <input
            id="course-search"
            type="search"
            placeholder="Search GNM, ANM, eligibility..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:ring-primary/25 h-11 w-full rounded-btn border border-border bg-white pl-10 pr-3 text-sm text-navy placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      {/* Course Grid */}
      {filtered.length > 0 ? (
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-card border border-border bg-white p-10 text-center">
          <p className="font-heading text-lg font-semibold text-navy">
            No matching nursing courses found
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Yuvaan College of Nursing offers GNM and ANM programmes. Clear search to view both.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedFilter('All');
              setQuery('');
            }}
            className="mt-4 inline-flex min-h-[42px] items-center rounded-btn bg-primary-dark px-5 py-2 text-sm font-semibold text-white"
          >
            Show GNM &amp; ANM
          </button>
        </div>
      )}

      {/* Quick Comparison Matrix */}
      <div className="pt-6">
        <h2 className="font-heading text-2xl font-semibold text-navy">
          GNM vs ANM Quick Comparison
        </h2>
        <p className="mt-1 text-sm text-ink-muted">
          Compare duration, intake capacity, eligibility, and annual fees between GNM and ANM.
        </p>

        <div className="mt-4 overflow-x-auto rounded-card border border-border bg-white shadow-soft">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-surface-mint/70 text-navy">
              <tr>
                <th className="px-4 py-3.5 font-heading font-semibold">Programme</th>
                <th className="px-4 py-3.5 font-heading font-semibold">Level</th>
                <th className="px-4 py-3.5 font-heading font-semibold">Duration</th>
                <th className="px-4 py-3.5 font-heading font-semibold">Seats</th>
                <th className="px-4 py-3.5 font-heading font-semibold">Annual Fee</th>
                <th className="px-4 py-3.5 font-heading font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {courses.map((course) => (
                <tr key={course.slug} className="hover:bg-surface-cream/40">
                  <td className="px-4 py-3.5 font-semibold text-navy">{course.title}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{course.level}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{course.duration}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{course.seats}</td>
                  <td className="px-4 py-3.5 font-medium text-navy">{course.annualFee}</td>
                  <td className="px-4 py-3.5">
                    <Link
                      href={`/courses/${course.slug}/`}
                      className="font-semibold text-primary-dark underline underline-offset-4 hover:text-accent-dark"
                    >
                      View Syllabus
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
