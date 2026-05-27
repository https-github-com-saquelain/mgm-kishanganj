import { departments } from '../data/departments'

export default function DepartmentsSection() {
  return (
    <section className="departments-section" id="departments">
      <div className="departments-inner">
        <div className="departments-header reveal">
          <div className="section-label">Academics</div>
          <h2 className="section-title">Departments &amp; Programmes</h2>
          <p style={{ maxWidth: '600px', margin: '12px auto 0', color: 'var(--gray-500)', fontSize: '16px', lineHeight: '1.6' }}>
            Offering comprehensive undergraduate and postgraduate medical education across 17 specialized departments.
          </p>
        </div>
        <div className="departments-grid">
          {departments.map((dept) => (
            <a key={dept.slug} href={`/departments/${dept.slug}`} className="dept-card reveal">
              <h3>{dept.name}</h3>
              <p>{dept.shortDesc}</p>
              <span className="dept-arrow">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}