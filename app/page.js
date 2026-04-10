'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [backToTopVisible, setBackToTopVisible] = useState(false)

  const slides = [
    { src: '/campus-2.jpeg', alt: 'MGM Medical College Campus' },
    { src: '/campus-1.jpeg', alt: 'MGM Campus Gate' },
    { src: '/campus-3.jpeg', alt: 'MGM Campus View' },
  ]

  // Hero slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setBackToTopVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    revealEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight
      const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: targetPos, behavior: 'smooth' })
    }
    setNavOpen(false)
  }

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="marquee-inner">
          &nbsp;&nbsp;&nbsp;&nbsp;📢 Admissions Open for MBBS Session 2026-27 &nbsp;&nbsp;|&nbsp;&nbsp; 🏆 Recognized by NMC &amp; Govt. of India &nbsp;&nbsp;|&nbsp;&nbsp; 📋 Result of 1st Professional M.B.B.S. Examination 2025 (I) — Published &nbsp;&nbsp;|&nbsp;&nbsp; ⚠️ Beware of Fake Personnel Regarding Admission in Medical Courses &nbsp;&nbsp;|&nbsp;&nbsp; 📢 Admissions Open for MBBS Session 2026-27 &nbsp;&nbsp;|&nbsp;&nbsp; 🏆 Recognized by NMC &amp; Govt. of India &nbsp;&nbsp;|&nbsp;&nbsp; 📋 Result of 1st Professional M.B.B.S. Examination 2025 (I) — Published &nbsp;&nbsp;|&nbsp;&nbsp; ⚠️ Beware of Fake Personnel Regarding Admission in Medical Courses
        </div>
      </div>

      {/* Top Bar */}
      <div className="top-bar">
        <span>Affiliated to Mata Gujri University, Kishanganj &nbsp;|&nbsp; Recognized by NMC &amp; Govt. of India</span>
        <div>
          <a href="#">Student Portal</a>
          <a href="#">Staff Login</a>
          <a href="#">Alumni</a>
        </div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo-area">
            <img src="/mgm-logo.png" alt="MGM Logo" />
            <div className="logo-text">
              <div className="name">Mata Gujri Memorial Medical College</div>
              <div className="sub">&amp; Lions Seva Kendra Hospital, Kishanganj</div>
            </div>
          </a>
          <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
            <li><a href="#departments" onClick={(e) => scrollToSection(e, '#departments')}>Departments</a></li>
            <li><a href="#hospital" onClick={(e) => scrollToSection(e, '#hospital')}>Hospital</a></li>
            <li><a href="#notices" onClick={(e) => scrollToSection(e, '#notices')}>Notices</a></li>
            <li><a href="#results" onClick={(e) => scrollToSection(e, '#results')}>Results</a></li>
            <li><a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
            <li><a href="#" className="nav-cta">Apply Now</a></li>
          </ul>
          <button className="mobile-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-slides">
          {slides.map((slide, i) => (
            <div key={i} className={`hero-slide ${i === currentSlide ? 'active' : ''}`}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">Established 1990 — Kishanganj, Bihar</div>
          <h1>Shaping the Future of <span className="highlight">Healthcare</span> Education</h1>
          <p className="hero-sub">&ldquo;Service to Man is Service to God&rdquo; — Empowering medical professionals to serve India&apos;s underserved North-East region since 1990.</p>
          <div className="hero-actions">
            <a href="#" className="btn-hero btn-hero-primary">Explore Admissions →</a>
            <a href="#departments" onClick={(e) => scrollToSection(e, '#departments')} className="btn-hero btn-hero-outline">View Departments</a>
          </div>
        </div>
        <div className="hero-indicators">
          {slides.map((_, i) => (
            <button key={i} className={`hero-indicator ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)}></button>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <div className="quick-links">
        <div className="quick-links-inner">
          <a href="#" className="quick-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            Admissions 2026-27
          </a>
          <a href="#results" onClick={(e) => scrollToSection(e, '#results')} className="quick-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
            Examination Results
          </a>
          <a href="#hospital" onClick={(e) => scrollToSection(e, '#hospital')} className="quick-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg>
            Hospital Services
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="quick-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            Contact Us
          </a>
        </div>
      </div>

      {/* Stats */}
      <section className="stats-section reveal">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">1990</div>
            <div className="stat-label">Year Established</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100<span className="plus">+</span></div>
            <div className="stat-label">MBBS Seats</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">610</div>
            <div className="stat-label">Hospital Beds</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">17</div>
            <div className="stat-label">PG Departments</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="reveal">
            <div className="section-label">About Us</div>
            <h2 className="section-title">A Legacy of Medical Excellence in Bihar</h2>
            <div className="about-text">
              <p>Mata Gujri Memorial Medical College &amp; Lion&apos;s Seva Kendra Hospital, Kishanganj was sponsored and established by a Trust of the Sikh religious minority community under Article 30(1) of the Constitution of India, with a vision of providing efficient medical service to the people of the entire North-East Region.</p>
              <p>Serving an underdeveloped, educationally, socially and economically backward area, the Sikh minority community decided to transform healthcare in the State of Bihar through a world-class Medical College and a well-equipped Hospital.</p>
            </div>
            <div className="about-recognition">
              <div className="recognition-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                NMC Recognized
              </div>
              <div className="recognition-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                Govt. of India Approved
              </div>
              <div className="recognition-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                Minority Institution
              </div>
            </div>
          </div>
          <div className="about-image-wrapper reveal">
            <img src="/campus-1.jpeg" alt="MGM Medical College Building" />
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section" id="departments">
        <div className="departments-inner">
          <div className="departments-header reveal">
            <div className="section-label">Academics</div>
            <h2 className="section-title">Departments &amp; Programmes</h2>
            <p style={{maxWidth:'600px', margin:'12px auto 0', color:'var(--gray-500)', fontSize:'16px', lineHeight:'1.6'}}>Offering comprehensive undergraduate and postgraduate medical education across 17 specialized departments.</p>
          </div>
          <div className="departments-grid">
            {[
              { name: 'Anatomy', desc: 'Foundation of medical education through structural study of the human body.' },
              { name: 'Physiology', desc: 'Understanding the mechanical, physical and biochemical functions of the human body.' },
              { name: 'Biochemistry', desc: 'Chemical processes and substances occurring within living organisms.' },
              { name: 'Pathology', desc: 'Study and diagnosis of disease through examination of tissues, organs and body fluids.' },
              { name: 'Microbiology', desc: 'Study of microorganisms and their role in health and disease.' },
              { name: 'Pharmacology', desc: 'Study of drugs, their mechanisms, uses and adverse effects.' },
              { name: 'General Medicine', desc: 'Diagnosis and non-surgical treatment of diseases across all body systems.' },
              { name: 'General Surgery', desc: 'Surgical treatment focusing on abdominal organs, trauma and critical care.' },
              { name: 'Obstetrics & Gynaecology', desc: 'Comprehensive maternal, reproductive and women\'s healthcare services.' },
              { name: 'Paediatrics', desc: 'Specialized care for infants, children and adolescents with NICU and PICU.' },
              { name: 'Orthopaedics', desc: 'Diagnosis and treatment of musculoskeletal system disorders and injuries.' },
              { name: 'Ophthalmology', desc: 'Complete eye care including surgery and management of visual disorders.' },
              { name: 'ENT', desc: 'Treatment of ear, nose and throat disorders with modern diagnostic facilities.' },
              { name: 'Dermatology', desc: 'Diagnosis and management of skin, hair and nail conditions.' },
              { name: 'Anaesthesiology', desc: 'Anaesthesia services, pain management and critical care medicine.' },
              { name: 'Radio-Diagnosis', desc: 'State-of-the-art MRI, CT Scanner, Colour Doppler and advanced imaging.' },
              { name: 'Community Medicine', desc: 'Preventive and social medicine serving the broader community health needs.' },
              { name: 'Forensic Medicine', desc: 'Application of medical knowledge to legal investigation and proceedings.' },
            ].map((dept, i) => (
              <div key={i} className="dept-card reveal">
                <h3>{dept.name}</h3>
                <p>{dept.desc}</p>
                <span className="dept-arrow">Learn more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-inner reveal">
          <div className="section-label">Virtual Tour</div>
          <h2 className="section-title">Experience Our Campus</h2>
          <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/dthc3tAB08U" title="Mata Gujri Memorial Medical College, Kishanganj, Aerial &amp; Inner View" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* Notices */}
      <section className="notices-section" id="notices">
        <div className="notices-inner">
          <div className="notices-col reveal">
            <h2>Latest Notices</h2>
            {[
              { date: '2025-10-29', title: 'MGMMC Anti-Ragging Committee Notice', tag: 'Important', tagClass: 'tag-urgent' },
              { date: '2024-03-25', title: 'Weekly Class Schedule (32nd Batch) — 25.03.2024 to 06.04.2024' },
              { date: '2023-04-10', title: 'Anti-Ragging Monitoring Cell Notice', tag: 'Important', tagClass: 'tag-urgent' },
              { date: '2022-01-17', title: 'Notice UGMAC Academic Session 2021-22' },
              { date: '2022-01-13', title: 'Notice PGMAC Academic Session 2021-22' },
              { date: '2020-11-09', title: 'Notification of MBBS Admission Session 2020-21' },
              { date: '2020-08-13', title: 'Beware of Fake Personnel Regarding Admission in Medical Courses', tag: 'Warning', tagClass: 'tag-urgent' },
            ].map((notice, i) => (
              <div key={i} className="notice-item">
                <div className="notice-date">{notice.date}</div>
                <div className="notice-title">{notice.title}</div>
                {notice.tag && <span className={`notice-tag ${notice.tagClass}`}>{notice.tag}</span>}
              </div>
            ))}
            <a href="#" className="view-all-btn">View All Notices →</a>
          </div>
          <div className="notices-col reveal" id="results">
            <h2>Examination Results</h2>
            {[
              { date: '2026-01-02', title: 'Result of 1st Professional M.B.B.S. Examination 2025 (I)', tag: 'UG Result' },
              { date: '2025-12-18', title: 'Result of Postgraduate MD-MS Degree Examination 2025 (I)', tag: 'PG Result' },
              { date: '2025-10-29', title: 'Result of 2nd Professional M.B.B.S. Examination 2025 (I) Batch-II', tag: 'UG Result' },
              { date: '2025-06-17', title: 'Result of 2nd Professional M.B.B.S Examination 2025 (II)', tag: 'UG Result' },
              { date: '2025-06-17', title: 'Result of Postgraduate MD-MS Degree Examination 2024 (II)', tag: 'PG Result' },
              { date: '2025-06-16', title: 'Result of 3rd Professional MBBS Part-I Examination 2025 (II)', tag: 'UG Result' },
              { date: '2025-06-13', title: 'Result of 3rd Professional M.B.B.S. Part-II Examination 2025 (II)', tag: 'UG Result' },
            ].map((result, i) => (
              <div key={i} className="notice-item">
                <div className="notice-date">{result.date}</div>
                <div className="notice-title">{result.title}</div>
                <span className="notice-tag tag-result">{result.tag}</span>
              </div>
            ))}
            <a href="#" className="view-all-btn">View All Results →</a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-inner">
          <div className="gallery-header reveal">
            <div className="section-label">Campus Life</div>
            <h2 className="section-title">Our Campus &amp; Facilities</h2>
          </div>
          <div className="gallery-grid">
            {[
              { src: '/campus-2.jpeg', label: 'Main University Building' },
              { src: '/campus-3.jpeg', label: 'Campus Grounds' },
              { src: '/campus-4.jpeg', label: 'University Gate' },
              { src: '/campus-5.jpeg', label: 'Medical College & Hospital' },
              { src: '/campus-1.jpeg', label: 'University Front View' },
            ].map((img, i) => (
              <div key={i} className="gallery-item reveal">
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className="gallery-item-overlay"><span>{img.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital */}
      <section className="hospital-section" id="hospital">
        <div className="hospital-inner">
          <div className="hospital-content reveal">
            <div className="section-label">Healthcare</div>
            <h2 className="section-title">Lions Seva Kendra Hospital</h2>
            <p>A fully functional 610-bed hospital complete with all facilities and advanced technology. Located in an imposing seven-story complex housing various departments and their respective wards, with 24×7 Casualty and Emergency services.</p>
            <div className="hospital-features">
              {[
                { num: '610', label: 'Hospital Beds' },
                { num: '24/7', label: 'Emergency Services' },
                { num: 'MRI', label: 'HITACHI Advanced MRI' },
                { num: 'CT', label: 'Spiral CT Scanner' },
                { num: 'NICU', label: 'Neonatal ICU' },
                { num: '6', label: 'Burn Unit Beds' },
                { num: 'Blood', label: 'Fully Equipped Blood Bank' },
                { num: 'PICU', label: 'Paediatric ICU' },
              ].map((feat, i) => (
                <div key={i} className="hospital-feature">
                  <h4>{feat.num}</h4>
                  <p>{feat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <img src="/campus-2.jpeg" alt="Hospital Entrance" className="hospital-img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="downloads-section">
        <div className="downloads-inner">
          <div className="downloads-header reveal">
            <div className="section-label">Resources</div>
            <h2 className="section-title">Downloads &amp; Documents</h2>
          </div>
          <div className="downloads-grid">
            {[
              { icon: '📄', title: 'College Information Brochure', desc: 'Complete details about courses, faculty & facilities' },
              { icon: '📋', title: 'Pro Forma 18', desc: 'Official college documentation form', color: 'blue' },
              { icon: '🛡️', title: 'Anti-Ragging Committee Details', desc: 'Committee members & anti-ragging policy', color: 'green' },
              { icon: '📅', title: 'Weekly Class Schedule', desc: 'Latest batch-wise class timetable' },
              { icon: '⚖️', title: 'Gender Harassment Committee', desc: 'Proceedings & committee details', color: 'blue' },
              { icon: '🏥', title: 'MBBS Admission Brochure 2026-27', desc: 'Admission process, eligibility & fee structure', color: 'green' },
            ].map((item, i) => (
              <a key={i} className="download-card reveal" href="#">
                <div className={`download-icon ${item.color || ''}`}>{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-details reveal">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <h4>Address</h4>
                <p>Mata Gujri Memorial Medical College &amp; Lion&apos;s Seva Kendra Hospital<br/>Kishanganj (Bihar) PIN-855107</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <h4>Phone</h4>
                <p><a href="tel:+916456222719">+91-6456-222719</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-text">
                <h4>Email</h4>
                <p><a href="mailto:mgmkne@gmail.com">mgmkne@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📠</div>
              <div className="contact-item-text">
                <h4>Fax</h4>
                <p>06456-222719</p>
              </div>
            </div>
          </div>
          <div className="map-wrapper reveal">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7!2d87.9467!3d26.0917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4b5a6c4f0b7a9%3A0x6f4d8e8b8c8d8e8f!2sMata%20Gujri%20Memorial%20Medical%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <img src="/mgm-logo.png" alt="MGM Logo" />
                <div className="footer-brand-text">Mata Gujri Memorial<br/>Medical College</div>
              </div>
              <p>Established by the Sikh minority community to serve the healthcare needs of the North-East Region, Kishanganj, Bihar since 1990.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Us</a></li>
                <li><a href="#departments" onClick={(e) => scrollToSection(e, '#departments')}>Departments</a></li>
                <li><a href="#hospital" onClick={(e) => scrollToSection(e, '#hospital')}>Hospital</a></li>
                <li><a href="#notices" onClick={(e) => scrollToSection(e, '#notices')}>Notices</a></li>
                <li><a href="#results" onClick={(e) => scrollToSection(e, '#results')}>Results</a></li>
                <li><a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4>Academics</h4>
              <ul className="footer-links">
                <li><a href="#">MBBS Programme</a></li>
                <li><a href="#">MD / MS Courses</a></li>
                <li><a href="#">B.Sc. Nursing</a></li>
                <li><a href="#">B.Pharm / D.Pharm</a></li>
                <li><a href="#">GNM Nursing</a></li>
                <li><a href="#">Paramedical</a></li>
              </ul>
            </div>
            <div>
              <h4>Important</h4>
              <ul className="footer-links">
                <li><a href="#">Anti-Ragging Policy</a></li>
                <li><a href="#">RTI Information</a></li>
                <li><a href="#">Grievance Redressal</a></li>
                <li><a href="#">NMC Compliance</a></li>
                <li><a href="https://www.matagujriuniversity.com/" target="_blank" rel="noopener noreferrer">Mata Gujri University</a></li>
                <li><a href="#">Student Portal</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Mata Gujri Memorial Medical College &amp; LSK Hospital, Kishanganj. All rights reserved.</p>
            <div className="footer-motto">&ldquo;Service to Man is Service to God&rdquo;</div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button className={`back-to-top ${backToTopVisible ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
    </>
  )
}