'use client'
import { useState, useEffect } from 'react'
import { scrollToSection } from '../utils/scroll'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    scrollToSection(e, id, () => setNavOpen(false))
  }

  return (
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
          <li className="nav-dropdown">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <div className="nav-dropdown-menu">
              <a href="/about">About MGM</a>
              <a href="/principal-dean">Principal / Dean</a>
              <a href="/vice-principal">Vice Principal</a>
              <a href="/medical-superintendent">Medical Superintendent</a>
              <a href="#">Affiliations &amp; Accreditation</a>
              <a href="#">Affiliating University Info</a>
            </div>
          </li>
          <li className="nav-dropdown">
            <a href="#">Academics</a>
            <div className="nav-dropdown-menu">
              <a href="#">Syllabus UG (Undergraduate)</a>
              <a href="#">Syllabus PG (Postgraduate)</a>
              <a href="#">AETCOM Module</a>
              <a href="#">Academic Calendar</a>
              <a href="/faculty">Teaching Faculty</a>
              <a href="/faculty?tab=non-teaching">Non-Teaching Staff</a>
            </div>
          </li>
          <li><a href="#departments" onClick={(e) => handleNavClick(e, '#departments')}>Departments</a></li>
          <li><a href="#">Admissions</a></li>
          <li className="nav-dropdown">
            <a href="/committees">Committees</a>
            <div className="nav-dropdown-menu">
                <a href="/committees#meu">MEU (Medical Education Unit)</a>
                <a href="/committees#curriculum-committee">Curriculum Committee</a>
                <a href="/committees#anti-ragging">Anti-Ragging</a>
                <a href="/committees#icc">Gender Harassment (POSH / ICC)</a>
                <a href="/committees#pharmacovigilance">Pharmacovigilance</a>
                <a href="/committees">View All Committees →</a>
            </div>
            </li>
          <li><a href="#" className="nav-cta">Apply Now</a></li>
        </ul>

        <button className="mobile-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}