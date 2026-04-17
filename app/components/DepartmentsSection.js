const departments = [
  { name: 'Anatomy', desc: 'Foundation of medical education through structural study of the human body.' },
  { name: 'Physiology', desc: 'Understanding the mechanical, physical and biochemical functions of the human body.' },
  { name: 'Biochemistry', desc: 'Chemical processes and substances occurring within living organisms.' },
  { name: 'Pathology', desc: 'Study and diagnosis of disease through examination of tissues, organs and body fluids.' },
  { name: 'Microbiology', desc: 'Study of microorganisms and their role in health and disease.' },
  { name: 'Pharmacology', desc: 'Study of drugs, their mechanisms, uses and adverse effects.' },
  { name: 'General Medicine', desc: 'Diagnosis and non-surgical treatment of diseases across all body systems.' },
  { name: 'General Surgery', desc: 'Surgical treatment focusing on abdominal organs, trauma and critical care.' },
  { name: 'Obstetrics & Gynaecology', desc: "Comprehensive maternal, reproductive and women's healthcare services." },
  { name: 'Paediatrics', desc: 'Specialized care for infants, children and adolescents with NICU and PICU.' },
  { name: 'Orthopaedics', desc: 'Diagnosis and treatment of musculoskeletal system disorders and injuries.' },
  { name: 'Ophthalmology', desc: 'Complete eye care including surgery and management of visual disorders.' },
  { name: 'ENT', desc: 'Treatment of ear, nose and throat disorders with modern diagnostic facilities.' },
  { name: 'Dermatology', desc: 'Diagnosis and management of skin, hair and nail conditions.' },
  { name: 'Anaesthesiology', desc: 'Anaesthesia services, pain management and critical care medicine.' },
  { name: 'Radio-Diagnosis', desc: 'State-of-the-art MRI, CT Scanner, Colour Doppler and advanced imaging.' },
  { name: 'Community Medicine', desc: 'Preventive and social medicine serving the broader community health needs.' },
  { name: 'Forensic Medicine', desc: 'Application of medical knowledge to legal investigation and proceedings.' },
]

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
          {departments.map((dept, i) => (
            <div key={i} className="dept-card reveal">
              <h3>{dept.name}</h3>
              <p>{dept.desc}</p>
              <span className="dept-arrow">Learn more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
