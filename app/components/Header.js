'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
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

  const closeNav = () => setNavOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="logo-area">
          <img src="/mgm-logo.png" alt="MGM Logo" />
          <div className="logo-text">
            <div className="name">Mata Gujri Memorial Medical College</div>
            <div className="sub">&amp; Lions Seva Kendra Hospital, Kishanganj</div>
          </div>
        </Link>

        <ul className={`nav-links ${navOpen ? 'open' : ''}`}>

          {/* About */}
          <li className="nav-dropdown">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <div className="nav-dropdown-menu">
              <Link href="/about" onClick={closeNav}>About MGM</Link>
              <Link href="/principal-dean" onClick={closeNav}>Principal / Dean</Link>
              <Link href="/vice-principal" onClick={closeNav}>Vice Principal</Link>
              <Link href="/medical-superintendent" onClick={closeNav}>Medical Superintendent</Link>
              <Link href="/gallery" onClick={closeNav}>Gallery</Link>
              <a href="#">Affiliations &amp; Accreditation</a>
              <a href="https://www.matagujriuniversity.com/" target="_blank" rel="noopener noreferrer">Affiliating University Info</a>
            </div>
          </li>

          {/* Academics */}
          <li className="nav-dropdown">
            <a href="#">Academics</a>
            <div className="nav-dropdown-menu">
              <Link href="/class-notices" onClick={closeNav}>Class Notices</Link>
              <Link href="/syllabus-ug" onClick={closeNav}>Syllabus UG (Undergraduate)</Link>
              <a href="https://www.nmc.org.in/information-desk/for-colleges/pg-curricula-2/" target="_blank" rel="noopener noreferrer">Syllabus PG (Postgraduate)</a>
              <Link href="/aetcom-module" onClick={closeNav}>AETCOM Module</Link>
              <a href="#">Academic Calendar</a>
              <a href="#">Courses</a>
              <Link href="/students" onClick={closeNav}>List of Students</Link>
              <Link href="/faculty" onClick={closeNav}>Teaching Faculty</Link>
              <Link href="/faculty?tab=non-teaching" onClick={closeNav}>Non-Teaching Staff</Link>
            </div>
          </li>

          {/* Departments */}
          <li className="nav-dropdown">
            <a href="#departments" onClick={(e) => handleNavClick(e, '#departments')}>Departments</a>
            <div className="nav-dropdown-menu">
              <Link href="/departments/anatomy" onClick={closeNav}>Anatomy</Link>
              <Link href="/departments/physiology" onClick={closeNav}>Physiology</Link>
              <Link href="/departments/biochemistry" onClick={closeNav}>Biochemistry</Link>
              <Link href="/departments/pathology" onClick={closeNav}>Pathology</Link>
              <Link href="/departments/microbiology" onClick={closeNav}>Microbiology</Link>
              <Link href="/departments/pharmacology" onClick={closeNav}>Pharmacology</Link>
              <Link href="/departments/community-medicine" onClick={closeNav}>Community Medicine</Link>
              <Link href="/departments/forensic-medicine" onClick={closeNav}>Forensic Medicine</Link>
              <Link href="/departments/general-medicine" onClick={closeNav}>General Medicine</Link>
              <Link href="/departments/general-surgery" onClick={closeNav}>General Surgery</Link>
              <Link href="/departments/obstetrics-gynaecology" onClick={closeNav}>Obstetrics &amp; Gynaecology</Link>
              <Link href="/departments/paediatrics" onClick={closeNav}>Paediatrics</Link>
              <Link href="/departments/orthopaedics" onClick={closeNav}>Orthopaedics</Link>
              <Link href="/departments/ophthalmology" onClick={closeNav}>Ophthalmology</Link>
              <Link href="/departments/ent" onClick={closeNav}>ENT</Link>
              <Link href="/departments/dermatology" onClick={closeNav}>Dermatology</Link>
              <Link href="/departments/anaesthesiology" onClick={closeNav}>Anaesthesiology</Link>
              <Link href="/departments/radio-diagnosis" onClick={closeNav}>Radio-Diagnosis</Link>
            </div>
          </li>

          {/* Admissions */}
          <li className="nav-dropdown">
            <Link href="/admissions">Admissions</Link>
            <div className="nav-dropdown-menu">
              <Link href="/admissions?tab=ug" onClick={closeNav}>UG Admission</Link>
              <Link href="/admissions?tab=pg" onClick={closeNav}>PG Admission</Link>
            </div>
          </li>

          {/* Committees */}
          <li className="nav-dropdown">
            <Link href="/committees">Committees</Link>
            <div className="nav-dropdown-menu">
              <Link href="/committees#meu" onClick={closeNav}>MEU (Medical Education Unit)</Link>
              <Link href="/committees#curriculum-committee" onClick={closeNav}>Curriculum Committee</Link>
              <Link href="/committees#anti-ragging" onClick={closeNav}>Anti-Ragging</Link>
              <Link href="/committees#icc" onClick={closeNav}>Gender Harassment (POSH / ICC)</Link>
              <Link href="/committees#pharmacovigilance" onClick={closeNav}>Pharmacovigilance</Link>
              <Link href="/committees" onClick={closeNav}>View All Committees →</Link>
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