// ============================================================
// COURSES DATA
// ------------------------------------------------------------
// Drop PDF files into /public/pdfs/courses/
// Each item in the list is a direct PDF link.
// ============================================================

// MD / MS programmes — each is a clickable PDF
export const degreeCourses = [
  { name: 'MD (General Medicine)', seats: 10, href: '/pdfs/courses/md-general-medicine.pdf' },
  { name: 'MS (General Surgery)', seats: 10, href: '/pdfs/courses/ms-general-surgery.pdf' },
  { name: 'MS (Orthopaedics)', seats: 10, href: '/pdfs/courses/ms-orthopaedics.pdf' },
  { name: 'MD (Obstetrics & Gynaecology)', seats: 10, href: '/pdfs/courses/md-obstetrics-gynaecology.pdf' },
  { name: 'MD (Paediatrics)', seats: 7, href: '/pdfs/courses/md-paediatrics.pdf' },
  { name: 'MD (Dermatology)', seats: 8, href: '/pdfs/courses/md-dermatology.pdf' },
  { name: 'MD (Radio-Diagnosis)', seats: 6, href: '/pdfs/courses/md-radio-diagnosis.pdf' },
  { name: 'MD (Anaesthesiology)', seats: 10, href: '/pdfs/courses/md-anaesthesiology.pdf' },
  { name: 'MS (Ophthalmology)', seats: 9, href: '/pdfs/courses/ms-ophthalmology.pdf' },
  { name: 'MS (ENT)', seats: 8, href: '/pdfs/courses/ms-ent.pdf' },
  { name: 'MD (Anatomy)', seats: 2, href: '/pdfs/courses/md-anatomy.pdf' },
  { name: 'MD (Physiology)', seats: 2, href: '/pdfs/courses/md-physiology.pdf' },
  { name: 'MD (Biochemistry)', seats: 3, href: '/pdfs/courses/md-biochemistry.pdf' },
  { name: 'MD (Pathology)', seats: 8, href: '/pdfs/courses/md-pathology.pdf' },
  { name: 'MD (Microbiology)', seats: 5, href: '/pdfs/courses/md-microbiology.pdf' },
  { name: 'MD (Pharmacology)', seats: 2, href: '/pdfs/courses/md-pharmacology.pdf' },
  { name: 'MD (Social & Preventive Medicine / Community Medicine)', seats: 2, href: '/pdfs/courses/md-community-medicine.pdf' },
]

// MBBS — single entry, clicking opens the PDF
export const mbbsSeats = 150
export const mbbsHref = '/pdfs/courses/mbbs.pdf'