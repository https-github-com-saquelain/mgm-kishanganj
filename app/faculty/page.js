'use client'
import { useState, useEffect, useMemo, useRef } from 'react'
import { fetchAllFacultyWithMembers } from '../utils/api'

const isHOD = (role) => /h\.?o\.?d\.?/i.test(role || '')

export default function FacultyPage() {
  const [tab, setTab] = useState('teaching')
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('all')
  const [mounted, setMounted] = useState(false)
  const stickyRef = useRef(null)

  const [teachingFaculty, setTeachingFaculty] = useState([])
  const [nonTeachingStaff, setNonTeachingStaff] = useState([])
  const [loading, setLoading] = useState(true)

  // Single request: all departments with members already nested
  useEffect(() => {
    fetchAllFacultyWithMembers()
      .then((departments) => {
        const safe = departments.map((d) => ({ ...d, members: d.members || [] }))
        setTeachingFaculty(safe.filter((d) => d.category === 'teaching'))
        setNonTeachingStaff(safe.filter((d) => d.category === 'non-teaching'))
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  // Read tab from URL query param on mount, update URL on change
  useEffect(() => {
    setMounted(true)
    const params = new URLSearchParams(window.location.search)
    const t = params.get('tab')
    if (t === 'non-teaching') setTab('non-teaching')
  }, [])

  useEffect(() => {
    if (!mounted) return
    const params = new URLSearchParams(window.location.search)
    if (tab === 'non-teaching') params.set('tab', 'non-teaching')
    else params.delete('tab')
    const newUrl = params.toString()
      ? `${window.location.pathname}?${params}`
      : window.location.pathname
    window.history.replaceState({}, '', newUrl)
  }, [tab, mounted])

  // Reset dept filter when tab switches
  useEffect(() => {
    setDept('all')
    setQuery('')
  }, [tab])

  const source = tab === 'teaching' ? teachingFaculty : nonTeachingStaff

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return source
      .filter((d) => dept === 'all' || d.name === dept)
      .map((d) => ({
        ...d,
        members: q
          ? d.members.filter(
              (m) =>
                m.name.toLowerCase().includes(q) ||
                m.role.toLowerCase().includes(q) ||
                d.name.toLowerCase().includes(q)
            )
          : d.members,
      }))
      .filter((d) => d.members.length > 0)
  }, [source, query, dept])

  const totals = useMemo(() => {
    const all = source.reduce((s, d) => s + d.members.length, 0)
    const shown = filtered.reduce((s, d) => s + d.members.length, 0)
    return { all, shown, deptCount: source.length }
  }, [source, filtered])

  useEffect(() => {
    const els = document.querySelectorAll('.faculty-page .reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  if (loading) {
    return (
      <div className="faculty-page">
        <div className="page-hero">
          <img src="/campus-2.jpeg" alt="MGM Campus" />
          <div className="page-hero-overlay"></div>
          <div className="page-hero-content">
            <div className="section-label" style={{ color: 'var(--gold-light)' }}>Our People</div>
            <h1>Faculty &amp; Staff Directory</h1>
            <p>&ldquo;Service to Man is Service to God&rdquo;</p>
          </div>
        </div>
        <section className="faculty-content">
          <div className="faculty-inner">
            <p className="text-sm text-gray-500">Loading directory...</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="faculty-page">
      {/* Hero Banner */}
      <div className="page-hero">
        <img src="/campus-2.jpeg" alt="MGM Campus" />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="section-label" style={{ color: 'var(--gold-light)' }}>
            Our People
          </div>
          <h1>Faculty &amp; Staff Directory</h1>
          <p>&ldquo;Service to Man is Service to God&rdquo;</p>
        </div>
      </div>

      {/* Sticky Controls Bar */}
      <div className="faculty-controls" ref={stickyRef}>
        <div className="faculty-controls-inner">
          <div className="faculty-tabs" role="tablist">
            <button
              className={`faculty-tab ${tab === 'teaching' ? 'active' : ''}`}
              onClick={() => setTab('teaching')}
              role="tab"
              aria-selected={tab === 'teaching'}
            >
              Teaching Faculty
              <span className="faculty-tab-count">{teachingFaculty.reduce((s, d) => s + d.members.length, 0)}</span>
            </button>
            <button
              className={`faculty-tab ${tab === 'non-teaching' ? 'active' : ''}`}
              onClick={() => setTab('non-teaching')}
              role="tab"
              aria-selected={tab === 'non-teaching'}
            >
              Non-Teaching Staff
              <span className="faculty-tab-count">{nonTeachingStaff.reduce((s, d) => s + d.members.length, 0)}</span>
            </button>
          </div>

          <div className="faculty-filters">
            <div className="faculty-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder={`Search by name or role…`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search faculty"
              />
              {query && (
                <button className="faculty-search-clear" onClick={() => setQuery('')} aria-label="Clear search">
                  ✕
                </button>
              )}
            </div>
            <select
              className="faculty-dept-select"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              aria-label="Filter by department"
            >
              <option value="all">
                All {tab === 'teaching' ? 'Departments' : 'Categories'} ({source.length})
              </option>
              {source.map((d) => (
                <option key={d._id} value={d.name}>
                  {d.name} ({d.members.length})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="faculty-summary">
          <div className="faculty-summary-inner">
            {query || dept !== 'all' ? (
              <>
                Showing <strong>{totals.shown}</strong> of <strong>{totals.all}</strong>
                {' '}{tab === 'teaching' ? 'faculty members' : 'staff members'}
                {query && <> matching &ldquo;<em>{query}</em>&rdquo;</>}
              </>
            ) : (
              <>
                <strong>{totals.all}</strong> {tab === 'teaching' ? 'faculty members' : 'staff members'} across <strong>{totals.deptCount}</strong> {tab === 'teaching' ? 'departments' : 'categories'}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <section className="faculty-content">
        <div className="faculty-inner">
          {filtered.length === 0 ? (
            <div className="faculty-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <h3>No matches found</h3>
              <p>
                No {tab === 'teaching' ? 'faculty members' : 'staff'} match your search.
                {' '}
                <button onClick={() => { setQuery(''); setDept('all') }}>Clear filters</button>
              </p>
            </div>
          ) : (
            <div className="faculty-grid">
              {filtered.map((d) => (
                <article key={d._id} className="faculty-card reveal">
                  <header className="faculty-card-header">
                    {tab === 'teaching' && d.fileUrl ? (
                      <a
                        href={d.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="faculty-card-pdf-link"
                        title={`Open ${d.name} faculty list PDF`}
                      >
                        {d.name}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                        </svg>
                      </a>
                    ) : (
                      <h3>{d.name}</h3>
                    )}
                    <span className="faculty-card-count">{d.members.length}</span>
                  </header>
                  <ol className="faculty-list">
                    {d.members.map((m, i) => {
                      const hod = isHOD(m.role)
                      return (
                        <li key={i} className={hod ? 'is-hod' : ''}>
                          <span className="faculty-idx">{i + 1}.</span>
                          <span className="faculty-body">
                            <span className="faculty-name">
                              {m.name}
                              {hod && <span className="hod-badge">HOD</span>}
                            </span>
                            {m.role && <span className="faculty-role">{m.role}</span>}
                          </span>
                        </li>
                      )
                    })}
                  </ol>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}