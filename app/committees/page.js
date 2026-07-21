'use client'
import { useState, useEffect } from 'react'
import { fetchCommitteeGroups, fetchCommitteesByGroup } from '../utils/api'

export default function CommitteesPage() {
  const [committeeGroups, setCommitteeGroups] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAll() {
      try {
        const groups = await fetchCommitteeGroups()
        const withCommittees = await Promise.all(
          groups.map(async (g) => {
            const committees = await fetchCommitteesByGroup(g._id, true)
            return {
              id: g.slug,
              title: g.title,
              description: g.description,
              committees: committees.map((c) => ({
                id: c.slug,
                name: c.name,
                shortName: c.shortName,
                description: c.description,
                pdfs: c.pdfs.map((p) => ({
                  label: p.label,
                  date: p.date,
                  tag: p.tag,
                  href: p.fileUrl,
                })),
              })),
            }
          })
        )
        setCommitteeGroups(withCommittees)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadAll()
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('.committees-page .reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [committeeGroups, loading])

  const totalCommittees = committeeGroups.reduce((s, g) => s + g.committees.length, 0)
  const totalDocs = committeeGroups.reduce(
    (s, g) => s + g.committees.reduce((ss, c) => ss + c.pdfs.length, 0),
    0
  )

  if (loading) {
    return (
      <div className="committees-page">
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
        <section className="committees-content">
          <div className="committees-inner">
            <p className="text-sm text-gray-500">Loading committees...</p>
          </div>
        </section>
      </div>
    )
  }

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
                        {committee.pdfs.length === 0
                          ? 'No documents yet'
                          : committee.pdfs.length === 1
                          ? 'Document'
                          : `${committee.pdfs.length} Documents`}
                      </div>
                      {committee.pdfs.length > 0 && (
                        <ul className="committee-pdf-list">
                          {committee.pdfs.map((pdf, i) => {
                            const content = (
                              <>
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
                                {pdf.href && (
                                  <span className="pdf-action" aria-label="Open in new tab">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                      <path d="M15 3h6v6M10 14L21 3" />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )
                            return (
                              <li key={i}>
                                {pdf.href ? (
                                  <a
                                    href={pdf.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="committee-pdf-link"
                                  >
                                    {content}
                                  </a>
                                ) : (
                                  <div className="committee-pdf-link committee-pdf-link-disabled">
                                    {content}
                                  </div>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      )}
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

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '20px',
              padding: '12px 24px',
              background: 'rgba(200,149,46,0.15)',
              border: '1px solid rgba(200,149,46,0.35)',
              borderRadius: '6px',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="var(--gold-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
                  A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012
                  .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0
                  01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0
                  012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '4px' }}>
                  24×7 Toll Free Helpline
                </div>
                <a href="tel:18003456189" style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: 'var(--white)',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-body)',
                }}>
                  18003456189
                </a>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn-hero btn-hero-primary">Contact the College</a>
        </div>
      </section>
    </div>
  )
}