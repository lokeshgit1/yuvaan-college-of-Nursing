import { SiteConfig } from '@/lib/types';

/**
 * Centralised editable college configuration.
 * All institutional, trust, infrastructure, safety clearance, contact,
 * course, and leadership details confirmed for Yuvaan College of Nursing.
 */
export const siteConfig: SiteConfig = {
  name: 'Yuvaan College of Nursing',
  shortName: 'Yuvaan Nursing',
  tagline: 'Compassionate care shaped by clinical skill, ethics, and academic discipline.',
  description:
    'Yuvaan College of Nursing (Near C.V. Raman College, Mahura, Tamando, Khordha, Odisha — Est. 2025) under SAR Welfare Trust offers GNM and ANM nursing education with modern simulation labs and clinical training.',
  city: 'Mahura, Khordha',
  state: 'Odisha',
  address: 'Near C.V. Raman College, At: Mahura, Post: Tamando, Via/Dist: Khordha, Odisha – 752054',
  phone: '+91 97764 23909',
  alternatePhone: '+91 96682 35580',
  admissionsPhone: '+91 97764 23909',
  whatsappNumber: '919776423909',
  whatsappPrefill:
    'Hello Yuvaan College of Nursing Admissions Desk (Mahura, Khordha), I would like information regarding GNM / ANM admissions.',
  email: 'sarwelfare.bbsr@gmail.com',
  admissionsEmail: 'sarwelfare.bbsr@gmail.com',
  officeHours: 'Monday – Saturday, 9:00 AM to 5:00 PM',
  admissionYear: '2026–27',
  applicationLinks: {
    googleFormUrl: '/contact/',
    prospectusPdf: '/downloads/prospectus.pdf',
    admissionFormPdf: '/downloads/admission-form.pdf',
    feeStructurePdf: '/downloads/fee-structure.pdf',
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=Mahura,Tamando,Khordha,Odisha,752054&output=embed',
  mapDirectionsUrl: 'https://maps.google.com/?q=Mahura,Tamando,Khordha,Odisha,752054',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
  hero: {
    eyebrow: 'NURSING EDUCATION IN MAHURA, KHORDHA, ODISHA',
    headline: 'Care. Learn. Lead.',
    subheadline:
      'Begin your nursing career in Khordha with structured GNM & ANM training, dedicated B.Sc. Nursing lecturers, a 35,000 sq. ft. campus near C.V. Raman College, and clinical permission for practical postings.',
    primaryCta: 'Explore Courses',
    secondaryCta: 'Book Campus Visit',
    image: '/images/hero-student.jpg',
    imageAlt:
      'Smiling nursing student in teal and white uniform carrying a clinical clipboard inside a sunlit nursing college corridor',
    floatingBadges: {
      topValue: 'Est. 2025',
      topLabel: 'Mahura, Khordha',
      bottomValue: '35,000 sq.ft',
      bottomLabel: 'SPA & Safety Cleared',
    },
  },
  stats: [
    {
      id: 'established',
      value: 2025,
      suffix: '',
      label: 'Established Year',
      iconName: 'award',
      confirm: false,
    },
    {
      id: 'students',
      value: 60,
      suffix: ' Seats',
      label: 'ANM Annual Intake (2026–27)',
      iconName: 'users',
      confirm: false,
    },
    {
      id: 'campus',
      value: 35000,
      suffix: '',
      label: 'Total Campus Area (Sq. Ft.)',
      iconName: 'hospital',
      confirm: false,
    },
    {
      id: 'faculty',
      value: 10,
      suffix: '+',
      label: 'Academic & Lab Staff',
      iconName: 'briefcase',
      confirm: false,
    },
  ],
  approvals: [
    {
      id: 'onmrc',
      title: 'Odisha Nurses & Midwives Council',
      authority: 'New NOC Application (Session 2026–27)',
      regNumber: 'ANM Intake: 60 Seats (2026–27)',
      status: 'NOC Applied (2026–27)',
      confirm: false,
    },
    {
      id: 'clinical',
      title: 'Clinical & Hospital Permission',
      authority: 'Concerned Authority & Affiliated Hospital',
      regNumber: 'Clinical Permission: Yes • Consent Obtained',
      status: 'Hospital Consent Verified',
      confirm: false,
    },
    {
      id: 'safety',
      title: 'Campus & Safety Clearances',
      authority: 'SPA Approved • Registered Architect',
      regNumber: 'Fire & Pollution Clearances Verified',
      status: 'Verified Clearances',
      confirm: false,
    },
    {
      id: 'trust',
      title: 'SAR Welfare (Trust)',
      authority: 'Registered under Trust Act, Bhubaneswar',
      regNumber: 'Reg. No. 41132306899 (Est. 2019)',
      status: 'Registered Promoter Trust',
      confirm: false,
    },
  ],
  whyChoose: [
    {
      id: 'faculty',
      title: 'Dedicated Nursing Leadership & Faculty',
      description:
        'Led by Principal Subhalaxmi Behera, Vice-Principal Debasis Sahu, and 6 B.Sc. Nursing lecturers.',
      iconName: 'graduation',
      tint: 'teal',
    },
    {
      id: 'hospital',
      title: 'Approved Clinical Permission',
      description:
        'Clinical training permission obtained from concerned authorities with affiliated hospital consent for practical care.',
      iconName: 'stethoscope',
      tint: 'pink',
    },
    {
      id: 'campus',
      title: '31,559 Sq. Ft. Built-Up Academic Block',
      description:
        'SPA-approved building at Mahura (Near C.V. Raman College) with Architect Completion, Fire, and Pollution clearances.',
      iconName: 'home',
      tint: 'sun',
    },
    {
      id: 'labs',
      title: 'Dedicated Labs & Lab Assistants',
      description:
        'Supported by 2 dedicated B.Sc. Lab Assistants across Nursing Foundation, Anatomy, MCH, and Nutrition labs.',
      iconName: 'microscope',
      tint: 'blue',
    },
    {
      id: 'scholarship',
      title: 'Transparent Fees & Scholarship Guidance',
      description:
        'Clear annual fee guidance and documentation support for eligible Odisha state and central scholarship schemes.',
      iconName: 'wallet',
      tint: 'mint',
    },
    {
      id: 'placement',
      title: 'Career & Hospital Readiness',
      description:
        'Clinical attendance monitoring, OSCE skill assessments, and guidance for hospital and community health roles.',
      iconName: 'heartHandshake',
      tint: 'cream',
    },
  ],
  journeySteps: [
    {
      step: 'Step 01',
      title: 'Enquire & Counsel',
      description:
        'Submit the short enquiry form or call +91 97764 23909 to discuss GNM & ANM eligibility and campus facilities.',
      iconName: 'messageSquare',
      bgClass: 'bg-surface-sun',
    },
    {
      step: 'Step 02',
      title: 'Apply & Submit Documents',
      description:
        'Download the admission form PDF or fill our online application link with 10+2 marksheets and ID proofs.',
      iconName: 'fileCheck',
      bgClass: 'bg-surface-grey',
    },
    {
      step: 'Step 03',
      title: 'Verification & Fee Payment',
      description:
        'Complete merit/counselling verification at our Mahura, Khordha campus, review the fee schedule, and confirm your seat.',
      iconName: 'creditCard',
      bgClass: 'bg-surface-blush',
    },
    {
      step: 'Step 04',
      title: 'Start Clinical Training',
      description:
        'Attend orientation, receive your clinical kit, and begin supervised nursing labs and hospital rotations.',
      iconName: 'activity',
      bgClass: 'bg-surface-mint',
    },
  ],
  admissionDates: [
    {
      event: 'Issue of Application Forms & Prospectus',
      date: 'May 01, 2026',
      status: 'Open',
      confirm: false,
    },
    {
      event: 'Last Date for Application Submission (Round 1)',
      date: 'July 15, 2026',
      status: 'Upcoming',
      confirm: false,
    },
    {
      event: 'Document Verification & Merit Counselling',
      date: 'July 25 – August 05, 2026',
      status: 'Scheduled',
      confirm: false,
    },
    {
      event: 'Orientation & Lamp Lighting Induction',
      date: 'September 01, 2026',
      status: 'Scheduled',
      confirm: false,
    },
  ],
  documentsChecklist: [
    'Class 10 (SSC) Marksheet & Passing Certificate (Original + 2 photocopies)',
    'Class 12 (HSC / 10+2) Marksheet & Passing Certificate (Original + 2 photocopies)',
    'Transfer Certificate / School Leaving Certificate & Migration Certificate (if applicable)',
    'Aadhaar Card or Government Photo Identity Proof',
    'Medical Fitness Certificate from a Registered Medical Practitioner',
    'Caste / Category & Income Certificate (for reserved category / scholarship applicants)',
    '6 Recent Passport-size Colour Photographs',
  ],
  about: {
    establishedYear: '2025',
    trustName: 'SAR Welfare (Registered under Trust Act)',
    vision:
      'To nurture ethically grounded, clinically skilled nursing professionals who deliver compassionate, evidence-based patient care across Khordha, Odisha, and beyond.',
    mission: [
      'Deliver competency-driven GNM and ANM nursing education combining classroom foundations with supervised bedside training.',
      'Cultivate empathy, patient safety, teamwork, and lifelong learning among every student nurse.',
      'Partner with multi-specialty and community hospitals to bridge academic theory and real-world healthcare delivery.',
      'Maintain transparent governance, safe facilities with Fire & Pollution clearances, and inclusive opportunities for aspiring students.',
    ],
    principalName: 'Subhalaxmi Behera',
    principalQualification: 'B.Sc. Nursing',
    principalMessage:
      'Nursing is both a science of precision and an art of human compassion. At Yuvaan College of Nursing, every student is mentored individually—from their first procedure in our Nursing Foundation Lab to supervised ward rotations—so they step into clinical care with confidence and integrity.',
    vicePrincipalName: 'Debasis Sahu',
    vicePrincipalQualification: 'B.Sc. Nursing',
    chairmanName: 'Debaraj Majhi',
    chairmanPhone: '+91 96682 35580',
    chairmanMessage:
      'Under SAR Welfare, we established Yuvaan College of Nursing at Mahura, Khordha in 2025 with a clear purpose: families in our region deserve accessible, transparent, high-integrity nursing education backed by dedicated faculty and compliant campus infrastructure.',
    secretaryName: 'Ranjan Mahanta',
    secretaryPhone: '+91 97764 23909',
    authorisedRepresentative: 'Debaraj Majhi',
    contactPersonName: 'Gopal Krushna Panda',
  },
  disclosure: {
    trustRegistrationNo: '41132306899',
    trustRegisteredYear: '2019',
    trustRegisteredAt: 'Bhubaneswar',
    universityAffiliation:
      'Odisha Nurses & Midwives Registration Council (ONMRC) — Session 2026–27 NOC Application',
    incCode: 'Indian Nursing Council (INC) Norms Compliant • Details at College Office',
    stateCouncilCode: 'ONMRC Affiliation & Inspection Record (Session 2026–27)',
    landArea: '35,000 Sq. Ft. (Near C.V. Raman College, Mahura, Tamando, Khordha)',
    builtUpArea: '31,559 Sq. Ft.',
    buildingApproval:
      'Approved by SPA (Special Planning Authority) • Registered Architect Completion Certificate',
    clearances: [
      'Building Plan Approved by SPA',
      'Building Completion Certificate from Registered Architect',
      'Fire Clearance Certificate Obtained',
      'Pollution Clearance Certificate Obtained',
      'Clinical Permission Obtained from Concerned Authority (Yes)',
      'Consent Letter from Affiliated Hospital for Practical Training Uploaded',
    ],
    parentHospitalBeds:
      'Clinical Permission Obtained • Affiliated Hospital Consent Letter on Record',
    staffSummary:
      'Principal (1), Vice-Principal (1), Lecturers (6 — B.Sc. Nursing), Lab Assistants (2 — B.Sc.), Administrative & Support Staff (3 — Accountant, Clerk, Store Keeper)',
    antiRaggingHelpline: '1800-180-5522 (National Anti-Ragging Helpline)',
    nodalOfficerPhone: '+91 97764 23909',
    nodalOfficerEmail: 'sarwelfare.bbsr@gmail.com',
  },
};
