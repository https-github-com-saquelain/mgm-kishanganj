export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-inner reveal">
        <div className="section-label">Virtual Tour</div>
        <h2 className="section-title">Experience Our Campus</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dthc3tAB08U"
            title="Mata Gujri Memorial Medical College, Kishanganj, Aerial &amp; Inner View"
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
