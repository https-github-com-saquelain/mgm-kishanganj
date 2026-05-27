'use client'
import { useEffect } from 'react'

export default function PrincipalDeanPage() {
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
    <div className="principal-page">

      {/* Hero Banner */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Leadership</div>
          <h1>Principal / Dean&apos;s Message</h1>
          {/* <p>&ldquo;Service to Man is Service to God&rdquo;</p> */}
        </div>
      </div>

      {/* Main Content */}
      <section className="principal-content">
        <div className="principal-inner">
          <div className="principal-layout">

            {/* Left — Photo & Identity */}
            <aside className="principal-photo-col reveal-left">
              <div className="principal-photo-wrapper">
                <img
                  src="/principal.png"
                  alt="Prof. (Dr.) Bijon Chandra Dutta"
                  className="principal-photo"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                {/* Fallback placeholder if photo not yet added */}
                <div className="principal-photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Photo</span>
                </div>
              </div>
              <div className="principal-card">
                <div className="principal-card-name">Prof. (Dr.) Bijon Chandra Dutta</div>
                <div className="principal-card-qual">MBBS, MS (Anatomy)</div>
                <div className="principal-card-role">Principal &amp; Dean</div>
                <div className="principal-card-inst">Mata Gujri Memorial Medical College</div>
                <div className="principal-card-contacts">
                    <a href="mailto:drbijondutta@gmail.com" className="principal-contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    drbijondutta@gmail.com
                    </a>
                    <a href="tel:+919864017399" className="principal-contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.6 4.9 2 2 0 0 1 3.58 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 17.72z"/>
                    </svg>
                    +91 98640 17399
                    </a>
                </div>
                </div>
            </aside>

            {/* Right — Message */}
            <div className="principal-message reveal-right">
              <div className="section-label">From the Desk of the Principal</div>
              <h2 className="section-title">A Message of Welcome</h2>

              <blockquote className="principal-pullquote">
                Welcome to our medical college, a vibrant academic community dedicated to excellence in medical education, patient care, and research.
              </blockquote>

              <div className="principal-body">
                <p>In an era of rapidly advancing healthcare, our focus is on developing not only knowledgeable doctors but also compassionate and ethical professionals. Through a competency-based, student-centred curriculum, we emphasize clinical reasoning, communication skills, and professionalism alongside strong scientific foundations.</p>

                <p>Our institution promotes innovative teaching-learning methods, including case-based discussions, problem-based learning, and simulation-based training, ensuring that students are well-prepared for real-world clinical challenges. We also encourage research, critical thinking, and interdisciplinary collaboration to foster a culture of inquiry and continuous improvement.</p>

                <p>Equally important is our commitment to community engagement and social accountability. We strive to instill in our students a deep sense of responsibility towards the society they will serve.</p>

                <p>With dedicated faculty, modern infrastructure, and a supportive learning environment, we are committed to shaping future-ready healthcare professionals who uphold the highest standards of integrity and excellence.</p>
              </div>

              {/* Signature */}
              <div className="principal-signature">
                <div className="principal-sig-rule"></div>
                <div className="principal-sig-name">Prof. (Dr.) Bijon Chandra Dutta</div>
                <div className="principal-sig-qual">MBBS, MS (Anatomy)</div>
                <div className="principal-sig-role">Principal &amp; Dean</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
