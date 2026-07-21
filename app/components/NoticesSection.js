'use client'
import { useState, useEffect } from 'react'
import { fetchNotices } from '../utils/api'

const RESULT_TAG_LABELS = { ug: 'UG Result', pg: 'PG Result' }

export default function NoticesSection() {
  const [notices, setNotices] = useState([])
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([fetchNotices('class-notice'), fetchNotices('result')])
      .then(([noticesData, resultsData]) => {
        setNotices(noticesData.slice(0, 5))
        setResults(resultsData.slice(0, 5))
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="notices-section" id="notices">
      <div className="notices-inner">
        <div className="notices-col reveal">
          <h2>Latest Notices</h2>
          {notices.map((notice, i) => {
            const content = (
              <>
                <div className="notice-date">{notice.date}</div>
                <div className="notice-title">{notice.title}</div>
                {notice.tag && <span className="notice-tag tag-urgent">{notice.tag}</span>}
              </>
            )

            return notice.fileUrl ? (
              <a
                key={notice._id ?? i}
                href={notice.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="notice-item"
              >
                {content}
              </a>
            ) : (
              <div key={notice._id ?? i} className="notice-item">
                {content}
              </div>
            )
          })}
          <a href="/class-notices" className="view-all-btn">View All Notices →</a>
        </div>
        <div className="notices-col reveal" id="results">
          <h2>Examination Results</h2>
          {results.map((result, i) => {
            const content = (
              <>
                <div className="notice-date">{result.date}</div>
                <div className="notice-title">{result.title}</div>
                <span className="notice-tag tag-result">
                  {RESULT_TAG_LABELS[result.tag] || result.tag}
                </span>
              </>
            )

            return result.fileUrl ? (
              <a
                key={result._id ?? i}
                href={result.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="notice-item"
              >
                {content}
              </a>
            ) : (
              <div key={result._id ?? i} className="notice-item">
                {content}
              </div>
            )
          })}
          <a href="/results" className="view-all-btn">View All Results →</a>
        </div>
      </div>
    </section>
  )
}