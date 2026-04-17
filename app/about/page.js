'use client'
import { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    revealEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-overlay"></div>
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-content">
          <div className="section-label" style={{color: 'var(--gold-light)'}}>About Us</div>
          <h1>Mata Gujri Memorial Medical College &amp; LSK Hospital</h1>
          <p>&ldquo;Service to Man is Service to God&rdquo;</p>
        </div>
      </div>

      {/* Content */}
      <section className="about-page-content">
        <div className="about-page-inner">
          <div className="about-page-text reveal">
            <p>Mata Gujri Memorial Medical College stands as a beacon of compassionate healthcare and quality medical education, deeply rooted in its guiding motto, &ldquo;Service to Man is Service to God.&rdquo; This philosophy forms the cornerstone of all academic, clinical, and community-oriented activities within and outside the institution.</p>

            <p>Established in the year 1990, the college is committed to nurturing healthcare professionals who combine scientific excellence with humanistic values. Currently the institution admits <strong>150 MBBS students</strong> and <strong>112 postgraduate (MD/MS) students</strong> across <strong>17 disciplines</strong> per session. Students are trained not only to diagnose and treat diseases but also to serve patients with empathy, dignity, and respect.</p>

            <p>The institution fosters a culture where patient care is viewed as a sacred responsibility, reinforcing the idea that serving humanity is the highest form of service.</p>
          </div>

          {/* Key Stats */}
          <div className="about-page-stats reveal">
            <div className="about-stat">
              <h3>150</h3>
              <span>MBBS Students per Session</span>
            </div>
            <div className="about-stat">
              <h3>112</h3>
              <span>PG Students per Session</span>
            </div>
            <div className="about-stat">
              <h3>17</h3>
              <span>Disciplines</span>
            </div>
            <div className="about-stat">
              <h3>3000–4000</h3>
              <span>Daily OPD Patients</span>
            </div>
          </div>

          <div className="about-page-text reveal">
            <h2>Clinical Excellence</h2>
            <p>A key strength of the institution lies in its comprehensive and well-integrated clinical services. The diagnostic laboratories — encompassing pathology, microbiology, biochemistry, and transfusion medicine — provide accurate, timely, and quality-assured investigations that form the backbone of patient care.</p>

            <p>The blood bank functions with stringent safety protocols, ensuring the availability of safe blood and components, while also sensitizing students to the critical importance of transfusion services in modern medicine.</p>

            <p>Our operation theatres are equipped to handle a wide range of surgical procedures, offering students hands-on exposure to perioperative care, surgical techniques, and interdisciplinary coordination. These facilities not only support advanced patient care but also serve as dynamic learning spaces where theory meets practice.</p>
          </div>

          <div className="about-page-image reveal">
            <img src="/campus-3.jpeg" alt="Campus Grounds" />
          </div>

          <div className="about-page-text reveal">
            <h2>Holistic Development</h2>
            <p>Beyond academics and clinical training, the institution places significant emphasis on the holistic development of students. A vibrant campus life, including sports, cultural activities, literary forums, and student-led initiatives, ensures a healthy balance between rigorous training and personal well-being.</p>

            <p>These recreational avenues foster teamwork, leadership, creativity, and resilience — qualities essential for future healthcare professionals.</p>
          </div>

          <div className="about-page-text reveal">
            <h2>Community Service</h2>
            <p>With a strong emphasis on accessible and affordable healthcare, the attached teaching hospital caters to a large and diverse population, often providing free or subsidized treatment to those in need. Everyday about <strong>3,000 to 4,000 patients</strong> attend the out-patient departments to seek clinical consultation.</p>

            <p>This environment offers students rich clinical exposure while instilling in them a deep sense of social accountability.</p>
          </div>

          <div className="about-page-text reveal">
            <h2>Our Mission</h2>
            <p>Through its integrated approach to the three pillars — <strong>student education</strong>, <strong>patient service</strong>, and <strong>medical research</strong> — Mata Gujri Memorial Medical College continues to uphold its noble mission: transforming young learners into compassionate healers dedicated to the welfare of society.</p>
          </div>
        </div>
      </section>
    </div>
  )
}