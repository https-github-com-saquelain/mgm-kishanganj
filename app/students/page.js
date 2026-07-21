'use client'
import { useState, useEffect } from 'react'
import { fetchStudents } from '../utils/api'

const RECENT_COUNT = 4

export default function StudentsPage() {
  const [level, setLevel] = useState('ug')
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const [ugStudents, setUgStudents] = useState([])
  const [pgStudents, setPgStudents] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch both levels once on mount
  useEffect(() => {
    Promise.all([fetchStudents('ug'), fetchStudents('pg')])
      .then(([ugData, pgData]) => {
        setUgStudents(ugData)
        setPgStudents(pgData)
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  // Read ?level= on mount
  useEffect(() => {
    setMounted(true)
    const params = new URLSearchParams(window.location.search)
    if (params.get('level') === 'pg') setLevel('pg')
  }, [])

  // Sync URL ↔ state
  useEffect(() => {
    if (!mounted) return
    const params = new URLSearchParams(window.location.search)
    if (level === 'pg') params.set('level', 'pg')
    else params.delete('level')
    const url = params.toString()
      ? `${window.location.pathname}?${params}`
      : window.location.pathname
    window.history.replaceState({}, '', url)
  }, [level, mounted])

  // Close archive when tab switches so state doesn't carry over
  useEffect(() => {
    setArchiveOpen(false)
  }, [level])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.students-page .reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [level, archiveOpen, loading])

  const source = level === 'ug' ? ugStudents : pgStudents
  const latest = source[0]
  const recent = source.slice(1, RECENT_COUNT)
  const archive = source.slice(RECENT_COUNT)

  if (loading) {
    return (
      <div className="students-page">
        <div className="page-hero">
          <img src="/campus-2.jpeg" alt="MGM Campus" />
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="section-label" style={{ color: 'var(--gold-light)' }}>Our People</div>
            <h1>Student Directory</h1>
            <p>&ldquo;Service to Man is Service to God&rdquo;</p>
          </div>
        </div>
        <section className="students-content">
          <div className="students-inner">
            <p className="text-sm text-gray-500">Loading student lists...</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="students-page">
      {/* Hero Banner */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>
            Our People
          </div>
          <h1>Student Directory</h1>
          <p>&ldquo;Service to Man is Service to God&rdquo;</p>
        </div>
      </div>

      {/* Intro strip */}
      <div className="students-intro-strip">
        <div className="students-intro-inner">
          <p>
            Published session-wise lists of undergraduate and postgraduate students enrolled at
            Mata Gujri Memorial Medical College — maintained for academic records and NMC
            transparency requirements.
          </p>
          <div className="students-intro-stats">
            <div><strong>{ugStudents.length}</strong><span>UG Sessions</span></div>
            <div><strong>{pgStudents.length}</strong><span>PG Sessions</span></div>
            <div><strong>{ugStudents.length + pgStudents.length}</strong><span>Documents</span></div>
          </div>
        </div>
      </div>

      {/* Tabs bar */}
      <div className="students-tabs-bar">
        <div className="students-tabs-inner">
          <div className="students-tabs" role="tablist">
            <button
              className={`students-tab ${level === 'ug' ? 'active' : ''}`}
              onClick={() => setLevel('ug')}
              role="tab"
              aria-selected={level === 'ug'}
            >
              <span className="students-tab-main">Undergraduate</span>
              <span className="students-tab-sub">MBBS — {ugStudents.length} sessions</span>
            </button>
            <button
              className={`students-tab ${level === 'pg' ? 'active' : ''}`}
              onClick={() => setLevel('pg')}
              role="tab"
              aria-selected={level === 'pg'}
            >
              <span className="students-tab-main">Postgraduate</span>
              <span className="students-tab-sub">MD / MS — {pgStudents.length} sessions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="students-content">
        <div className="students-inner">

          {source.length === 0 ? (
            <div className="students-section reveal">
              <p className="text-sm text-gray-500">No student lists published yet for this level.</p>
            </div>
          ) : (
            <>
              {/* Latest — featured treatment */}
              <div className="students-section reveal">
                <div className="students-section-head">
                  <div className="section-label">Current Session</div>
                  <h2>Latest Student List</h2>
                </div>
                {latest.fileUrl ? (
                  <a
                    href={latest.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="student-pdf-card student-pdf-card-featured"
                  >
                    <LatestCardContent latest={latest} level={level} />
                  </a>
                ) : (
                  <div className="student-pdf-card student-pdf-card-featured student-pdf-card-disabled">
                    <LatestCardContent latest={latest} level={level} />
                  </div>
                )}
              </div>

              {/* Recent — grid */}
              {recent.length > 0 && (
                <div className="students-section reveal">
                  <div className="students-section-head">
                    <div className="section-label">Recent Sessions</div>
                    <h2>Previous Years</h2>
                  </div>
                  <div className="students-grid">
                    {recent.map((pdf) => (
                      <PdfCard key={pdf._id} pdf={pdf} level={level} />
                    ))}
                  </div>
                </div>
              )}

              {/* Archive — collapsible */}
              {archive.length > 0 && (
                <div className="students-section reveal">
                  <div className="students-section-head students-archive-head">
                    <div>
                      <div className="section-label">Archive</div>
                      <h2>Earlier Sessions</h2>
                    </div>
                    <button
                      className="students-archive-toggle"
                      onClick={() => setArchiveOpen((o) => !o)}
                      aria-expanded={archiveOpen}
                    >
                      {archiveOpen ? 'Hide' : `Show ${archive.length} earlier session${archive.length > 1 ? 's' : ''}`}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: archiveOpen ? 'rotate(180deg)' : 'none' }}>
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>
                  <div className={`students-archive ${archiveOpen ? 'open' : ''}`} aria-hidden={!archiveOpen}>
                    <div className="students-grid">
                      {archive.map((pdf) => (
                        <PdfCard key={pdf._id} pdf={pdf} level={level} compact />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </div>
  )
}

// ============================================================
// Latest card inner content (shared between <a> and <div> wrapper)
// ============================================================
function LatestCardContent({ latest, level }) {
  return (
    <>
      <div className="student-pdf-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 15h6M9 11h6" />
        </svg>
      </div>
      <div className="student-pdf-meta">
        <span className="student-pdf-session">Session {latest.session}</span>
        <span className="student-pdf-label">{latest.label}</span>
        <span className="student-pdf-level">
          {level === 'ug' ? 'Undergraduate (MBBS)' : 'Postgraduate (MD / MS)'}
        </span>
      </div>
      <div className="student-pdf-actions">
        <span className="pdf-tag">Latest</span>
        {latest.fileUrl && (
          <span className="student-pdf-open">
            View PDF
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <path d="M15 3h6v6M10 14L21 3" />
            </svg>
          </span>
        )}
      </div>
    </>
  )
}

// ============================================================
// PDF Card — used for recent + archive (compact variant)
// ============================================================
function PdfCard({ pdf, level, compact = false }) {
  const content = (
    <>
      <div className="student-pdf-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 15h6M9 11h6" />
        </svg>
      </div>
      <div className="student-pdf-meta">
        <span className="student-pdf-session">Session {pdf.session}</span>
        <span className="student-pdf-label">
          {level === 'ug' ? 'UG Students List' : 'PG Students List'}
        </span>
      </div>
      {pdf.fileUrl && (
        <span className="student-pdf-open">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <path d="M15 3h6v6M10 14L21 3" />
          </svg>
        </span>
      )}
    </>
  )

  return pdf.fileUrl ? (
    <a
      href={pdf.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`student-pdf-card ${compact ? 'student-pdf-card-compact' : ''}`}
    >
      {content}
    </a>
  ) : (
    <div className={`student-pdf-card ${compact ? 'student-pdf-card-compact' : ''} student-pdf-card-disabled`}>
      {content}
    </div>
  )
}