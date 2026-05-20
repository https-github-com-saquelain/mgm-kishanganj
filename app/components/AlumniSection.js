'use client'
import { useState } from 'react'


const testimonials = [
  {
    text: `MGM Medical College & LSK Hospital offers an excellent learning environment with fully air-conditioned lecture theatres, library & highly experienced, dedicated faculties across departments. The administration is very cooperative and student-friendly, while the management ensures smooth academic & extracurricular activities guided by our Director Sir's motto, "Service to mankind, is Service to God". A high patient load from both Bihar and West Bengal provides rich clinical exposure & hands-on learning. Infrastructure is expanding with dedicated buildings and modular OTs. Highly recommend for excellent academics, clinical exposure and strong service-oriented ethos.`,
    name: "Dr. Sagnik Ghosh Mazumder",
    role: "M.B.B.S. Graduate",
    institution: "MGM Medical College, Kishanganj",
    batch: "MBBS",
    initials: "SG",
    photo: "/alumni/sagnik.jpeg",     // ← drop photo here
    avatarBg: "#dbeafe",
    avatarColor: "#1e3a8a",
    accent: "#1a4f8b",
    batchBg: "#EAF3DE",
    batchColor: "#065f46",
  },
  {
    text: `Pursuing my M.B.B.S. at M.G.M. Medical College under Mata Gujri University, Kishanganj has been an academically enriching and professionally transformative experience blending rigorous academic pursuit with holistic personal growth. The diverse patient inflow at the associated L.S.K. Hospital has been instrumental in honing my diagnostic skills and practical understanding of modern medicine. I extend my heartfelt gratitude to the Hon'ble Director Sir for his visionary stewardship, Registrar Sir for his unwavering administrative support, and Vice Principal Sir for his constant academic mentorship and encouragement. I graduated with immense pride to uphold the noble values instilled in me by this prestigious college and university.`,
    name: "Dr. Parmendra Kr. Verma",
    role: "M.B.B.S. (2019 Batch)",
    institution: "MGM Medical College, Kishanganj",
    batch: "2019",
    initials: "PV",
    photo: "/alumni/parmendra.jpeg",  // ← drop photo here
    avatarBg: "#fef3c7",
    avatarColor: "#78350f",
    accent: "#c8952e",
    batchBg: "#fef3c7",
    batchColor: "#78350f",
  },
  {
    text: `Joining the MBBS course in MGMMC was one of the best decisions I have ever made. Our Director Sir, Dr. Dilip Jaiswal, gives utmost priority to academics — his words and presence act as an inspiration to everyone. The Faculty is one of the best in the country, providing ample theoretical and practical knowledge throughout the course. We got huge clinical exposure during the internship period, easily comparable to the best institutes in the country. The atmosphere at the campus is very peaceful. It will not be an understatement to say that my time at MGM was eye-opening and life-altering all at once. The professors, patients, friends and the environment all shaped me to be what I am today. Forever grateful.`,
    name: "Dr. Shalini Mukherjee",
    role: "PGY1 Resident, MD Anaesthesia & Critical Care",
    institution: "IPGMER SSKM Hospital, Kolkata · 2018 Batch",
    batch: "2018",
    initials: "SM",
    photo: "/alumni/shalini.jpeg",    // ← drop photo here
    avatarBg: "#d1fae5",
    avatarColor: "#064e3b",
    accent: "#0f6e56",
    batchBg: "#d1fae5",
    batchColor: "#064e3b",
  },
]

export default function AlumniSection() {
  const [expanded, setExpanded] = useState({})

  return (
    <section className="alumni-section" id="alumni">
      <div className="alumni-inner">

        <div className="alumni-header reveal">
          <div>
            <div className="section-label">Alumni Voices</div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>What Our Graduates Say</h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '16px' }}>
              In their own words — doctors who trained at MGM Kishanganj.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#c8952e', fontSize: '18px', letterSpacing: '2px' }}>★★★★★</span>
            <span style={{ color: 'var(--gray-500)', fontSize: '13px' }}>MBBS · MD · PG Alumni</span>
          </div>
        </div>

        <div className="alumni-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="alumni-card reveal">
              <div className="alumni-card-top" style={{ background: t.accent }} />
              <div className="alumni-card-body">
                <div className="alumni-quote">&ldquo;</div>
                <p className={`alumni-text ${expanded[i] ? 'expanded' : ''}`}>{t.text}</p>
                <button
                  className="alumni-read-more"
                  onClick={() => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))}
                >
                  {expanded[i] ? 'Show less' : 'Read more'}
                </button>
              </div>
              <div className="alumni-footer">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="alumni-avatar-img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="alumni-avatar-fallback"
                  style={{
                    background: t.avatarBg,
                    color: t.avatarColor,
                    display: t.photo ? 'none' : 'flex'
                  }}
                >
                  {t.initials}
                </div>
                <div className="alumni-info">
                  <div className="alumni-name">{t.name}</div>
                  <div className="alumni-role">{t.role}</div>
                  <div className="alumni-institution">{t.institution}</div>
                </div>
                <span
                  className="alumni-batch"
                  style={{ background: t.batchBg, color: t.batchColor }}
                >
                  {t.batch}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="alumni-cta reveal">
          <p>An <strong>MGM alumnus?</strong> Share your experience and inspire the next batch.</p>
          <a href="mailto:mgmkne@gmail.com?subject=Alumni Feedback" className="view-all-btn">
            Share Your Feedback →
          </a>
        </div>

      </div>
    </section>
  )
}