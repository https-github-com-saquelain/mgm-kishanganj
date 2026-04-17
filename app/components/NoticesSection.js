const notices = [
  { date: '2025-10-29', title: 'MGMMC Anti-Ragging Committee Notice', tag: 'Important', tagClass: 'tag-urgent' },
  { date: '2024-03-25', title: 'Weekly Class Schedule (32nd Batch) — 25.03.2024 to 06.04.2024' },
  { date: '2023-04-10', title: 'Anti-Ragging Monitoring Cell Notice', tag: 'Important', tagClass: 'tag-urgent' },
  { date: '2022-01-17', title: 'Notice UGMAC Academic Session 2021-22' },
  { date: '2022-01-13', title: 'Notice PGMAC Academic Session 2021-22' },
  { date: '2020-11-09', title: 'Notification of MBBS Admission Session 2020-21' },
  { date: '2020-08-13', title: 'Beware of Fake Personnel Regarding Admission in Medical Courses', tag: 'Warning', tagClass: 'tag-urgent' },
]

const results = [
  { date: '2026-01-02', title: 'Result of 1st Professional M.B.B.S. Examination 2025 (I)', tag: 'UG Result' },
  { date: '2025-12-18', title: 'Result of Postgraduate MD-MS Degree Examination 2025 (I)', tag: 'PG Result' },
  { date: '2025-10-29', title: 'Result of 2nd Professional M.B.B.S. Examination 2025 (I) Batch-II', tag: 'UG Result' },
  { date: '2025-06-17', title: 'Result of 2nd Professional M.B.B.S Examination 2025 (II)', tag: 'UG Result' },
  { date: '2025-06-17', title: 'Result of Postgraduate MD-MS Degree Examination 2024 (II)', tag: 'PG Result' },
  { date: '2025-06-16', title: 'Result of 3rd Professional MBBS Part-I Examination 2025 (II)', tag: 'UG Result' },
  { date: '2025-06-13', title: 'Result of 3rd Professional M.B.B.S. Part-II Examination 2025 (II)', tag: 'UG Result' },
]

export default function NoticesSection() {
  return (
    <section className="notices-section" id="notices">
      <div className="notices-inner">
        <div className="notices-col reveal">
          <h2>Latest Notices</h2>
          {notices.map((notice, i) => (
            <div key={i} className="notice-item">
              <div className="notice-date">{notice.date}</div>
              <div className="notice-title">{notice.title}</div>
              {notice.tag && <span className={`notice-tag ${notice.tagClass}`}>{notice.tag}</span>}
            </div>
          ))}
          <a href="#" className="view-all-btn">View All Notices →</a>
        </div>
        <div className="notices-col reveal" id="results">
          <h2>Examination Results</h2>
          {results.map((result, i) => (
            <div key={i} className="notice-item">
              <div className="notice-date">{result.date}</div>
              <div className="notice-title">{result.title}</div>
              <span className="notice-tag tag-result">{result.tag}</span>
            </div>
          ))}
          <a href="#" className="view-all-btn">View All Results →</a>
        </div>
      </div>
    </section>
  )
}
