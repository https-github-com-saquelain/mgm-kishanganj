'use client'
import { scrollToSection } from '../utils/scroll'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/mgm-logo.png" alt="MGM Logo" />
              <div className="footer-brand-text">Mata Gujri Memorial<br />Medical College</div>
            </div>
            <p>Established by the Sikh minority community to serve the healthcare needs of the North-East Region, Kishanganj, Bihar since 1990.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Us</a></li>
              <li><a href="#departments" onClick={(e) => scrollToSection(e, '#departments')}>Departments</a></li>
              <li><a href="#hospital" onClick={(e) => scrollToSection(e, '#hospital')}>Hospital</a></li>
              <li><a href="#notices" onClick={(e) => scrollToSection(e, '#notices')}>Notices</a></li>
              <li><a href="#results" onClick={(e) => scrollToSection(e, '#results')}>Results</a></li>
              <li><a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4>Academics</h4>
            <ul className="footer-links">
              <li><a href="#">MBBS Programme</a></li>
              <li><a href="#">MD / MS Courses</a></li>
              <li><a href="#">B.Sc. Nursing</a></li>
              <li><a href="#">B.Pharm / D.Pharm</a></li>
              <li><a href="#">GNM Nursing</a></li>
              <li><a href="#">Paramedical</a></li>
            </ul>
          </div>
          <div>
            <h4>Important</h4>
            <ul className="footer-links">
              <li><a href="#">Anti-Ragging Policy</a></li>
              <li><a href="#">RTI Information</a></li>
              <li><a href="#">Grievance Redressal</a></li>
              <li><a href="#">NMC Compliance</a></li>
              <li><a href="https://www.matagujriuniversity.com/" target="_blank" rel="noopener noreferrer">Mata Gujri University</a></li>
              <li><a href="#">Student Portal</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Mata Gujri Memorial Medical College &amp; LSK Hospital, Kishanganj. All rights reserved.</p>
          <div className="footer-motto">&ldquo;Service to Man is Service to God&rdquo;</div>
        </div>
      </div>
    </footer>
  )
}
