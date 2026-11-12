import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Outfit } from 'next/font/google';
import '@/styles/globals.css';
import { getCourses, getNotices, getSiteConfig } from '@/lib/content';
import { buildCollegeJsonLd } from '@/lib/seo';
import { getSiteUrl } from '@/lib/utils';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { JsonLd } from '@/components/ui/JsonLd';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const site = getSiteConfig();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${site.name} | Care. Learn. Lead.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: '/logos/yuvaan-mark.svg',
    apple: '/logos/yuvaan-mark.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
    title: `${site.name} | Care. Learn. Lead.`,
    description: site.description,
    images: [
      {
        url: '/images/campus-building.jpg',
        width: 1200,
        height: 630,
        alt: `${site.name} campus`,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const courses = getCourses();
  const notices = getNotices();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-surface text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <JsonLd data={buildCollegeJsonLd()} />

        <TopBar
          phone={site.phone}
          email={site.email}
          admissionYear={site.admissionYear}
          notices={notices.slice(0, 3).map((n) => ({ id: n.id, title: n.title }))}
        />

        <Navbar collegeName={site.name} phone={site.admissionsPhone} />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer site={site} courses={courses} />

        <FloatingActions
          phone={site.admissionsPhone}
          whatsappNumber={site.whatsappNumber}
          whatsappPrefill={site.whatsappPrefill}
        />

        <CookieConsent />

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
