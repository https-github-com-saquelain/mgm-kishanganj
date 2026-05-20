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
import AlumniSection from './components/AlumniSection'

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <StatsSection />
      <AboutSection />
      <DepartmentsSection />
      <VideoSection />
      <NoticesSection />
      <GallerySection />
      <HospitalSection />
      <AlumniSection />
      <DownloadsSection />
      <ContactSection />
    </>
  )
}