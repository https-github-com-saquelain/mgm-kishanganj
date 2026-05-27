'use client'
import { useState, useMemo } from 'react'
import { staticNotices, tagLabels, tagColors } from '../data/notices'

function formatDate(iso) {
  if (!iso) return null
  const d = new Date(iso)
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

function getYear(iso) {
  if (!iso) return 'Undated'
  return iso.slice(0, 4)
}

export default function ClassNoticesClient() {
  const [query, setQuery]   = useState('')
  const [activeTag, setTag] = useState('all')

  // In future: merge with dynamic notices fetched from admin panel API
  const allNotices = staticNotices

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allNotices.filter(n => {
      const matchTag = activeTag === 'all' || n.tag === activeTag
      const matchQ   = !q || n.title.toLowerCase().includes(q)
      return matchTag && matchQ
    })
  }, [allNotices, query, activeTag])

  // Group by year, newest first
  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach(n => {
      const yr = getYear(n.date)
      if (!map[yr]) map[yr] = []
      map[yr].push(n)
    })
    return Object.entries(map).sort(([a], [b]) => {
      if (a === 'Undated') return 1
      if (b === 'Undated') return -1
      return Number(b) - Number(a)
    })
  }, [filtered])

  const tags = Object.keys(tagLabels)

  return (
    <div className="notices-page">

      {/* Hero */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Academics</div>
          <h1>Class Notices</h1>
          <p>Weekly schedules, examination notices &amp; academic circulars</p>
        </div>
      </div>

      {/* Controls bar */}
      <div className="cn-controls">
        <div className="cn-controls-inner">
          {/* Search */}
          <div className="cn-search-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              className="cn-search"
              type="text"
              placeholder="Search notices…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button className="cn-search-clear" onClick={() => setQuery('')}>×</button>
            )}
          </div>

          {/* Tag filters */}
          <div className="cn-tags">
            {tags.map(t => (
              <button
                key={t}
                className={`cn-tag-btn ${activeTag === t ? 'active' : ''}`}
                onClick={() => setTag(t)}
              >
                {tagLabels[t]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="cn-summary">
        <div className="cn-summary-inner">
          <span>
            Showing <strong>{filtered.length}</strong> of <strong>{allNotices.length}</strong> notices
            {query && <> matching &ldquo;<em>{query}</em>&rdquo;</>}
          </span>
        </div>
      </div>

      {/* Results */}
      <section className="cn-content">
        <div className="cn-inner">
          {grouped.length === 0 ? (
            <div className="cn-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <h3>No notices found</h3>
              <p>Try a different search term or filter.</p>
              <button onClick={() => { setQuery(''); setTag('all') }}>Clear filters</button>
            </div>
          ) : (
            grouped.map(([year, notices]) => (
              <div key={year} className="cn-year-group">
                <div className="cn-year-label">{year}</div>
                <div className="cn-list">
                  {notices.map(n => {
                    const c = tagColors[n.tag] || tagColors.general
                    return (
                      <a
                        key={n.id}
                        href={n.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cn-item"
                      >
                        {/* PDF icon */}
                        <div className="cn-item-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                            <path d="M14 2v6h6"/><path d="M9 15h6M9 11h6"/>
                          </svg>
                        </div>

                        {/* Meta */}
                        <div className="cn-item-meta">
                          <span
                            className="cn-item-tag"
                            style={{ background: c.bg, color: c.text }}
                          >
                            {tagLabels[n.tag]}
                          </span>
                          <span className="cn-item-title">{n.title}</span>
                        </div>

                        {/* Date + open */}
                        <div className="cn-item-right">
                          {n.date && (
                            <span className="cn-item-date">{formatDate(n.date)}</span>
                          )}
                          <svg className="cn-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                            <path d="M15 3h6v6M10 14L21 3"/>
                          </svg>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

    </div>
  )
}