export default function StatsSection() {
  return (
    <section className="stats-section reveal">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">1990</div>
          <div className="stat-label">Year Established</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">150<span className="plus">+</span></div>
          <div className="stat-label">MBBS Seats</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">610</div>
          <div className="stat-label">Hospital Beds</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">17</div>
          <div className="stat-label">PG Departments</div>
        </div>
      </div>
    </section>
  )
}
