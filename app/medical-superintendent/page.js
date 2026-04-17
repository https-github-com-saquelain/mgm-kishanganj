'use client'
import { useEffect } from 'react'

export default function MedicalSuperintendentPage() {
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
        <img src="/campus-2.jpeg" alt="MGM Hospital" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Leadership</div>
          <h1>Medical Superintendent&apos;s Message</h1>
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
                  src="/medical-superintendent.png"
                  alt="Prof. (Dr.) Papa Naik H"
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
                <div className="principal-card-name">Prof. (Dr.) Papa Naik H</div>
                <div className="principal-card-qual">MBBS, MS (Orthopaedics)</div>
                <div className="principal-card-role">Medical Superintendent</div>
                <div className="principal-card-inst">Lions Seva Kendra Hospital, Kishanganj</div>
              </div>
            </aside>

            {/* Right — Message */}
            <div className="principal-message reveal-right">
              <div className="section-label">From the Desk of the Medical Superintendent</div>
              <h2 className="section-title">A Message of Welcome</h2>

              <blockquote className="principal-pullquote">
                Welcome to our teaching hospital — an integral part of our medical college — where service, learning, and compassion converge to create a truly enriching clinical environment.
              </blockquote>

              <div className="principal-body">
                <p>Our hospital caters to a large and diverse patient population, providing students with invaluable exposure to a wide spectrum of clinical conditions. This high patient load ensures that our learners gain hands-on experience, develop strong clinical acumen, and build confidence in real-world healthcare settings under the guidance of experienced faculty and clinicians.</p>

                <p>We take pride in our commitment to providing affordable and, in many cases, free patient care, ensuring that quality healthcare reaches all sections of society. This not only fulfils our social responsibility but also instils in our students a deep sense of empathy, ethics, and patient-centred care.</p>

                <p>The integration of clinical services with teaching enables students to actively participate in patient management, bedside learning, and interdisciplinary teamwork. Our hospital thus serves as a living classroom, where knowledge is translated into practice every day.</p>

                <p>With a dedicated team, robust infrastructure, and a patient-first approach, we remain committed to delivering excellence in healthcare while shaping competent and compassionate future doctors.</p>
              </div>

              {/* Signature */}
              <div className="principal-signature">
                <div className="principal-sig-rule"></div>
                <div className="principal-sig-name">Prof. (Dr.) Papa Naik H</div>
                <div className="principal-sig-qual">MBBS, MS (Orthopaedics)</div>
                <div className="principal-sig-role">Medical Superintendent</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
