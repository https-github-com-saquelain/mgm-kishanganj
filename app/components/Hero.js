'use client'
import { useState, useEffect } from 'react'
import { scrollToSection } from '../utils/scroll'

const slides = [
  { src: '/campus-2.jpeg', alt: 'MGM Medical College Campus' },
  { src: '/campus-1.jpeg', alt: 'MGM Campus Gate' },
  { src: '/campus-3.jpeg', alt: 'MGM Campus View' },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
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
  )
}
