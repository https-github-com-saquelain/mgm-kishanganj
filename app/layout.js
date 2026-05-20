import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AnnouncementBar from './components/AnnouncementBar'
import TopBar from './components/TopBar'
import BackToTop from './components/BackToTop'
import ScrollReveal from './components/ScrollReveal'
import SplashScreen from './components/SplashScreen'

export const metadata = {
  title: 'Mata Gujri Memorial Medical College & LSK Hospital, Kishanganj',
  description: 'Official website of Mata Gujri Memorial Medical College & Lions Seva Kendra Hospital, Kishanganj, Bihar. Established 1990. Recognized by NMC & Govt. of India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* prevents flash before splash mounts */}
        <style>{`
            body.splash-pending { overflow: hidden; }
            body.splash-pending > *:not(#splash-screen) { visibility: hidden; }
        `}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="splash-pending">
        <SplashScreen />
        <ScrollReveal />
        <AnnouncementBar />
        <TopBar />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}