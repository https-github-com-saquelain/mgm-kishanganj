export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-details reveal">
          <h2>Get in Touch</h2>
          <div className="contact-item">
            <div className="contact-item-icon">📍</div>
            <div className="contact-item-text">
              <h4>Address</h4>
              <p>Mata Gujri Memorial Medical College &amp; Lion&apos;s Seva Kendra Hospital<br />Kishanganj (Bihar) PIN-855107</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">📞</div>
            <div className="contact-item-text">
              <h4>Phone</h4>
              <p><a href="tel:+916456222719">+91-6456-222719</a></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">✉️</div>
            <div className="contact-item-text">
              <h4>Email</h4>
              <p><a href="mailto:mgmkne@gmail.com">mgmkne@gmail.com</a></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">📠</div>
            <div className="contact-item-text">
              <h4>Fax</h4>
              <p>06456-222719</p>
            </div>
          </div>
        </div>
        <div className="map-wrapper reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7!2d87.9467!3d26.0917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4b5a6c4f0b7a9%3A0x6f4d8e8b8c8d8e8f!2sMata%20Gujri%20Memorial%20Medical%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
