'use client'
import { useEffect } from 'react'

export default function PublicationsAchievementsPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        }),
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="syllabus-page">

      {/* Hero Banner */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">
          <div
            className="section-label"
            style={{ color: 'var(--gold-light)' }}
          >
            Research & Excellence
          </div>

          <h1>Publications & Achievements</h1>

          <p>
            Academic publications, research contributions, awards,
            recognitions, and institutional achievements.
          </p>
        </div>
      </div>

      {/* Information Strip */}
      <div className="syllabus-strip">
        <div className="syllabus-strip-inner">

          <div className="syllabus-strip-text">
            <span className="syllabus-badge">Research & Recognition</span>

            <p>
              Explore the institution's scholarly publications,
              research accomplishments, faculty achievements,
              student recognitions, awards, and notable milestones
              that reflect our commitment to academic excellence.
            </p>
          </div>

          <a
            href="/pdfs/publications-achievements.pdf"
            download
            className="syllabus-download-btn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>

        </div>
      </div>

      {/* PDF Viewer */}
      <section className="syllabus-viewer-section reveal">
        <div className="syllabus-viewer-inner">

          <div className="syllabus-viewer-wrapper">
            <iframe
              src="/pdfs/publications-achievements.pdf"
              title="Publications and Achievements"
              className="syllabus-iframe"
            />
          </div>

          {/* Fallback */}
          <div className="syllabus-fallback">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M9 15h6M9 11h6" />
            </svg>

            <p>If the document does not load, you can</p>

            <a
              href="/pdfs/publications-achievements.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              open it in a new tab
            </a>

            &nbsp;or&nbsp;

            <a
              href="/pdfs/publications-achievements.pdf"
              download
            >
              download it directly
            </a>
            .
          </div>

        </div>
      </section>

    </div>
  )
}