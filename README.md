# yuvaan-college-of-Nursing

A fast, accessible, SEO-ready static website for **Yuvaan College of Nursing** (Plot No. 897/949/1650 & 897/1680, Mahura, Tamando, Khordha, Odisha – 752054), built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, configured with `output: 'export'` for zero-backend CDN hosting.

---

## 1. Folder Structure

```
hemangini-nursing-college/
├─ app/
│  ├─ page.tsx                         # Home (14-section editorial rhythm)
│  ├─ about/page.tsx                   # Overview, Vision/Mission, Leadership, Approvals
│  ├─ courses/page.tsx                 # Filterable & searchable nursing programme catalogue
│  ├─ courses/[slug]/page.tsx          # Static course pages (generateStaticParams)
│  ├─ admissions/page.tsx              # Process, eligibility, documents, dates, fees, PDFs
│  ├─ facilities/page.tsx              # Labs, library, hostel, clinical wards
│  ├─ faculty/page.tsx                 # Department-filterable faculty directory
│  ├─ gallery/page.tsx                 # Photo gallery with accessible keyboard lightbox
│  ├─ placements/page.tsx              # Career pathways, partner hospitals, testimonials
│  ├─ news/page.tsx                    # MDX news & campus events listing
│  ├─ news/[slug]/page.tsx             # Static MDX article detail pages
│  ├─ notices/page.tsx                 # Official Notice Board with category filters + PDFs
│  ├─ faqs/page.tsx                    # Categorised FAQ accordions + FAQPage JSON-LD
│  ├─ contact/page.tsx                 # Enquiry form, helpline details, Google Maps embed
│  ├─ legal/
│  │  ├─ privacy/page.tsx
│  │  ├─ terms/page.tsx
│  │  ├─ anti-ragging/page.tsx
│  │  └─ disclosure/page.tsx           # Mandatory Public Disclosure
│  ├─ layout.tsx                       # Fonts, TopBar, Navbar, Footer, Floating buttons, GA4
│  ├─ not-found.tsx                    # Custom 404 page
│  ├─ sitemap.ts                       # Emits /out/sitemap.xml
│  └─ robots.ts                        # Emits /out/robots.txt
├─ components/
│  ├─ layout/                          # TopBar, Navbar, Footer, FloatingActions, CookieConsent
│  ├─ sections/                        # Hero, Stats, Approvals, Courses, Journey, WhyChoose, etc.
│  ├─ forms/EnquiryForm.tsx            # Zod + HTML5 + Web3Forms + honeypot + consent
│  └─ ui/                              # MotionPrimitives, Accordion, Badge, Breadcrumb, JsonLd
├─ data/
│  ├─ site.ts                          # Centralised college info, contacts, stats, dates
│  ├─ courses.ts                       # 6 nursing courses + syllabus + fee breakdowns
│  ├─ faculty.ts  testimonials.ts  faqs.ts  partners.ts  notices.ts
│  ├─ facilities.ts  gallery.ts  placements.ts
│  └─ news/*.mdx                       # Markdown/MDX news posts
├─ lib/
│  ├─ content.ts                       # Content abstraction layer (getCourses, getNotices, etc.)
│  ├─ seo.ts                           # Metadata & JSON-LD builders
│  ├─ analytics.ts                     # GA4 event wrapper
│  ├─ types.ts                         # TypeScript interfaces
│  └─ utils.ts
├─ public/
│  ├─ images/                          # Campus, lab, clinical, event photos
│  ├─ logos/                           # Brand SVG mark & hospital partner SVGs
│  ├─ downloads/                       # prospectus.pdf, fee-structure.pdf, admission-form.pdf
│  └─ _headers                         # Security headers for Netlify & Cloudflare Pages
├─ styles/globals.css                  # Design tokens & base CSS variables
├─ .env.example
├─ next.config.js                      # output: 'export', images.unoptimized: true, trailingSlash: true
├─ netlify.toml
└─ vercel.json
```

---

## 2. Install, Run & Build Locally

### Prerequisites

- Node.js `>= 18.18` (tested on Node `v22.22.2`) and `npm`

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables (optional for local UI preview; required for live Web3Forms)
cp .env.example .env.local

# 3. Start local development server
npm run dev
# Visit http://localhost:3000

# 4. Run quality checks
npm run typecheck
npm run lint

# 5. Build static export into /out
npm run build
```

Running `npm run build` outputs the complete pre-rendered static website into the **`/out`** directory, ready for any CDN or static web host.

---

## 3. Environment Variables (`.env.example`)

| Variable                      | Required                      | Purpose                                                           |
| ----------------------------- | ----------------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Yes                           | Canonical URL, Open Graph URLs, `sitemap.xml`, `robots.txt`       |
| `NEXT_PUBLIC_FORM_ACCESS_KEY` | Yes (for live email delivery) | Public Web3Forms access key tied to the college's admission inbox |
| `NEXT_PUBLIC_GA_ID`           | Optional                      | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`)                |

---

## 4. Deploying the Static Site

### Option A: Netlify (Recommended)

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Netlify reads `netlify.toml` automatically (`npm run build`, publish directory `out`) and applies `public/_headers`.
4. Add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORM_ACCESS_KEY`, and optionally `NEXT_PUBLIC_GA_ID` under **Site configuration → Environment variables**.
5. Connect your custom domain and enable automatic HTTPS.

### Option B: Cloudflare Pages

1. Connect your GitHub repo in Cloudflare Dashboard → **Workers & Pages → Create → Pages**.
2. Set **Build command:** `npm run build` and **Build output directory:** `out`.
3. Add environment variables in **Settings → Environment variables**.
4. Cloudflare automatically applies `public/_headers`.

### Option C: Vercel

1. Import the GitHub repository in Vercel.
2. Under **Build & Development Settings**, keep `npm run build` and set **Output Directory** to `out` (or let Vercel serve the static export with `vercel.json` headers).
3. Configure `NEXT_PUBLIC_*` environment variables and redeploy.

---

## 5. How to Update Content (v1 Workflow)

All page templates pull data through `/lib/content.ts` from typed `/data` files and `/data/news/*.mdx`. To update content without writing React code:

1. **Phone, Email, Address, Dates, Stats, Approvals, Google Form URL:** Edit `data/site.ts`.
2. **Courses, Syllabus, Seats, Annual Fees:** Edit `data/courses.ts`.
3. **Add a Notice + PDF:**
   - Place your PDF inside `public/downloads/my-notice.pdf`.
   - Add an entry to `noticesData` at the top of `data/notices.ts` pointing `downloadUrl: '/downloads/my-notice.pdf'`.
4. **Publish a News Article / Event:**
   - Create a new `.mdx` file under `data/news/my-event-slug.mdx` with frontmatter (`title`, `slug`, `date`, `category`, `readTime`, `excerpt`, `coverImage`, `coverAlt`, `author`).
5. **Commit & Push to GitHub:** Your CDN host rebuilds and deploys `/out` automatically in ~1 minute.

---

## 6. v2 Upgrade Notes (Moving to Dynamic CMS, Database & Online Applications)

This codebase intentionally separates **UI pages** from **content retrieval** (`/lib/content.ts`) and uses standard client-side `fetch` forms so v2 upgrades require minimal refactoring:

| v1 (Static)                             | v2 (Dynamic Upgrade)                                  | Exact Migration Changes                                                                                                                                                                               |
| --------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local `/data/*.ts` & `/data/news/*.mdx` | Headless CMS (Sanity / Strapi)                        | Keep page components untouched. Update getter functions inside `lib/content.ts` (`getCourses()`, `getNotices()`, `getNewsArticles()`, etc.) to fetch from Sanity/Strapi SDK and make callers `async`. |
| `output: 'export'` in `next.config.js`  | SSR / ISR on Vercel / Node                            | Remove `output: 'export'` (and optionally `images.unoptimized: true`) in `next.config.js` so pages support on-demand ISR (`revalidateTag`) and API routes.                                            |
| Web3Forms email delivery                | Next.js API Route + Postgres / Supabase               | Point `components/forms/EnquiryForm.tsx` `fetch()` target from `https://api.web3forms.com/submit` to `/api/enquiries`. Store submissions in Postgres/Supabase (`DATABASE_URL`, `SUPABASE_*`).         |
| PDF / Google Form Admission             | Multi-step Online Application + File Uploads (PRD F2) | Build `/app/apply/page.tsx` multi-step form uploading marksheets/ID (PDF/JPG ≤ 2 MB) to S3 / Supabase Storage + `/api/applications`.                                                                  |
| Manual Web3Forms emails                 | Automated transactional emails (PRD F3)               | Trigger Resend / SMTP (`RESEND_API_KEY`, `ADMIN_NOTIFY_EMAIL`) inside `/api/enquiries` and `/api/applications` for instant applicant auto-replies and admin alerts.                                   |
| Git commits for notices/gallery         | Admin Dashboard (PRD F6)                              | Add authenticated `/admin` routes (NextAuth / Supabase Auth) or Sanity Studio for staff to upload circulars, notices, and gallery albums directly.                                                    |

---

## 7. Production Deployment & Optional Enhancements Checklist

- [x] **Brand & Identity:** Official Hemangini Nursing College logo, mark, favicon, and portrait imagery integrated.
- [x] **Statutory & Campus Records:** Promoter trust registration (Jyoti Shyam Welfare), ONMRC NOC application details, SPA building approval, Fire & Pollution clearances, and clinical permission verified.
- [x] **Course & Fee Sign-off:** Approved GNM and ANM programme structure, intake capacity, fee breakdown, eligibility criteria, and academic dates confirmed.
- [x] **Official PDFs in `/public/downloads/`:** Clean `prospectus.pdf`, `fee-structure.pdf`, and `admission-form.pdf` ready for download.
- [x] **Contacts & Location:** Verified campus address (Main Road, Itamati, Nayagarh, Odisha – 752068), primary/office helplines, WhatsApp desk, and Google Maps link configured.
- [ ] **Forms & Analytics:** Create Web3Forms key linked to the admissions email (`NEXT_PUBLIC_FORM_ACCESS_KEY`), optional GA4 property (`NEXT_PUBLIC_GA_ID`), and set `NEXT_PUBLIC_SITE_URL` in production hosting.
- [ ] **Optional Media Updates:** Swap additional campus/event photographs into `/public/images/` or add a verified YouTube video/Google Form URL in `data/site.ts` whenever new campus sessions occur.
