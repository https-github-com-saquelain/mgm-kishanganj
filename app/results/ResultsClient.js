'use client'
import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ugResults, pgResults } from '../data/results'

function formatDate(iso) {
  if (!iso) return null
  const d = new Date(iso)
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

function getYear(iso) {
  if (!iso) return 'Undated'
  return iso.slice(0, 4)
}

export default function ResultsClient() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState('ug')
  const [query, setQuery] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (searchParams.get('tab') === 'pg') setTab('pg')
  }, [])

  useEffect(() => {
    if (!mounted) return
    const url = tab === 'pg' ? '/results?tab=pg' : '/results'
    window.history.replaceState({}, '', url)
    setQuery('')
  }, [tab, mounted])

  const source = tab === 'ug' ? ugResults : pgResults

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return source
    return source.filter(r => r.title.toLowerCase().includes(q))
  }, [source, query])

  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach(r => {
      const yr = getYear(r.date)
      if (!map[yr]) map[yr] = []
      map[yr].push(r)
    })
    return Object.entries(map).sort(([a], [b]) => {
      if (a === 'Undated') return 1
      if (b === 'Undated') return -1
      return Number(b) - Number(a)
    })
  }, [filtered])

  return (
    <div className="results-page">

      {/* Hero */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>Academics</div>
          <h1>Examination Results</h1>
          <p>UG &amp; PG examination results — Mata Gujri Memorial Medical College</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="results-tabs-bar">
        <div className="results-tabs-inner">
          <div className="results-tabs" role="tablist">
            <button
              className={`results-tab ${tab === 'ug' ? 'active' : ''}`}
              onClick={() => setTab('ug')}
              role="tab" aria-selected={tab === 'ug'}
            >
              <span className="results-tab-main">Undergraduate</span>
              <span className="results-tab-sub">{ugResults.length} results</span>
            </button>
            <button
              className={`results-tab ${tab === 'pg' ? 'active' : ''}`}
              onClick={() => setTab('pg')}
              role="tab" aria-selected={tab === 'pg'}
            >
              <span className="results-tab-main">Postgraduate</span>
              <span className="results-tab-sub">{pgResults.length} results</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="results-search-bar">
        <div className="results-search-inner">
          <div className="results-search-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              className="results-search"
              type="text"
              placeholder="Search results…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button className="results-search-clear" onClick={() => setQuery('')}>×</button>
            )}
          </div>
          <span className="results-count">
            Showing <strong>{filtered.length}</strong> of <strong>{source.length}</strong>
          </span>
        </div>
      </div>

      {/* Results list */}
      <section className="results-content">
        <div className="results-inner">
          {grouped.length === 0 ? (
            <div className="cn-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <h3>No results found</h3>
              <p>Try a different search term.</p>
              <button onClick={() => setQuery('')}>Clear search</button>
            </div>
          ) : (
            grouped.map(([year, items]) => (
              <div key={year} className="cn-year-group">
                <div className="cn-year-label">{year}</div>
                <div className="cn-list">
                  {items.map(r => (
                    <a
                      key={r.id}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cn-item"
                    >
                      <div className="cn-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                          <path d="M14 2v6h6"/><path d="M9 15h6M9 11h6"/>
                        </svg>
                      </div>
                      <div className="cn-item-meta">
                        <span
                          className="cn-item-tag"
                          style={tab === 'ug'
                            ? { background: '#dbeafe', color: '#1e40af' }
                            : { background: '#d1fae5', color: '#065f46' }
                          }
                        >
                          {tab === 'ug' ? 'UG Result' : 'PG Result'}
                        </span>
                        <span className="cn-item-title">{r.title}</span>
                      </div>
                      <div className="cn-item-right">
                        {r.date && <span className="cn-item-date">{formatDate(r.date)}</span>}
                        <svg className="cn-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <path d="M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

    </div>
  )
}