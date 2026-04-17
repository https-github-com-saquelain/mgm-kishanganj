const downloads = [
  { icon: '📄', title: 'College Information Brochure', desc: 'Complete details about courses, faculty & facilities' },
  { icon: '📋', title: 'Pro Forma 18', desc: 'Official college documentation form', color: 'blue' },
  { icon: '🛡️', title: 'Anti-Ragging Committee Details', desc: 'Committee members & anti-ragging policy', color: 'green' },
  { icon: '📅', title: 'Weekly Class Schedule', desc: 'Latest batch-wise class timetable' },
  { icon: '⚖️', title: 'Gender Harassment Committee', desc: 'Proceedings & committee details', color: 'blue' },
  { icon: '🏥', title: 'MBBS Admission Brochure 2026-27', desc: 'Admission process, eligibility & fee structure', color: 'green' },
]

export default function DownloadsSection() {
  return (
    <section className="downloads-section">
      <div className="downloads-inner">
        <div className="downloads-header reveal">
          <div className="section-label">Resources</div>
          <h2 className="section-title">Downloads &amp; Documents</h2>
        </div>
        <div className="downloads-grid">
          {downloads.map((item, i) => (
            <a key={i} className="download-card reveal" href="#">
              <div className={`download-icon ${item.color || ''}`}>{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
