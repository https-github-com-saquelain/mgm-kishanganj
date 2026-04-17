import AnnouncementBar from './components/AnnouncementBar'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickLinks from './components/QuickLinks'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import DepartmentsSection from './components/DepartmentsSection'
import VideoSection from './components/VideoSection'
import NoticesSection from './components/NoticesSection'
import GallerySection from './components/GallerySection'
import HospitalSection from './components/HospitalSection'
import DownloadsSection from './components/DownloadsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <AnnouncementBar />
      <TopBar />
      <Header />
      <Hero />
      <QuickLinks />
      <StatsSection />
      <AboutSection />
      <DepartmentsSection />
      <VideoSection />
      <NoticesSection />
      <GallerySection />
      <HospitalSection />
      <DownloadsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  )
}
