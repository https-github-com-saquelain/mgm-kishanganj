'use client'
import { useState, useEffect, useRef } from 'react'
import { galleryCategories } from '../data/galleryData'

export default function GalleryPage() {
  const [openCategory, setOpenCategory] = useState(null)
  const [lightbox, setLightbox] = useState({ open: false, photos: [], index: 0 })
  const expandRef = useRef(null)

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Keyboard nav for lightbox
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  const toggleCategory = (id) => {
    if (openCategory === id) {
      setOpenCategory(null)
    } else {
      setOpenCategory(id)
      // Small delay to let state update, then scroll into view
      setTimeout(() => {
        expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }
  }

  const openLightbox = (photos, index) => setLightbox({ open: true, photos, index })
  const closeLightbox = () => setLightbox({ open: false, photos: [], index: 0 })
  const prevImage = () => setLightbox(prev => ({ ...prev, index: (prev.index - 1 + prev.photos.length) % prev.photos.length }))
  const nextImage = () => setLightbox(prev => ({ ...prev, index: (prev.index + 1) % prev.photos.length }))

  const currentPhoto = lightbox.photos[lightbox.index]

  return (
    <div className="gallery-page">

      {/* ── Hero ── */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Campus Life</div>
          <h1>Gallery</h1>
          <p>Programmes, Events &amp; Occasions at MGM Kishanganj</p>
        </div>
      </div>

      {/* ── Intro strip ── */}
      <div className="gallery-page-strip">
        <div className="gallery-page-strip-inner">
          <p>
            A visual chronicle of academic programmes, CMEs, workshops, ceremonies, and institutional
            events at Mata Gujri Memorial Medical College &amp; Lions Seva Kendra Hospital.
          </p>
          <span className="gallery-page-count">
            <strong>{galleryCategories.length}</strong> Events
          </span>
        </div>
      </div>

      {/* ── Category Cards ── */}
      <div className="gallery-page-content">
        <div className="gallery-page-inner">
          <div className="gallery-cat-grid">
            {galleryCategories.map((cat, i) => (
              <div key={cat.id} className="gallery-cat-wrapper reveal">

                {/* Category card */}
                <button
                  className={`gallery-cat-card ${openCategory === cat.id ? 'active' : ''}`}
                  onClick={() => toggleCategory(cat.id)}
                  aria-expanded={openCategory === cat.id}
                >
                  {/* Cover image */}
                  <div className="gallery-cat-cover">
                    <img
                      src={cat.cover}
                      alt={cat.title}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Fallback if no cover image yet */}
                    <div className="gallery-cat-cover-fallback" style={{ display: 'none' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <span>Photos Coming Soon</span>
                    </div>
                    {/* Overlay */}
                    <div className="gallery-cat-overlay" />
                    {/* Photo count badge */}
                    <span className="gallery-cat-count-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      {cat.photos.length} photos
                    </span>
                  </div>

                  {/* Card info */}
                  <div className="gallery-cat-info">
                    <div className="gallery-cat-meta">
                      <span className="gallery-cat-date">{cat.date}</span>
                    </div>
                    <h3 className="gallery-cat-title">{cat.title}</h3>
                    <div className="gallery-cat-toggle">
                      <span>{openCategory === cat.id ? 'Close Gallery' : 'View Photos'}</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform: openCategory === cat.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Inline expanded photo grid */}
                {openCategory === cat.id && (
                  <div className="gallery-cat-expand" ref={expandRef}>
                    {cat.photos.length === 0 ? (
                      <div className="gallery-cat-empty">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <p>Photos will be uploaded soon.</p>
                      </div>
                    ) : (
                      <>
                        <div className="gallery-cat-expand-header">
                          <span>{cat.title}</span>
                          <span className="gallery-cat-expand-count">{cat.photos.length} Photos</span>
                        </div>
                        <div className="gallery-cat-photos-grid">
                          {cat.photos.map((photo, pi) => (
                            <div
                              key={pi}
                              className="gallery-cat-photo"
                              onClick={() => openLightbox(cat.photos, pi)}
                            >
                              <img
                                src={photo.src}
                                alt={photo.caption || cat.title}
                                loading="lazy"
                                onError={(e) => {
                                  e.target.parentElement.classList.add('photo-error')
                                }}
                              />
                              <div className="gallery-cat-photo-overlay">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                  <circle cx="11" cy="11" r="8" />
                                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                  <line x1="11" y1="8" x2="11" y2="14" />
                                  <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                              </div>
                              {photo.caption && (
                                <div className="gallery-cat-photo-caption">{photo.caption}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <div className={`lightbox ${lightbox.open ? 'open' : ''}`} onClick={closeLightbox}>
        <button className="lightbox-close" onClick={closeLightbox}>✕</button>
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => { e.stopPropagation(); prevImage() }}
        >‹</button>
        {currentPhoto && (
          <img
            src={currentPhoto.src}
            alt={currentPhoto.caption}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => { e.stopPropagation(); nextImage() }}
        >›</button>
        {currentPhoto?.caption && (
          <div className="lightbox-caption">{currentPhoto.caption}</div>
        )}
        <div className="lightbox-counter">
          {lightbox.index + 1} / {lightbox.photos.length}
        </div>
      </div>

    </div>
  )
}