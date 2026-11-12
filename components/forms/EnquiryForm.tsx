'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name (at least 2 characters).'),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$|^\+?\d{10,14}$/, 'Enter a valid 10-digit mobile number.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  course: z.string().trim().min(1, 'Please select a nursing course.'),
  city: z.string().trim().min(2, 'Please enter your city or district.'),
  message: z.string().trim().max(1000, 'Message is too long.').optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please accept the privacy consent to submit your enquiry.' }),
  }),
  botcheck: z.string().optional(),
});

type FormValues = {
  name: string;
  phone: string;
  email: string;
  course: string;
  city: string;
  message: string;
  consent: boolean;
  botcheck: string;
};

interface EnquiryFormProps {
  courses: { slug: string; title: string }[];
  variant?: 'full' | 'compact';
  defaultCourse?: string;
  heading?: string;
}

export function EnquiryForm({
  courses,
  variant = 'full',
  defaultCourse = '',
  heading,
}: EnquiryFormProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    email: '',
    course: defaultCourse || (courses[0]?.title ?? ''),
    city: '',
    message: '',
    consent: false,
    botcheck: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMsg, setServerMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const field = target.name as keyof FormValues;
    const val =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : target.value;

    setValues((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMsg('');

    // Silent bot rejection if hidden honeypot field is filled
    if (values.botcheck.trim().length > 0) {
      setStatus('success');
      setServerMsg('Thank you! Your admission enquiry has been recorded.');
      return;
    }

    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    const accessKey =
      process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || '574efc03-5996-4dd7-b7cb-5da51fb62de6';
    if (!accessKey) {
      setStatus('error');
      setServerMsg(
        'Form delivery key (NEXT_PUBLIC_FORM_ACCESS_KEY) is not configured yet. Please call or WhatsApp our admissions helpline directly.'
      );
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Admission Enquiry (${values.course}) — Yuvaan College of Nursing`,
          from_name: 'Yuvaan College of Nursing Website',
          name: values.name,
          phone: values.phone,
          email: values.email,
          course: values.course,
          city: values.city,
          message: values.message || 'Callback requested regarding nursing admissions.',
          botcheck: false,
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };
      if (response.ok && data.success) {
        setStatus('success');
        setServerMsg(
          'Thank you! Your enquiry has been sent to our admissions counsellors. We will contact you within 1 working day.'
        );
        trackEvent('enquiry_submit', { course: values.course, variant });
        setValues({
          name: '',
          phone: '',
          email: '',
          course: courses[0]?.title ?? '',
          city: '',
          message: '',
          consent: false,
          botcheck: '',
        });
      } else {
        setStatus('error');
        setServerMsg(
          data.message || 'Could not submit enquiry. Please call our helpline directly.'
        );
      }
    } catch {
      setStatus('error');
      setServerMsg(
        'Network error while sending enquiry. Please try again or reach us via WhatsApp.'
      );
    }
  };

  const inputBase =
    'h-12 w-full rounded-btn border bg-white px-3.5 text-[15px] text-navy placeholder:text-ink-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        'rounded-card border border-border bg-white shadow-card',
        variant === 'compact' ? 'p-5 md:p-6' : 'p-6 md:p-8'
      )}
    >
      {heading ? (
        <h3 className="mb-4 font-heading text-xl font-semibold text-navy">{heading}</h3>
      ) : null}

      {/* Hidden Honeypot for Spam Protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`botcheck-${variant}`}>Leave this field empty</label>
        <input
          id={`botcheck-${variant}`}
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={values.botcheck}
          onChange={handleChange}
        />
      </div>

      {status === 'success' ? (
        <div
          role="status"
          className="border-feedback-success/30 mb-5 flex items-start gap-3 rounded-btn border bg-emerald-50 p-4 text-sm text-emerald-900"
        >
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-feedback-success"
            aria-hidden="true"
          />
          <p>{serverMsg}</p>
        </div>
      ) : null}

      {status === 'error' ? (
        <div
          role="alert"
          className="border-feedback-error/30 mb-5 flex items-start gap-3 rounded-btn border bg-red-50 p-4 text-sm text-red-900"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-feedback-error" aria-hidden="true" />
          <p>{serverMsg}</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`name-${variant}`} className="mb-1.5 block text-sm font-medium text-navy">
            Student / Parent Name <span className="text-accent-dark">*</span>
          </label>
          <input
            id={`name-${variant}`}
            name="name"
            type="text"
            required
            placeholder="e.g. Priya Sharma"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `name-err-${variant}` : undefined}
            className={cn(inputBase, errors.name ? 'border-feedback-error' : 'border-border')}
          />
          {errors.name ? (
            <p
              id={`name-err-${variant}`}
              className="mt-1 flex items-center gap-1 text-xs font-medium text-feedback-error"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.name}</span>
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`phone-${variant}`}
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Mobile Number <span className="text-accent-dark">*</span>
          </label>
          <input
            id={`phone-${variant}`}
            name="phone"
            type="tel"
            required
            placeholder="10-digit mobile number"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `phone-err-${variant}` : undefined}
            className={cn(inputBase, errors.phone ? 'border-feedback-error' : 'border-border')}
          />
          {errors.phone ? (
            <p
              id={`phone-err-${variant}`}
              className="mt-1 flex items-center gap-1 text-xs font-medium text-feedback-error"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`email-${variant}`}
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Email Address <span className="text-accent-dark">*</span>
          </label>
          <input
            id={`email-${variant}`}
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `email-err-${variant}` : undefined}
            className={cn(inputBase, errors.email ? 'border-feedback-error' : 'border-border')}
          />
          {errors.email ? (
            <p
              id={`email-err-${variant}`}
              className="mt-1 flex items-center gap-1 text-xs font-medium text-feedback-error"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.email}</span>
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`course-${variant}`}
            className="mb-1.5 block text-sm font-medium text-navy"
          >
            Course Interested In <span className="text-accent-dark">*</span>
          </label>
          <select
            id={`course-${variant}`}
            name="course"
            required
            value={values.course}
            onChange={handleChange}
            aria-invalid={Boolean(errors.course)}
            className={cn(inputBase, errors.course ? 'border-feedback-error' : 'border-border')}
          >
            {courses.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
            <option value="General Guidance / Undecided">Not Sure — Need Guidance</option>
          </select>
        </div>

        <div className={variant === 'compact' ? 'sm:col-span-2' : ''}>
          <label htmlFor={`city-${variant}`} className="mb-1.5 block text-sm font-medium text-navy">
            City / District <span className="text-accent-dark">*</span>
          </label>
          <input
            id={`city-${variant}`}
            name="city"
            type="text"
            required
            placeholder="Your city or hometown"
            value={values.city}
            onChange={handleChange}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? `city-err-${variant}` : undefined}
            className={cn(inputBase, errors.city ? 'border-feedback-error' : 'border-border')}
          />
          {errors.city ? (
            <p
              id={`city-err-${variant}`}
              className="mt-1 flex items-center gap-1 text-xs font-medium text-feedback-error"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.city}</span>
            </p>
          ) : null}
        </div>

        {variant === 'full' ? (
          <div className="sm:col-span-2">
            <label
              htmlFor={`message-${variant}`}
              className="mb-1.5 block text-sm font-medium text-navy"
            >
              Questions or Campus Visit Preference
            </label>
            <textarea
              id={`message-${variant}`}
              name="message"
              rows={3}
              placeholder="Ask about eligibility, hostel availability, fees, or preferred campus visit date..."
              value={values.message}
              onChange={handleChange}
              className="placeholder:text-ink-muted/70 focus:ring-primary/25 w-full rounded-btn border border-border bg-white p-3.5 text-[15px] text-navy focus:border-primary focus:outline-none focus:ring-2"
            />
          </div>
        ) : null}
      </div>

      {/* Consent Checkbox */}
      <div className="mt-4">
        <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-ink-muted">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary"
          />
          <span>
            I authorise Yuvaan College of Nursing to contact me via phone, WhatsApp, or email
            regarding admission counselling in accordance with the{' '}
            <Link href="/legal/privacy/" className="font-semibold text-primary-dark underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-feedback-error">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.consent}</span>
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-btn bg-accent-dark px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#065f46] disabled:cursor-not-allowed disabled:opacity-65"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            <span>Submitting Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>Request Admission Callback</span>
          </>
        )}
      </button>
    </form>
  );
}
