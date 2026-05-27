// ============================================================
// DEPARTMENTS DATA
// ------------------------------------------------------------
// Each department has:
//   slug       — URL-safe identifier → /departments/[slug]
//   name       — Display name
//   shortDesc  — One-liner used on homepage cards
//   category   — 'pre-clinical' | 'para-clinical' | 'clinical'
//   content    — Array of sections: { heading, body (string | string[]) }
//               body as string[] renders as bullet list
//               body as string renders as paragraph(s) — use \n\n to split
// ============================================================

export const departments = [
  // ── PRE-CLINICAL ──────────────────────────────────────────
  {
    slug: 'anatomy',
    name: 'Anatomy',
    shortDesc: 'Foundation of medical education through structural study of the human body.',
    category: 'pre-clinical',
    content: [
      {
        heading: 'About the Department',
        body: 'The Department of Anatomy, of Mata Gujri Memorial Medical College & LSK Hospital, is one of the foundational departments. The department is serving as the solid base for the students of Medical sciences. The department was established along with the establishment of the college in 1990, and in January 1991, the college and Hospital were inaugurated.\n\nThe MBBS course was started in 1991 with 60 students. In 2026 the number of MBBS students increased to 150.\n\nAt present, the department comprises experienced faculty members engaged in teaching, research and clinical anatomy. The curriculum encompasses the core disciplines of Gross Anatomy, Histology, Embryology, Neuro-anatomy, and Radiological anatomy delivered through modern competency based teaching methodology.',
      },
      {
        heading: 'Infrastructure & Facilities',
        body: 'The department houses a spacious well equipped, air-conditioned dissection hall and an embalming room, one virtual Dissection Table (CADAVIZ) in the skill Lab, a Histology Laboratory with more than 50 binocular microscopes and 70 monocular microscopes, a Museum equipped with preserved specimens and models of Gross anatomy and Embryology and a departmental library with more than 350 books. There are two demonstrations rooms accommodating more than 75 students each, which are well equipped with smart boards and LCD projectors.',
      },
      {
        heading: 'Academic Integration & Research',
        body: 'Beyond classroom instruction, the department actively fosters horizontal and vertical integration with various clinical departments, ensuring students appreciate the direct anatomical clinical practice. Faculty members are engaged in ongoing research and regularly participate in national and international conferences, workshops and CMEs. We take pride in mentoring students at every stage preparing them to meet the highest standards set by the National Medical Commission (NMC).\n\nOur commitment extends beyond teaching: we strive to cultivate critical thinking, scientific curiosity and professional excellence in every student who passes through our doors.',
      },
      {
        heading: 'Services Provided',
        body: [
          'Undergraduate anatomy education for first year MBBS students (Gross anatomy, Histology, Embryology, Neuroanatomy).',
          'Postgraduate MD/MS Anatomy training and research guidance.',
          'Undergraduate anatomy for first semester BSC Nursing students.',
          'Cadaveric dissection and practical demonstration sessions.',
          'Histology practical classes with microscopy and slide interpretation.',
          'Preparation of routine histological slides in the departmental research laboratory.',
          'Radiological anatomy teaching using X-rays, CT scans and MRIs.',
          'Surface and living anatomy demonstrations.',
          'Anatomy museum access for specimen (both dry and wet) based learning.',
          'Preparation of museum specimens for demonstration and teaching.',
          '3D virtual dissection classes through advanced virtual dissection table — CADAVIZ.',
          'Interdepartmental integration sessions through seminars, workshops and CMEs.',
          'Cadaveric workshops for faculty members and PG students of various surgical departments.',
          'Embalming of cadavers for transportation and storage facility in mortuary chambers.',
          'Academic counseling and mentorship for students.',
          'Faculty-led research in Gross anatomy, Neuroanatomy and Histology.',
        ],
      },
    ],
  },
  {
    slug: 'physiology',
    name: 'Physiology',
    shortDesc: 'Understanding the mechanical, physical and biochemical functions of the human body.',
    category: 'pre-clinical',
    content: null,
  },
  {
    slug: 'biochemistry',
    name: 'Biochemistry',
    shortDesc: 'Chemical processes and substances occurring within living organisms.',
    category: 'pre-clinical',
    content: [
      {
        heading: 'Vision',
        body: 'To establish a Centre of Excellence in Clinical Biochemistry committed to delivering precise diagnostic services, fostering evidence-based medical education, and advancing translational research at the interface of biochemistry and clinical medicine.',
      },
      {
        heading: 'Mission',
        body: [
          'Provide accurate and timely biochemical diagnosis in support of patient care across all clinical specialties.',
          'Deliver comprehensive undergraduate and postgraduate education aligned with contemporary medical curricula.',
          'Promote incorporation of emerging technologies, including Artificial Intelligence, in laboratory medicine practice.',
        ],
      },
      {
        heading: 'Services',
        body: 'The Department provides round-the-clock diagnostic services across the following sections: Clinical Chemistry and Immunoassay — encompassing Endocrinology and Tumour Markers. Coagulation testing is also offered as part of the department\'s integrated diagnostic portfolio. The Department actively participates in Internal Quality Control (IQC) and External Quality Assessment (EQA) programs through Bio-Rad, ensuring consistent adherence to national and international quality benchmarks.',
      },
      {
        heading: 'Academic Activities',
        body: [
          'Undergraduate (MBBS) teaching and training as per CBME curriculum, with round-the-year structured academic activities.',
          'Conduct of Class Assistantship Examinations annually to assess and reinforce student competency.',
          'Postgraduate (MD Biochemistry) education and mentorship as per guidelines prescribed by the National Medical Commission (NMC).',
          'Continuing Medical Education (CME) activities, seminars, academic discussions, and journal club meetings.',
        ],
      },
      {
        heading: 'Infrastructure & Equipment',
        body: [
          'Quidel Ortho VITROS 5600 Integrated System — Fully automated platform for integrated clinical chemistry and immunoassay testing.',
          'Quidel Ortho VITROS 4600 and 3600 Systems — Automated clinical chemistry and immunoassay analyzers.',
          'TOSOH AIA Series — Dedicated automated immunoassay analyzer for endocrinology and tumour marker estimation.',
          'Bio-Rad D-10 — Automated HPLC-based system for haemoglobin variant analysis and diabetes screening.',
          'Werfen ACL Elite — Automated coagulation analyzer for comprehensive haemostasis testing.',
        ],
      },
      {
        heading: 'Research',
        body: [
          'Special focus on metabolic disorders, with ongoing investigative work in diabetes, dyslipidaemia, and related conditions.',
          'Active interest in the incorporation of Artificial Intelligence and data-driven technologies in laboratory medicine systems.',
          'Encouragement of interdisciplinary and collaborative research across clinical departments.',
          'Emphasis on scientific publications, evidence-based practice, and student-driven research initiatives.',
        ],
      },
    ],
  },

  // ── PARA-CLINICAL ─────────────────────────────────────────
  {
    slug: 'pathology',
    name: 'Pathology',
    shortDesc: 'Study and diagnosis of disease through examination of tissues, organs and body fluids.',
    category: 'para-clinical',
    content: [
      {
        heading: 'Vision',
        body: 'To build a department where science meets compassion — delivering accurate diagnoses, inspiring young minds, and continuously advancing in the understanding of disease for better patient care.',
      },
      {
        heading: 'Mission',
        body: [
          'Provide accurate and timely diagnosis that clinicians can rely on.',
          'Strengthen the bridge between laboratory findings and clinical care.',
          'Encourage ethical, evidence-based medical practice.',
          'Create an environment that supports learning, curiosity, and innovation.',
          'Train future pathologists to be both skilled and compassionate professionals.',
        ],
      },
      {
        heading: 'Services',
        body: 'The department offers comprehensive diagnostic and transfusion services. It includes Histopathology for tissue diagnosis, Cytopathology with FNAC and Liquid-Based Cytology (LBC) for cervical screening, and Hematology services covering routine investigations, peripheral smear examination, participation in EQAS, and Bone Marrow Aspiration/Biopsy for detailed evaluation of hematological disorders. Advanced diagnostics are supported through Immunohistochemistry (IHC) for precise disease classification.\n\nThe department also runs a well-equipped Blood Bank and Transfusion Service, ensuring safe and efficient practices through gel card-based blood grouping and crossmatching, component separation (PRBC and plasma), Transfusion Transmitted Infection (TTI) screening, and safe storage and issue of blood with strict quality control.',
      },
      {
        heading: 'Academic Approach',
        body: [
          'MBBS teaching aligned with CBME, focusing on real-life application of concepts.',
          'MD Pathology training with close mentorship and hands-on experience.',
          'Strong emphasis on clinicopathological correlation — understanding the "why" behind every finding.',
          'Role play sessions that simulate clinical situations and decision-making.',
          'Student seminars that build confidence and deepen understanding.',
          'Poster presentations and quiz activities that make revision interactive and fun.',
          'Integrated teaching connecting pathology with clinical subjects.',
          'Deca-head microscope for shared learning experience.',
          'Digital microscopy with tablet integration.',
          'Smart classrooms for better visualization and interaction.',
        ],
      },
      {
        heading: 'Infrastructure & Technology',
        body: [
          'HPLC for haemoglobin analysis.',
          'Automated haematology analyzers (5-part and 7-part cell counters).',
          'IHC facility for advanced diagnostic precision.',
          'LBC system for improved cervical cancer screening.',
        ],
      },
      {
        heading: 'Research',
        body: [
          'Active research in haematology, oncopathology, and diagnostic advancements.',
          'Participation of both undergraduate and postgraduate students.',
          'Collaboration across departments for meaningful, real-world research.',
          'Focus on publishing quality work and practising evidence-based medicine.',
        ],
      },
    ],
  },
  {
    slug: 'microbiology',
    name: 'Microbiology',
    shortDesc: 'Study of microorganisms and their role in health and disease.',
    category: 'para-clinical',
    content: [
      {
        heading: 'Vision',
        body: 'To establish a state-of-the-art Department of Clinical Microbiology committed to developing highly competent clinical microbiologists capable of integrating laboratory diagnostics with management of infectious diseases.',
      },
      {
        heading: 'Mission',
        body: [
          'Provide expert diagnosis of various infectious diseases.',
          'Strengthen and implement effective infection prevention and control programmes.',
          'Promote rational antimicrobial usage through evidence-based practices.',
        ],
      },
      {
        heading: 'Services',
        body: 'The Department offers comprehensive diagnostic and clinical services across the following disciplines: Bacteriology, Mycobacteriology, Serology, Immunology, Parasitology, Mycology and Molecular Microbiology. The Department also participates in the EQAS program by IAMM (Indian Association of Medical Microbiologist) for quality improvement, and actively takes part in Hospital Infection Control (HIC) practices and Antimicrobial Stewardship programs.',
      },
      {
        heading: 'Academic Activities',
        body: [
          'Undergraduate (MBBS) teaching and training as per CBME curriculum with advanced technology.',
          'Postgraduate (MD Microbiology) education and mentorship as per new guidelines by NMC.',
          'Structured practical training with emphasis on clinico-microbiological correlation.',
          'Continuing Medical Education (CME) activities, academic discussions, seminars and journal club.',
        ],
      },
      {
        heading: 'Infrastructure & Equipment',
        body: [
          'BD BACTEC FX 40 — Automated blood culture system.',
          'VITEK 2 Compact System — Automated microbial identification (bacteria and yeast) and antimicrobial susceptibility testing.',
          'Autolumo A2000 Plus (ECLIA) — Immunoassay analyzer.',
          'QuantStudio Dx — Real-time PCR system for molecular diagnostics.',
        ],
      },
      {
        heading: 'Research',
        body: [
          'Ongoing research projects in infectious diseases, antimicrobial resistance, diagnostic innovations and artificial intelligence.',
          'Encouragement of interdisciplinary and collaborative research.',
          'Emphasis on scientific publications and evidence-based practice.',
        ],
      },
    ],
  },
  {
    slug: 'pharmacology',
    name: 'Pharmacology',
    shortDesc: 'Study of drugs, their mechanisms, uses and adverse effects.',
    category: 'para-clinical',
    content: [
      {
        heading: 'About the Department',
        body: 'The Department of Pharmacology at Mata Gujri Memorial Medical College, Kishanganj, Bihar, is dedicated to excellence in medical education, clinical research, and pharmacovigilance. The MD (Pharmacology) program, established in 2011, offers a well-structured academic training aligned with contemporary standards.\n\nThe department provides high-quality CBME-based education to undergraduate and postgraduate students, with emphasis on rational therapeutics, drug safety, research methodology, and evidence-based medicine.',
      },
      {
        heading: 'Message from the Head of Department',
        body: '"Welcome to the Department of Pharmacology. We are committed to nurturing competent, ethical, and research-oriented medical graduates with strong foundations in rational therapeutics and patient safety.\n\nThrough NMC-CBME-based education, active pharmacovigilance, and innovative teaching-learning practices, we strive to advance clinical excellence and contribute meaningfully to national healthcare and drug safety initiatives. I warmly invite you to be part of our academic journey."',
      },
      {
        heading: 'Pharmacovigilance Committee',
        body: 'In accordance with regulatory requirements for teaching medical institutions, the department maintains an active Pharmacovigilance Committee. The committee meets periodically to review activities and provide recommendations for strengthening drug safety initiatives.',
      },
      {
        heading: 'Prescription Audit & Medication Error Monitoring',
        body: 'The department is actively engaged in prescription auditing and continuous medication error monitoring to promote rational drug use and enhance patient safety.',
      },
    ],
  },
  {
    slug: 'forensic-medicine',
    name: 'Forensic Medicine & Toxicology',
    shortDesc: 'Application of medical knowledge to legal investigation and proceedings.',
    category: 'para-clinical',
    content: [
      {
        heading: 'About the Department',
        body: 'The Department of Forensic Medicine & Toxicology at Mata Gujri Memorial Medical College & LSK Hospital, Kishanganj, is the primary center for the application of medical science to legal inquiry.\n\nEstablished in 1990, the department has served as a repository of medicolegal knowledge and expertise, utilizing its vast armamentarium to train medical students in the disciplines of forensic pathology, medical jurisprudence and toxicology.',
      },
      {
        heading: 'Mission',
        body: 'The Department aims to uphold the highest standards in medical education and research through an organized academic environment where medical students master forensics.\n\nWe strive to develop in every scholar a disciplined faculty of observation and an uncompromising commitment to medical law & ethics.\n\nOur ultimate goal is to ensure that the future practitioner is prepared not only to heal the living but to serve as an impartial witness to truth in the service of the law.',
      },
      {
        heading: 'Forensic Museum',
        body: [
          'Osteology & Skeletal Remains — A comprehensive collection of both loose and articulated skeletons for the study of human identification, age estimation, and sex determination.',
          'Wet Pathology Collection — A vast repository of preserved organ specimens demonstrating a wide spectrum of mechanical injuries and the visceral effects of poisons.',
          'Weaponry & Ballistics — A categorized display of firearms and weapons utilized to illustrate wound morphology and the physics of trauma.',
          'Anthropometric Tools — A specialized suite of precision instruments, including osteometric boards and calipers, dedicated to the scientific measurement of the human frame for medico-legal identification.',
          'Poisonous Substances & Agents — A gallery of toxicological agents, ranging from common household and industrial chemicals to regional poisonous plants and venoms, illustrating the diversity of substances encountered in forensic practice.',
        ],
      },
      {
        heading: 'Demonstration Room',
        body: [
          'Smart-Screen Technology — High-definition interactive displays for projection of autopsy footage, histological slides, and legal presentations.',
          'Integrated Audio System — Professional sound system ensuring clear communication during large-group demonstrations and guest lectures.',
          'Climate-Controlled Environment — Fully air-conditioned atmosphere for prolonged academic sessions and preservation of digital hardware.',
          'High-Speed Connectivity — Dedicated internet access to facilitate real-time forensic databases and case-study simulations.',
        ],
      },
      {
        heading: 'Forensic Medicine Student Laboratory',
        body: [
          'Radiological Interpretation — Analysis of X-rays and imaging for age estimation and injury patterns.',
          'Microscopy & Histopathology — Stations equipped for detailed study of serology and histological slides.',
          'Anthropometric Experiments — Workspace utilized for identification of human remains using specialized instruments.',
          'Preparation Room & Store — Auxiliary space for curation of teaching materials, reagent preparation, and secure storage of laboratory equipment.',
        ],
      },
      {
        heading: 'Departmental Library & Research Room',
        body: [
          'Books — Collection of over 150 volumes covering medical and forensic sciences.',
          'Autopsy Simulation Section — Facility for autopsy simulations and virtual dissections.',
        ],
      },
      {
        heading: 'Services Offered',
        body: [
          'Teaching for Medical, Nursing and allied health professional students.',
          'Student research guidance and mentorship.',
        ],
      },
      {
        heading: 'Vision & Future Goals',
        body: 'The vision of the department is to evolve into a center for forensic excellence, bridging the gap between academic theory and medico-legal practice.\n\nFuture goals include securing legal & administrative permissions for medicolegal work, establishing a Clinical Forensic Medicine Unit (CFMU) for examination and documentation of medicolegal cases in living individuals, developing fully equipped autopsy services, and setting up a Poison Control Center providing 24/7 toxicological information and clinical care.',
      },
    ],
  },
  {
    slug: 'community-medicine',
    name: 'Community Medicine',
    shortDesc: 'Preventive and social medicine serving the broader community health needs.',
    category: 'para-clinical',
    content: [
      {
        heading: 'About the Department',
        body: 'The Department of Community Medicine at Mata Gujri Memorial Medical College and LSK Hospital, Kishanganj, is actively involved in undergraduate and postgraduate teaching, service delivery, and community-based research and outreach activities. The department provides competency-based undergraduate training for 150 MBBS students per year as per the CBME curriculum through lectures, tutorials, and field-based learning.',
      },
      {
        heading: 'Undergraduate Training',
        body: 'A Family Adoption Programme is implemented in accordance with NMC guidelines, where each student adopts three families and conducts regular follow-up visits to understand community health needs.',
      },
      {
        heading: 'Postgraduate Training',
        body: 'The department offers postgraduate training with two seats per year, involving regular seminars, journal presentations, and participation in local, national, and international conferences by residents and faculty. Postgraduate students are posted at the Rural Health Training Centre (RHTC), Urban Health Training Centre (UHTC), and Immunization Clinics, and actively conduct health education programs focusing on national health priorities such as Dengue, Malaria, and Encephalitis. National Health Days are observed regularly both in the department and at field practice areas.',
      },
      {
        heading: 'Rural Health Training Centre (RHTC)',
        body: 'The Rural Health Training Centre at Maheshbathna caters to a population of approximately 80,000 and is located 8 km from the college, with 10–15 interns posted per batch. It provides residential, mess, and transport facilities, and manages a daily OPD of 100–120 patients along with specialty services including Obstetrics & Gynecology, Pediatrics, General Medicine, Surgery, Orthopedics, TB & Chest, Psychiatry, Dermatology, Ophthalmology, and ENT.',
      },
      {
        heading: 'Urban Health Training Centre (UHTC)',
        body: 'The Urban Health Training Centre at Dharamganj serves a population of around 20,000, located 2 km from the college, with similar facilities and a daily OPD of 90–100 patients.',
      },
      {
        heading: 'Immunization Clinic',
        body: 'The department also runs an Immunization Clinic where vaccines are administered under strict aseptic conditions to children and vulnerable groups, maintaining optimal cold chain procedures.',
      },
    ],
  },

  // ── CLINICAL ──────────────────────────────────────────────
  {
    slug: 'general-medicine',
    name: 'General Medicine',
    shortDesc: 'Diagnosis and non-surgical treatment of diseases across all body systems.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    shortDesc: 'Surgical treatment focusing on abdominal organs, trauma and critical care.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    shortDesc: "Comprehensive maternal, reproductive and women's healthcare services.",
    category: 'clinical',
    content: null,
  },
  {
    slug: 'paediatrics',
    name: 'Paediatrics',
    shortDesc: 'Specialized care for infants, children and adolescents with NICU and PICU.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    shortDesc: 'Diagnosis and treatment of musculoskeletal system disorders and injuries.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    shortDesc: 'Complete eye care including surgery and management of visual disorders.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'ent',
    name: 'ENT',
    shortDesc: 'Treatment of ear, nose and throat disorders with modern diagnostic facilities.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    shortDesc: 'Diagnosis and management of skin, hair and nail conditions.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'anaesthesiology',
    name: 'Anaesthesiology',
    shortDesc: 'Anaesthesia services, pain management and critical care medicine.',
    category: 'clinical',
    content: null,
  },
  {
    slug: 'radio-diagnosis',
    name: 'Radio-Diagnosis',
    shortDesc: 'State-of-the-art MRI, CT Scanner, Colour Doppler and advanced imaging.',
    category: 'clinical',
    content: null,
  },
]

// Helper: get a single department by slug
export function getDepartment(slug) {
  return departments.find((d) => d.slug === slug) || null
}

// Category labels for display
export const categoryLabels = {
  'pre-clinical': 'Pre-Clinical',
  'para-clinical': 'Para-Clinical',
  'clinical': 'Clinical',
}