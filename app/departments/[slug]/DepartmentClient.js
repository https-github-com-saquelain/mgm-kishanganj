'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { categoryLabels } from '../../data/departments'

export default function DepartmentClient({ dept }) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="dept-page">

      {/* Hero Banner */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>
            {categoryLabels[dept.category] || 'Department'}
          </div>
          <h1>Department of {dept.name}</h1>
          <p>{dept.shortDesc}</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="dept-breadcrumb">
        <div className="dept-breadcrumb-inner">
          <Link href="/#departments">Departments</Link>
          <span>›</span>
          <span>{dept.name}</span>
        </div>
      </div>

      {/* Content */}
      {dept.content ? (
        <section className="dept-content-section">
          <div className="dept-content-inner">
            {dept.content.map((section, i) => (
              <div key={i} className="dept-section reveal">
                <h2 className="dept-section-heading">{section.heading}</h2>
                {Array.isArray(section.body) ? (
                  <ul className="dept-bullet-list">
                    {section.body.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="dept-para">{para}</p>
                  ))
                )}
              </div>
            ))}
          </div>
          <div className="dept-back-wrap">
            <Link href="/#departments" className="dept-back-link">
              ← Back to All Departments
            </Link>
          </div>
        </section>
      ) : (
        <section className="dept-coming-soon">
          <div className="dept-coming-inner reveal">
            <div className="dept-coming-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                <path d="M12 8V12L15 15"/>
              </svg>
            </div>
            <h2>Content Coming Soon</h2>
            <p>
              Detailed information about the Department of {dept.name} is being prepared
              and will be published shortly.
            </p>
            <Link href="/#departments" className="dept-back-btn">
              ← Back to All Departments
            </Link>
          </div>
        </section>
      )}

    </div>
  )
}