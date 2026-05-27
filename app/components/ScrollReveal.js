'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to let the new page's DOM render fully
    const timer = setTimeout(() => {
      const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')

      // Reset any elements that were marked visible on a previous page
      revealEls.forEach(el => el.classList.remove('visible'))

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )

      revealEls.forEach(el => observer.observe(el))
      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname]) // re-runs on every route change

  return null
}