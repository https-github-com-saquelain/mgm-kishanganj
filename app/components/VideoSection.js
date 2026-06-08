export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-inner reveal">
        <div className="section-label">Virtual Tour</div>
        <h2 className="section-title">Experience Our Campus</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/npQtBi-G4Dk"
            title="Mata Gujri University, Kishanganj, Bihar- Aerial View !!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
