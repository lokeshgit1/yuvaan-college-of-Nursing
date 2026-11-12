import { Course } from '@/lib/types';

/**
 * Programmes offered by Yuvaan College of Nursing:
 * GNM (General Nursing & Midwifery) and ANM (Auxiliary Nurse Midwifery).
 * Note: DMET Odisha New NOC application (2026–27) lists ANM with 60 seats.
 */
export const coursesData: Course[] = [
  {
    slug: 'gnm',
    title: 'General Nursing & Midwifery (GNM)',
    shortTitle: 'GNM',
    level: 'Diploma',
    duration: '3 Years (including 6-Month Internship)',
    seats: 'As per INC / State Intake',
    annualFee: '₹62,000 / Year',
    eligibility:
      '10+2 with English and minimum 40% aggregate marks (Science/PCB preferred; Arts/Commerce per INC/State norms)',
    image: '/images/skills-lab.jpg',
    imageAlt:
      'GNM nursing students practicing vital signs monitoring in the clinical skills laboratory',
    shortDescription:
      'Comprehensive 3-year diploma preparing skilled hospital nurses and midwives through clinical ward rotations and bedside practice.',
    overview:
      'The General Nursing & Midwifery (GNM) diploma equips 10+2 graduates with strong clinical bedside skills, medical-surgical nursing knowledge, maternal and child health care competence, and hospital ward management readiness. Nearly two-thirds of training emphasises guided practical demonstrations and hospital postings.',
    highlights: [
      'Structured 3-year INC-aligned nursing & midwifery curriculum',
      'Open to 10+2 students meeting state nursing admission norms',
      'Dedicated Nursing Foundation, Anatomy, and MCH simulation lab practice',
      'Mandatory 6-month supervised hospital & community clinical internship in Year 3',
    ],
    syllabus: [
      {
        term: 'First Year',
        subjects: [
          'Bio-Sciences (Anatomy, Physiology & Microbiology)',
          'Behavioural Sciences (Psychology & Sociology)',
          'Nursing Foundations & First Aid',
          'Community Health Nursing I, Environmental Hygiene & Nutrition',
        ],
      },
      {
        term: 'Second Year',
        subjects: [
          'Medical-Surgical Nursing I & II (including Pharmacology)',
          'Mental Health & Psychiatric Nursing',
          'Child Health (Paediatric) Nursing',
        ],
      },
      {
        term: 'Third Year & Internship',
        subjects: [
          'Midwifery & Gynaecological Nursing',
          'Community Health Nursing II',
          'Nursing Education, Research Introduction & Ward Management',
          '6-Month Supervised Hospital & Rural Clinical Internship',
        ],
      },
    ],
    clinicalTraining:
      'Scheduled morning and rotational ward postings across medical, surgical, orthopaedic, maternity, paediatric, and community health departments under clinical tutor supervision.',
    careerOptions: [
      'Registered Staff Nurse in Multi-Specialty & District Hospitals',
      'Maternity, Operation Theatre (OT) & General Ward Nurse',
      'Government Health Services & Community Care Nurse',
      'School Health & Industrial Wellness Nurse',
      'Eligible for RN/RM registration and higher nursing studies upon completion',
    ],
    feeBreakdown: [
      { item: 'Annual Tuition Fee', amount: '₹52,000', note: 'Per academic year' },
      {
        item: 'Lab, Clinical & Library Fee',
        amount: '₹10,000',
        note: 'Annual charges',
      },
      {
        item: 'Council Examination & Registration',
        amount: 'As per Odisha State Nursing Council norms',
      },
      {
        item: 'Optional Hostel & Mess',
        amount: 'As per college hostel circular',
      },
    ],
    faqs: [
      {
        question: 'Can Arts or Commerce 12th students apply for GNM?',
        answer:
          'Under INC guidelines, 10+2 students from Science as well as Arts/Commerce with English (minimum 40% aggregate) are eligible, subject to annual Odisha State Nursing admission rules.',
      },
      {
        question: 'What is the total duration of the GNM programme?',
        answer:
          'GNM is a 3-year diploma programme including a mandatory 6-month supervised clinical internship in the final year.',
      },
    ],
    featured: true,
  },
  {
    slug: 'anm',
    title: 'Auxiliary Nurse Midwifery (ANM)',
    shortTitle: 'ANM',
    level: 'Diploma',
    duration: '2 Years',
    seats: '60 Seats',
    annualFee: '₹48,000 / Year',
    eligibility:
      '10+2 pass in any stream from a recognised board (Age 17–35 years as per council norms)',
    image: '/images/community-camp.jpg',
    imageAlt:
      'ANM nursing students walking across the college campus with clinical textbooks and ID badges',
    shortDescription:
      'Two-year frontline healthcare and midwifery diploma focused on primary care, maternal wellness, immunisation, and community health.',
    overview:
      'The Auxiliary Nurse Midwifery (ANM) programme trains dedicated frontline maternal, child, and community healthcare workers. Offered under Odisha Nurses & Midwives Registration Council (ONMRC) application norms for the 2026–27 session with a 60-seat intake and clinical permission obtained from concerned authorities.',
    highlights: [
      'Session 2026–27 ONMRC NOC application with 60-seat annual intake',
      'Clinical permission & affiliated hospital consent obtained for practical training',
      'Strong practical grounding in maternal care, newborn health & immunisation',
      'Pathway for state council registration and later lateral progression into GNM',
    ],
    syllabus: [
      {
        term: 'First Year',
        subjects: [
          'Community Health Nursing & Health Promotion',
          'Primary Health Care Nursing & First Aid',
          'Child Health Nursing & Nutrition',
          'Basic Anatomy, Hygiene & Infection Control',
        ],
      },
      {
        term: 'Second Year',
        subjects: [
          'Midwifery & Maternal Health Care',
          'Health Centre Management & Record Keeping',
          'Supervised PHC / Sub-Centre & Maternity Ward Internship',
        ],
      },
    ],
    clinicalTraining:
      'Guided practical postings with clinical permission across affiliated hospital maternity wards, immunisation clinics, Primary Health Centres (PHCs), and community outreach camps in Khordha district.',
    careerOptions: [
      'ANM / Multipurpose Female Health Worker (NHM & State Health Dept.)',
      'Maternity Clinic & Mother-Child Care Assistant',
      'Primary Health Centre (PHC) & Sub-Centre Support Staff',
      'NGO & Rural Community Health Programme Coordinator',
      'Eligible for progression into GNM Diploma after registration',
    ],
    feeBreakdown: [
      { item: 'Annual Tuition Fee', amount: '₹40,000', note: 'Per academic year' },
      { item: 'Clinical & Field Training Fee', amount: '₹8,000' },
      {
        item: 'Council Examination & Registration',
        amount: 'As per Odisha State Nursing Council norms',
      },
      {
        item: 'Optional Hostel & Mess',
        amount: 'As per college hostel circular',
      },
    ],
    faqs: [
      {
        question: 'Can an ANM graduate later pursue GNM?',
        answer:
          'Yes, registered ANMs with 10+2 qualification are eligible to apply for GNM under INC progression guidelines.',
      },
      {
        question: 'What stream in 10+2 is required for ANM?',
        answer:
          '10+2 pass in Arts, Science, or Commerce from a recognised board (CHSE Odisha / CBSE / ICSE or equivalent) meets general INC eligibility.',
      },
    ],
    featured: true,
  },
];
