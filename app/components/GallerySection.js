'use client'
import { useState, useEffect } from 'react'

const galleryImages = [
  { src: '/campus-2.jpeg', label: 'Main University Building' },
  { src: '/campus-3.jpeg', label: 'Campus Grounds' },
  { src: '/campus-4.jpeg', label: 'University Gate' },
  { src: '/campus-5.jpeg', label: 'Medical College & Hospital' },
  { src: '/campus-1.jpeg', label: 'University Front View' },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  const openLightbox = (index) => setLightbox({ open: true, index })
  const closeLightbox = () => setLightbox({ open: false, index: 0 })
  const prevImage = () => setLightbox(prev => ({ open: true, index: (prev.index - 1 + galleryImages.length) % galleryImages.length }))
  const nextImage = () => setLightbox(prev => ({ open: true, index: (prev.index + 1) % galleryImages.length }))

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox.open])

  return (
    <>
      <section className="gallery-section" id="gallery">
        <div className="gallery-inner">
          <div className="gallery-header reveal">
            <div className="section-label">Campus Life</div>
            <h2 className="section-title">Our Campus &amp; Facilities</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item reveal" onClick={() => openLightbox(i)}>
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className="gallery-item-overlay"><span>{img.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`lightbox ${lightbox.open ? 'open' : ''}`} onClick={closeLightbox}>
        <button className="lightbox-close" onClick={closeLightbox}>✕</button>
        <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage() }}>‹</button>
        <img
          src={galleryImages[lightbox.index]?.src}
          alt={galleryImages[lightbox.index]?.label}
          onClick={(e) => e.stopPropagation()}
        />
        <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage() }}>›</button>
        <div className="lightbox-caption">{galleryImages[lightbox.index]?.label}</div>
      </div>
    </>
  )
}
