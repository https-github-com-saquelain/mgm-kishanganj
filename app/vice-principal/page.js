'use client'
import { useEffect } from 'react'

export default function VicePrincipalPage() {
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
          <h1>Vice Principal&apos;s Message</h1>
          <p>&ldquo;Service to Man is Service to God&rdquo;</p>
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
                  src="/vice-principal.JPG"
                  alt="Prof. (Dr.) Asitava Deb Roy"
                  className="principal-photo"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                <div className="principal-photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Photo</span>
                </div>
              </div>
              <div className="principal-card">
                <div className="principal-card-name">Prof. (Dr.) Asitava Deb Roy</div>
                <div className="principal-card-qual">MD (Patho), ACME, MHPE, PGDHHM, PhD (Scholar)</div>
                <div className="principal-card-role">Vice Principal</div>
                <div className="principal-card-inst">Mata Gujri Memorial Medical College</div>
                <div className="principal-card-contacts">
                    <a href="mailto:asitavadr@gmail.com" className="principal-contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    asitavadr@gmail.com
                    </a>
                    <a href="tel:+919475587658" className="principal-contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.6 4.9 2 2 0 0 1 3.58 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 17.72z"/>
                    </svg>
                    +91 94755 87658
                    </a>
                </div>
                </div>
            </aside>

            {/* Right — Message */}
            <div className="principal-message reveal-right">
              <div className="section-label">From the Desk of the Vice Principal</div>
              <h2 className="section-title">Advancing Academic Excellence</h2>

              <blockquote className="principal-pullquote">
                At our institution, academic excellence is driven by a progressive vision that aligns with the Competency-Based Medical Education (CBME) framework advocated by the National Medical Commission.
              </blockquote>

              <div className="principal-body">
                <p>Our goal is to ensure that every medical graduate is not only knowledgeable, but also skilled, ethical, and responsive to the needs of society. The implementation of CBME has transformed our teaching–learning processes from traditional, teacher-centred approaches to more student-centric, outcome-oriented methods. Emphasis is placed on early clinical exposure, integration across disciplines, longitudinal learning, and the development of competencies across cognitive, psychomotor, and affective domains.</p>

                <p>We have actively incorporated innovative educational strategies such as problem-based learning, case-based discussions, flipped classrooms, simulation-based training, and reflective learning practices. The integration of AETCOM (Attitude, Ethics, and Communication) modules ensures that our students develop professionalism, empathy, and effective communication skills — attributes essential for holistic patient care.</p>

                <p>Our assessment systems are aligned with programmatic assessment principles, focusing on continuous feedback, workplace-based assessments, and competency tracking. Faculty development remains a priority, with regular training programs to enhance teaching effectiveness and adaptability to evolving educational needs.</p>

                <p>Through these initiatives, we are committed to creating a dynamic and engaging academic environment that prepares our students to become competent, confident, and compassionate healthcare professionals.</p>
              </div>

              {/* Signature */}
              <div className="principal-signature">
                <div className="principal-sig-rule"></div>
                <div className="principal-sig-name">Prof. (Dr.) Asitava Deb Roy</div>
                <div className="principal-sig-qual">MD (Patho), ACME, MHPE, PGDHHM, PhD (Scholar)</div>
                <div className="principal-sig-role">Vice Principal</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
