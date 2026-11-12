export type CourseLevel = 'Diploma' | 'Undergraduate' | 'Postgraduate';

export interface CourseSyllabusItem {
  term: string;
  subjects: string[];
}

export interface CourseFeeRow {
  item: string;
  amount: string;
  note?: string;
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  level: CourseLevel;
  duration: string;
  seats: string;
  annualFee: string;
  eligibility: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  syllabus: CourseSyllabusItem[];
  clinicalTraining: string;
  careerOptions: string[];
  feeBreakdown: CourseFeeRow[];
  faqs: CourseFAQ[];
  featured: boolean;
  confirmNote?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  image?: string;
  initials?: string;
  confirm?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  quote: string;
  rating: number;
  initials: string;
  confirm?: boolean;
}

export interface FAQItem {
  id: string;
  category:
    | 'Admissions & Eligibility'
    | 'Fees & Scholarships'
    | 'Clinical Training'
    | 'Hostel & Campus'
    | 'Approvals';
  question: string;
  answer: string;
}

export interface PartnerHospital {
  id: string;
  name: string;
  type: string;
  city: string;
  beds?: string;
  logoPath: string;
  confirm?: boolean;
}

export type NoticeCategory =
  'Admissions' | 'Examinations' | 'Circulars' | 'Scholarships' | 'Events';

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: NoticeCategory;
  summary: string;
  downloadUrl?: string;
  isNew?: boolean;
  confirm?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Laboratories' | 'Academic' | 'Campus Life' | 'Clinical';
  shortDescription: string;
  details: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Clinical Training' | 'Events' | 'Hostel & Library';
  caption: string;
  image: string;
  alt: string;
}

export interface NewsFrontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  author: string;
  featured?: boolean;
}

export interface NewsArticle {
  frontmatter: NewsFrontmatter;
  content: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: 'users' | 'award' | 'hospital' | 'briefcase';
  confirm?: boolean;
}

export interface ApprovalItem {
  id: string;
  title: string;
  authority: string;
  regNumber: string;
  status: string;
  confirm: boolean;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  alternatePhone: string;
  admissionsPhone: string;
  whatsappNumber: string;
  whatsappPrefill: string;
  email: string;
  admissionsEmail: string;
  officeHours: string;
  admissionYear: string;
  applicationLinks: {
    googleFormUrl: string;
    prospectusPdf: string;
    admissionFormPdf: string;
    feeStructurePdf: string;
  };
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    floatingBadges: {
      topValue: string;
      topLabel: string;
      bottomValue: string;
      bottomLabel: string;
    };
  };
  stats: StatItem[];
  approvals: ApprovalItem[];
  whyChoose: {
    id: string;
    title: string;
    description: string;
    iconName: 'graduation' | 'stethoscope' | 'home' | 'microscope' | 'wallet' | 'heartHandshake';
    tint: 'teal' | 'pink' | 'sun' | 'blue' | 'mint' | 'cream';
  }[];
  journeySteps: {
    step: string;
    title: string;
    description: string;
    iconName: 'messageSquare' | 'fileCheck' | 'creditCard' | 'activity';
    bgClass: string;
  }[];
  admissionDates: {
    event: string;
    date: string;
    status: string;
    confirm: boolean;
  }[];
  documentsChecklist: string[];
  about: {
    establishedYear: string;
    trustName: string;
    vision: string;
    mission: string[];
    principalName: string;
    principalQualification: string;
    principalImage?: string;
    principalMessage: string;
    vicePrincipalName: string;
    vicePrincipalQualification: string;
    vicePrincipalImage?: string;
    chairmanName: string;
    chairmanPhone: string;
    chairmanImage?: string;
    chairmanMessage: string;
    secretaryName: string;
    secretaryPhone: string;
    secretaryImage?: string;
    authorisedRepresentative: string;
    contactPersonName: string;
  };
  disclosure: {
    trustRegistrationNo: string;
    trustRegisteredYear: string;
    trustRegisteredAt: string;
    universityAffiliation: string;
    incCode: string;
    stateCouncilCode: string;
    landArea: string;
    builtUpArea: string;
    buildingApproval: string;
    clearances: string[];
    parentHospitalBeds: string;
    staffSummary: string;
    antiRaggingHelpline: string;
    nodalOfficerPhone: string;
    nodalOfficerEmail: string;
  };
}
