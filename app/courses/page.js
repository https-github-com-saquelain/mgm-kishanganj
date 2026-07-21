'use client'
import { useState, useEffect } from 'react'
import { fetchCourses } from '../utils/api'

/* ── External link icon ── */
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6M10 14L21 3" />
  </svg>
)

/* ── Degree Courses tab ── */
function DegreeCoursesTab({ courses, loading }) {
  const totalSeats = courses.reduce((s, c) => s + c.seats, 0)

  return (
    <div className="courses-list-panel reveal">
      <div className="courses-panel-header">
        <h2 className="courses-panel-title">Degree Courses</h2>
        <span className="courses-panel-badge">{totalSeats} Total Seats</span>
      </div>
      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : courses.length === 0 ? (
        <p className="text-sm text-gray-500">No courses listed yet.</p>
      ) : (
        <ul className="courses-subject-list">
          {courses.map((course) => {
            const content = (
              <>
                <span className="courses-subject-name">{course.name}</span>
                <span className="courses-subject-right">
                  <span className="courses-subject-seats">{course.seats} Seats</span>
                  {course.fileUrl && (
                    <span className="courses-subject-arrow"><ExternalIcon /></span>
                  )}
                </span>
              </>
            )

            return course.fileUrl ? (
              <li key={course._id}>
                <a
                  href={course.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="courses-subject-item"
                >
                  {content}
                </a>
              </li>
            ) : (
              <li key={course._id}>
                <div className="courses-subject-item courses-subject-item-disabled">
                  {content}
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

/* ── MBBS tab ── */
function MbbsTab({ mbbs, loading }) {
  return (
    <div className="courses-list-panel reveal">
      <div className="courses-panel-header">
        <h2 className="courses-panel-title">MBBS</h2>
      </div>
      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : !mbbs ? (
        <p className="text-sm text-gray-500">MBBS details not available yet.</p>
      ) : mbbs.fileUrl ? (
        <a
          href={mbbs.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mbbs-link-row"
        >
          <div className="mbbs-seats-block">
            <span className="mbbs-seats-number">{mbbs.seats}</span>
            <span className="mbbs-seats-label">Seats</span>
          </div>
          <span className="mbbs-open-label">
            Open PDF <ExternalIcon />
          </span>
        </a>
      ) : (
        <div className="mbbs-link-row mbbs-link-row-disabled">
          <div className="mbbs-seats-block">
            <span className="mbbs-seats-number">{mbbs.seats}</span>
            <span className="mbbs-seats-label">Seats</span>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Main Page ── */
export default function CoursesPage() {
  const [tab, setTab] = useState('degree')
  const [degreeCourses, setDegreeCourses] = useState([])
  const [mbbs, setMbbs] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([fetchCourses('degree'), fetchCourses('mbbs')])
      .then(([degreeData, mbbsData]) => {
        setDegreeCourses(degreeData)
        setMbbs(mbbsData[0] || null) // mbbs is a single row
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.courses-page .reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [tab, loading])

  return (
    <div className="courses-page">

      {/* Hero */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>
            Academic Programmes
          </div>
          <h1>Courses Offered</h1>
          <p>&ldquo;Empowering healthcare professionals for North-East Bihar since 1990&rdquo;</p>
        </div>
      </div>

      {/* Intro strip */}
      <div className="courses-intro-strip">
        <div className="courses-intro-inner">
          <p>
            MGM Medical College offers NMC-recognised MBBS and postgraduate MD / MS programmes,
            all following the latest Competency-Based Medical Education (CBME) curriculum.
            Admissions are through NEET conducted by the National Testing Agency.
          </p>
          <div className="courses-intro-stats">
            <div>
              <strong>{mbbs?.seats ?? 150}</strong>
              <span>MBBS Seats</span>
            </div>
            <div>
              <strong>{degreeCourses.length || 17}</strong>
              <span>PG Specialties</span>
            </div>
            <div>
              <strong>35<span style={{ fontSize: '16px' }}>+</span></strong>
              <span>Years Legacy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky tab bar */}
      <div className="courses-tabs-bar">
        <div className="courses-tabs-inner">
          <div className="courses-tabs">
            <button
              className={`courses-tab ${tab === 'degree' ? 'active' : ''}`}
              onClick={() => setTab('degree')}
            >
              <span className="courses-tab-main">Degree Courses</span>
              <span className="courses-tab-sub">MD &middot; MS &middot; Postgraduate</span>
            </button>
            <button
              className={`courses-tab ${tab === 'mbbs' ? 'active' : ''}`}
              onClick={() => setTab('mbbs')}
            >
              <span className="courses-tab-main">MBBS</span>
              <span className="courses-tab-sub">Undergraduate &middot; {mbbs?.seats ?? 150} Seats</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab content */}
      <section className="courses-content">
        <div className="courses-inner">
          {tab === 'degree'
            ? <DegreeCoursesTab courses={degreeCourses} loading={loading} />
            : <MbbsTab mbbs={mbbs} loading={loading} />}
        </div>
      </section>

      {/* CTA banner */}
      <section className="courses-cta-banner">
        <div className="courses-cta-inner reveal">
          <div>
            <div className="section-label" style={{ color: 'var(--gold-light)' }}>
              Ready to Apply?
            </div>
            <h3>Admissions open for 2025–26 academic session.</h3>
            <p>
              All admissions are through NEET (UG / PG). Visit the Admissions page
              for eligibility criteria, fee structure, and the application process.
            </p>
          </div>
          <div className="courses-cta-actions">
            <a href="/admissions" className="btn-hero btn-hero-primary">
              Admission Info →
            </a>
            <a href="/contact" className="btn-hero btn-hero-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}