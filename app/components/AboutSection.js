export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="reveal">
          <div className="section-label">About Us</div>
          <h2 className="section-title">A Legacy of Medical Excellence in Bihar</h2>
          <div className="about-text">
            <p>Mata Gujri Memorial Medical College &amp; Lion&apos;s Seva Kendra Hospital, Kishanganj was sponsored and established by a Trust of the Sikh religious minority community under Article 30(1) of the Constitution of India, with a vision of providing efficient medical service to the people of the entire North-East Region.</p>
            <p>Serving an underdeveloped, educationally, socially and economically backward area, the Sikh minority community decided to transform healthcare in the State of Bihar through a world-class Medical College and a well-equipped Hospital.</p>
          </div>
          <div className="about-recognition">
            <div className="recognition-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              NMC Recognized
            </div>
            <div className="recognition-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              Govt. of India Approved
            </div>
            <div className="recognition-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              Minority Institution
            </div>
          </div>
        </div>
        <div className="about-image-wrapper reveal">
          <img src="/campus-1.jpeg" alt="MGM Medical College Building" />
        </div>
      </div>
    </section>
  )
}
