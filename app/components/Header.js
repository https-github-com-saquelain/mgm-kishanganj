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
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#departments" onClick={(e) => handleNavClick(e, '#departments')}>Departments</a></li>
          <li><a href="#hospital" onClick={(e) => handleNavClick(e, '#hospital')}>Hospital</a></li>
          <li><a href="#notices" onClick={(e) => handleNavClick(e, '#notices')}>Notices</a></li>
          <li><a href="#results" onClick={(e) => handleNavClick(e, '#results')}>Results</a></li>
          <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          <li><a href="#" className="nav-cta">Apply Now</a></li>
        </ul>
        <button className="mobile-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
