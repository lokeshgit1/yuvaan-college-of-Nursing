import React from 'react';
import { FileCheck2 } from 'lucide-react';
import { getCourses, getSiteConfig } from '@/lib/content';
import { buildBreadcrumbJsonLd, createPageMetadata } from '@/lib/seo';
import { PageBanner } from '@/components/ui/PageBanner';
import { JsonLd } from '@/components/ui/JsonLd';

export const metadata = createPageMetadata({
  title: 'Mandatory Public Disclosure',
  description:
    'Statutory institutional disclosure for Yuvaan College of Nursing: trust details, INC & State Council registration codes, land/hospital infrastructure, and seat matrix.',
  path: '/legal/disclosure/',
});

export default function MandatoryDisclosurePage() {
  const site = getSiteConfig();
  const courses = getCourses();

  const institutionalRows = [
    { label: 'Name of Institution', value: site.name },
    { label: 'Established Year', value: site.about.establishedYear },
    { label: 'Campus Address', value: site.address },
    {
      label: 'Official Contact Person & Helpline',
      value: `${site.about.contactPersonName} • ${site.phone} / ${site.alternatePhone} • ${site.email}`,
    },
    {
      label: 'Promoter Trust / Society',
      value: `${site.about.trustName} — Reg. No. ${site.disclosure.trustRegistrationNo} (Registered ${site.disclosure.trustRegisteredYear} at ${site.disclosure.trustRegisteredAt})`,
    },
    {
      label: 'Chairperson & Authorised Representative',
      value: `${site.about.chairmanName} (${site.about.chairmanPhone})`,
    },
    {
      label: 'Secretary',
      value: `${site.about.secretaryName} (${site.about.secretaryPhone})`,
    },
    {
      label: 'Principal',
      value: `${site.about.principalName} (${site.about.principalQualification})`,
    },
    {
      label: 'Vice-Principal',
      value: `${site.about.vicePrincipalName} (${site.about.vicePrincipalQualification})`,
    },
    {
      label: 'Council Application / Affiliation Status',
      value: site.disclosure.universityAffiliation,
    },
    { label: 'Indian Nursing Council (INC) Code', value: site.disclosure.incCode },
    { label: 'State Nursing Council Code', value: site.disclosure.stateCouncilCode },
    {
      label: 'Campus Land & Built-up Area',
      value: `${site.disclosure.landArea} | Built-up: ${site.disclosure.builtUpArea}`,
    },
    {
      label: 'Building & Safety Clearances',
      value: `${site.disclosure.buildingApproval} • Fire & Pollution Clearances Obtained`,
    },
    { label: 'Clinical & Hospital Permission', value: site.disclosure.parentHospitalBeds },
    { label: 'Academic & Support Staff Summary', value: site.disclosure.staffSummary },
    {
      label: 'Anti-Ragging Nodal Desk',
      value: `${site.disclosure.nodalOfficerPhone} | ${site.disclosure.nodalOfficerEmail}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Mandatory Public Disclosure', path: '/legal/disclosure/' },
        ])}
      />

      <PageBanner
        eyebrow="Statutory Transparency"
        title="Mandatory Public Disclosure"
        description="Official institutional, trust, regulatory, infrastructure, and intake details for Yuvaan College of Nursing, Mahura, Tamando, Khordha."
        breadcrumbs={[{ label: 'Mandatory Disclosure' }]}
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-container space-y-10 px-4 md:px-6">
          <div className="border-primary/25 bg-surface-mint/55 rounded-card border p-4 text-sm text-navy">
            <div className="flex items-start gap-2.5">
              <FileCheck2
                className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark"
                aria-hidden="true"
              />
              <p>
                <strong>Verified Public Record:</strong> Institutional, trust, campus measurement,
                safety clearance, and faculty records published below are confirmed by{' '}
                <strong>{site.name}</strong> and <strong>SAR Welfare</strong>.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold text-navy">
                A. Institutional &amp; Regulatory Information
              </h2>
            </div>
            <div className="overflow-x-auto rounded-card border border-border shadow-soft">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <tbody className="divide-y divide-border bg-white">
                  {institutionalRows.map((row) => (
                    <tr key={row.label}>
                      <th className="bg-surface-mint/40 w-1/3 px-5 py-3.5 font-heading font-semibold text-navy">
                        {row.label}
                      </th>
                      <td className="px-5 py-3.5 text-ink">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold text-navy">
                B. Permitted Programmes, Intake &amp; Fee Summary
              </h2>
            </div>
            <div className="overflow-x-auto rounded-card border border-border shadow-soft">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead className="bg-surface-mint/70 text-navy">
                  <tr>
                    <th className="px-5 py-3.5 font-heading font-semibold">Programme</th>
                    <th className="px-5 py-3.5 font-heading font-semibold">Level</th>
                    <th className="px-5 py-3.5 font-heading font-semibold">Duration</th>
                    <th className="px-5 py-3.5 font-heading font-semibold">Annual Intake</th>
                    <th className="px-5 py-3.5 font-heading font-semibold">Annual Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-white">
                  {courses.map((course) => (
                    <tr key={course.slug}>
                      <td className="px-5 py-3.5 font-semibold text-navy">{course.title}</td>
                      <td className="px-5 py-3.5 text-ink-muted">{course.level}</td>
                      <td className="px-5 py-3.5 text-ink-muted">{course.duration}</td>
                      <td className="px-5 py-3.5 text-ink-muted">{course.seats}</td>
                      <td className="px-5 py-3.5 font-medium text-primary-dark">
                        {course.annualFee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
