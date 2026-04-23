'use client'
import { useEffect } from 'react'
import { committeeGroups } from '../data/committees'

export default function CommitteesPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.committees-page .reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const totalCommittees = committeeGroups.reduce((s, g) => s + g.committees.length, 0)
  const totalDocs = committeeGroups.reduce(
    (s, g) => s + g.committees.reduce((ss, c) => ss + c.pdfs.length, 0),
    0
  )

  return (
    <div className="committees-page">
      {/* Hero Banner */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>
            Governance &amp; Policies
          </div>
          <h1>Committees &amp; Regulatory Bodies</h1>
          <p>&ldquo;Service to Man is Service to God&rdquo;</p>
        </div>
      </div>

      {/* Intro strip */}
      <div className="committees-intro-strip">
        <div className="committees-intro-inner">
          <p>
            The College constitutes statutory committees under NMC, UGC, and Government of India
            regulations to uphold the highest standards of patient safety, academic integrity,
            gender equity, and student welfare.
          </p>
          <div className="committees-intro-stats">
            <div><strong>{committeeGroups.length}</strong><span>Categories</span></div>
            <div><strong>{totalCommittees}</strong><span>Committees</span></div>
            <div><strong>{totalDocs}</strong><span>Documents</span></div>
          </div>
        </div>
      </div>

      {/* Committee Groups */}
      <section className="committees-content">
        <div className="committees-inner">
          {committeeGroups.map((group) => (
            <div key={group.id} className="committees-group" id={group.id}>
              <div className="committees-group-header reveal">
                <div className="section-label">{group.title}</div>
                <h2 className="section-title">{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <div className="committees-grid">
                {group.committees.map((committee) => (
                  <article key={committee.id} className="committee-card reveal" id={committee.id}>
                    <header className="committee-card-header">
                      <div className="committee-initial">
                        {committee.shortName
                          ? committee.shortName
                          : committee.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}
                      </div>
                      <div>
                        <h3>{committee.name}</h3>
                        {committee.shortName &&
                          committee.shortName !== committee.name && (
                            <span className="committee-short">{committee.shortName}</span>
                          )}
                      </div>
                    </header>

                    <p className="committee-desc">{committee.description}</p>

                    <div className="committee-docs">
                      <div className="committee-docs-label">
                        {committee.pdfs.length === 1 ? 'Document' : `${committee.pdfs.length} Documents`}
                      </div>
                      <ul className="committee-pdf-list">
                        {committee.pdfs.map((pdf, i) => (
                          <li key={i}>
                            <a
                              href={pdf.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="committee-pdf-link"
                            >
                              <span className="pdf-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                  <path d="M14 2v6h6" />
                                  <path d="M9 15h6M9 11h6" />
                                </svg>
                              </span>
                              <span className="pdf-meta">
                                <span className="pdf-label">
                                  {pdf.label}
                                  {pdf.tag && <span className="pdf-tag">{pdf.tag}</span>}
                                </span>
                                {pdf.date && <span className="pdf-date">{pdf.date}</span>}
                              </span>
                              <span className="pdf-action" aria-label="Open in new tab">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                  <path d="M15 3h6v6M10 14L21 3" />
                                </svg>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Report concern banner */}
      <section className="committees-report">
        <div className="committees-report-inner reveal">
          <div>
            <div className="section-label" style={{ color: 'var(--gold-light)' }}>Need to Report a Concern?</div>
            <h3>Every complaint is taken seriously and handled with strict confidentiality.</h3>
            <p>
              To report ragging, harassment, or any grievance, contact the relevant committee
              directly or reach the Principal&apos;s office.
            </p>
          </div>
          <a href="#contact" className="btn-hero btn-hero-primary">Contact the College</a>
        </div>
      </section>
    </div>
  )
}