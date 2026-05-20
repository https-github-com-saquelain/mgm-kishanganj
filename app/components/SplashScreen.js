'use client'
import { useState, useEffect } from 'react'

export default function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('mgm_splash_seen')

    if (!seen) {
      // mark seen immediately
      sessionStorage.setItem('mgm_splash_seen', '1')
      setVisible(true)

      const hideTimer = setTimeout(() => setHiding(true), 2400)
      const removeTimer = setTimeout(() => {
        setVisible(false)
        document.body.classList.remove('splash-pending')
      }, 2900)

      return () => {
        clearTimeout(hideTimer)
        clearTimeout(removeTimer)
      }
    } else {
      // no splash — immediately reveal the page
      document.body.classList.remove('splash-pending')
    }
  }, [])

  if (!visible) return null

  return (
    <div id="splash-screen" className={`splash ${hiding ? 'splash-hide' : ''}`}>
      <div className="splash-inner">
        <div className="splash-logo-wrap">
          <img
            src="/mgm-logo.png"
            alt="MGM Medical College"
            className="splash-logo"
          />
        </div>
        <div className="splash-text">
          <div className="splash-name">Mata Gujri Memorial Medical College</div>
          <div className="splash-sub">&amp; Lions Seva Kendra Hospital, Kishanganj</div>
        </div>
        <div className="splash-bar">
          <div className="splash-bar-fill"></div>
        </div>
      </div>
    </div>
  )
}