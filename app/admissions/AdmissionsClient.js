'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const ugDocs = [
  {
    title: 'UG Fee Structure 2025–2026',
    desc: 'Complete fee details for UG admissions for the session 2025–26.',
    tag: 'Fee Structure',
    tagColor: 'blue',
    href: 'https://www.mgmmckishanganj.in/wp-content/uploads/2022/01/UG-Fee-Structure-2025-2026-1.pdf',
  },
  {
    title: 'Public Notice — Beware of Fake Personnel',
    desc: 'Official notice regarding fraudulent individuals claiming to facilitate admissions in medical courses.',
    tag: 'Important Notice',
    tagColor: 'red',
    href: 'https://www.mgmmckishanganj.in/wp-content/uploads/2022/01/Public-Notice-Beware-of-the-Fake-Personnel-Regarding-Admission-in-Medical-Courses.pdf',
  },
]

const pgDocs = [
  {
    title: 'PG Fee Structure 2025–26',
    desc: 'Complete fee details for PG admissions for the session 2025–26.',
    tag: 'Fee Structure',
    tagColor: 'blue',
    href: 'https://www.mgmmckishanganj.in/wp-content/uploads/2022/01/PG-FEE-STRUCTURE-2025-26-1.pdf',
  },
  {
    title: 'PG Brochure 2024–25',
    desc: 'Detailed brochure for postgraduate admissions including eligibility, seats, and process.',
    tag: 'Brochure',
    tagColor: 'green',
    href: 'https://www.mgmmckishanganj.in/wp-content/uploads/2022/01/PG-BROCHURE-2024-25.pdf',
  },
]

function DocCard({ doc }) {
  const colors = {
    blue:  { bg: '#dbeafe', text: '#1e40af' },
    red:   { bg: '#fee2e2', text: '#991b1b' },
    green: { bg: '#d1fae5', text: '#065f46' },
  }
  const c = colors[doc.tagColor] || colors.blue

  return (
    <a
      href={doc.href}
      target="_blank"
      rel="noopener noreferrer"
      className="admission-doc-card"
    >
      <div className="admission-doc-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M9 15h6M9 11h6"/>
        </svg>
      </div>
      <div className="admission-doc-meta">
        <span className="admission-doc-tag" style={{ background: c.bg, color: c.text }}>
          {doc.tag}
        </span>
        <h3 className="admission-doc-title">{doc.title}</h3>
        <p className="admission-doc-desc">{doc.desc}</p>
      </div>
      <div className="admission-doc-action">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <path d="M15 3h6v6M10 14L21 3"/>
        </svg>
        <span>Open PDF</span>
      </div>
    </a>
  )
}

export default function AdmissionsClient() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState('ug')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (searchParams.get('tab') === 'pg') setTab('pg')
  }, [])

  useEffect(() => {
    if (!mounted) return
    const url = tab === 'pg' ? '/admissions?tab=pg' : '/admissions'
    window.history.replaceState({}, '', url)
  }, [tab, mounted])

  const docs = tab === 'ug' ? ugDocs : pgDocs

  return (
    <div className="admissions-page">

      {/* Hero */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Join Us</div>
          <h1>Admissions</h1>
          <p>Undergraduate &amp; Postgraduate admissions — Mata Gujri Memorial Medical College</p>
        </div>
      </div>

      {/* Intro strip */}
      <div className="admissions-intro-strip">
        <div className="admissions-intro-inner">
          <p>
            Admissions to undergraduate and postgraduate programmes are conducted strictly
            through NEET, as per National Medical Commission guidelines. Download the
            relevant documents below for fee structure and admission details.
          </p>
          <div className="admissions-intro-stats">
            <div><strong>150</strong><span>UG Seats</span></div>
            <div><strong>112</strong><span>PG Seats</span></div>
            <div><strong>17</strong><span>Disciplines</span></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="admissions-tabs-bar">
        <div className="admissions-tabs-inner">
          <div className="admissions-tabs" role="tablist">
            <button
              className={`admissions-tab ${tab === 'ug' ? 'active' : ''}`}
              onClick={() => setTab('ug')}
              role="tab"
              aria-selected={tab === 'ug'}
            >
              <span className="admissions-tab-main">Undergraduate</span>
              <span className="admissions-tab-sub">NEET UG</span>
            </button>
            <button
              className={`admissions-tab ${tab === 'pg' ? 'active' : ''}`}
              onClick={() => setTab('pg')}
              role="tab"
              aria-selected={tab === 'pg'}
            >
              <span className="admissions-tab-main">Postgraduate</span>
              <span className="admissions-tab-sub">NEET PG</span>
            </button>
          </div>
        </div>
      </div>

      {/* Documents */}
      <section className="admissions-content">
        <div className="admissions-inner">
          <div className="admissions-section-head reveal">
            <div className="section-label">
              {tab === 'ug' ? 'Undergraduate Admission' : 'Postgraduate Admission'}
            </div>
            <h2>
              {tab === 'ug' ? 'UG Admission Documents' : 'PG Admission Documents'}
            </h2>
            <p>
              {tab === 'ug'
                ? 'Download the fee structure and official notices for UG admissions below.'
                : 'Download the fee structure and brochure for PG admissions below.'}
            </p>
          </div>

          <div className="admission-docs-grid">
            {docs.map((doc, i) => (
              <div key={i} className="reveal">
                <DocCard doc={doc} />
              </div>
            ))}
          </div>

          {/* NEET notice */}
          <div className="admissions-notice reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
            <p>
              All admissions are conducted strictly through <strong>NEET</strong> as per NMC
              regulations. MGM Medical College does not authorize any agent or third party for
              admissions. Beware of fraudulent claims.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}