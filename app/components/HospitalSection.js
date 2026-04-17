const features = [
  { num: '610', label: 'Hospital Beds' },
  { num: '24/7', label: 'Emergency Services' },
  { num: 'MRI', label: 'HITACHI Advanced MRI' },
  { num: 'CT', label: 'Spiral CT Scanner' },
  { num: 'NICU', label: 'Neonatal ICU' },
  { num: '6', label: 'Burn Unit Beds' },
  { num: 'Blood', label: 'Fully Equipped Blood Bank' },
  { num: 'PICU', label: 'Paediatric ICU' },
]

export default function HospitalSection() {
  return (
    <section className="hospital-section" id="hospital">
      <div className="hospital-inner">
        <div className="hospital-content reveal">
          <div className="section-label">Healthcare</div>
          <h2 className="section-title">Lions Seva Kendra Hospital</h2>
          <p>A fully functional 610-bed hospital complete with all facilities and advanced technology. Located in an imposing seven-story complex housing various departments and their respective wards, with 24×7 Casualty and Emergency services.</p>
          <div className="hospital-features">
            {features.map((feat, i) => (
              <div key={i} className="hospital-feature">
                <h4>{feat.num}</h4>
                <p>{feat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <img src="/campus-2.jpeg" alt="Hospital Entrance" className="hospital-img" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
