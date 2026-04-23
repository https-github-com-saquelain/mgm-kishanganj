// ============================================================
// COMMITTEES DATA
// ------------------------------------------------------------
// Edit this file to update committee descriptions or add PDFs.
// Just drop the actual PDF files into /public/pdfs/committees/
// and make sure the filenames match the `href` values below.
// ============================================================

export const committeeGroups = [
  {
    id: 'anti-ragging',
    title: 'Anti-Ragging',
    description:
      'Anti-ragging mechanism under UGC Regulations, 2009 and Supreme Court directives. Ragging in any form is a cognizable offence and is strictly prohibited on campus, in hostels, and during all college activities.',
    committees: [
      {
        id: 'anti-ragging-committee',
        name: 'Anti-Ragging Committee',
        shortName: 'ARC',
        description:
          'The principal policy-making body on ragging, chaired by the Principal. Reviews complaints, ensures compliance with UGC regulations, and coordinates awareness drives across the campus and hostels.',
        pdfs: [
          {
            label: 'MGMMC Anti-Ragging Notice',
            date: '2025-10-29',
            href: '/pdfs/committees/anti-ragging-notice-2025-10-29.pdf',
            tag: 'Latest',
          },
          {
            label: 'Anti-Ragging Monitoring Cell Notice',
            date: '2023-04-10',
            href: '/pdfs/committees/anti-ragging-monitoring-cell-2023-04-10.pdf',
          },
          {
            label: 'General Anti-Ragging Notice',
            href: '/pdfs/committees/anti-ragging-general-notice.pdf',
          },
          {
            label: 'Members — Anti-Ragging Committee',
            href: '/pdfs/committees/anti-ragging-committee-members.pdf',
          },
        ],
      },
      {
        id: 'anti-ragging-squad',
        name: 'Anti-Ragging Squad',
        shortName: 'ARS',
        description:
          'A field-level team of faculty and senior staff that conducts regular surprise inspections of hostels, classrooms, mess, and common areas to prevent, detect, and report ragging incidents.',
        pdfs: [
          {
            label: 'Details of Anti-Ragging Squad',
            href: '/pdfs/committees/anti-ragging-squad-details.pdf',
          },
        ],
      },
    ],
  },
  {
    id: 'standing-committees',
    title: 'Standing Committees',
    description:
      'Statutory committees required under NMC and Government of India regulations to ensure patient safety, gender equity, and quality of medical education.',
    committees: [
      {
        id: 'icc',
        name: 'Internal Complaints Committee',
        shortName: 'ICC (POSH)',
        description:
          'Constituted under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. Receives and redresses complaints of sexual harassment of women employees and students, and conducts awareness programmes.',
        pdfs: [
          {
            label: 'Gender Harassment Committee — Constitution & Proceedings',
            href: '/pdfs/committees/gender-harassment-committee.pdf',
          },
        ],
      },
      {
        id: 'pharmacovigilance',
        name: 'Pharmacovigilance Committee',
        shortName: 'PvPI',
        description:
          'Monitors, collects, and reports adverse drug reactions (ADRs) under the Pharmacovigilance Programme of India. Works to ensure patient safety and rational drug use in the hospital.',
        pdfs: [
          {
            label: 'Pharmacovigilance Committee',
            href: '/pdfs/committees/pharmacovigilance-committee.pdf',
          },
        ],
      },
      {
        id: 'curriculum-committee',
        name: 'Curriculum Committee',
        shortName: 'CC',
        description:
          'Oversees implementation of the Competency-Based Medical Education (CBME) curriculum mandated by the NMC. Coordinates subject-wise curriculum delivery, assessment, and the AETCOM module across phases.',
        pdfs: [
          {
            label: 'Curriculum Committee — 2023-24',
            date: '2023',
            href: '/pdfs/committees/curriculum-committee-2023-24.pdf',
          },
        ],
      },
    ],
  },
  {
    id: 'academic-bodies',
    title: 'Academic Bodies',
    description:
      'Bodies responsible for faculty development, educational research, and advancing teaching-learning practices at the institution.',
    committees: [
      {
        id: 'meu',
        name: 'Medical Education Unit',
        shortName: 'MEU',
        description:
          'The academic nerve-centre for faculty development. Conducts CBME sensitisation, basic and advanced courses in medical education (BCME/ACME), and designs innovative teaching-learning strategies and assessment tools.',
        pdfs: [
          {
            label: 'Medical Education Unit — 2023-24',
            date: '2023',
            href: '/pdfs/committees/medical-education-unit-2023-24.pdf',
          },
        ],
      },
    ],
  },
]