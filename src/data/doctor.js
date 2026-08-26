export const doctor = {
  slug: 'dr-umair-musaddique-majid',
  name: 'Dr. Umair Musaddique Majid',
  title: 'Diabetes Physician & Lifestyle Disease Specialist',
  founderTitle: 'Founder & Lead Physician — Majid Healthcare, Family Health & Diabetes Centre',
  experienceYears: 9,
  registrationNo: '2017/05/1989',
  credentials: [
    { short: 'MBBS', full: 'MBBS — MGM Institute, Navi Mumbai' },
    { short: 'PGDFM', full: 'Post Graduate Diploma in Family Medicine (PGDFM) — CMC Vellore' },
    {
      short: 'Fellowship in Diabetology',
      full: 'Fellowship in Diabetology — Royal Liverpool Academy, UK',
    },
    {
      short: 'CCDIP',
      full: 'CCDIP — Certificate Course in Diabetes (American Diabetes Association)',
    },
    {
      short: 'ACIDC',
      full: 'ACIDC — Advance Certificate in Diabetes Complications',
    },
    {
      short: 'FCPM',
      full: 'FCPM — Certificate Course in Palliative Medicine (TIPS Institute)',
    },
  ],
  bio: [
    'Dr. Umair Musaddique Majid is the founder and lead physician at Majid Healthcare – Family Health & Diabetes Centre, with over 9 years of clinical experience in diabetes management, chronic disease care, and preventive healthcare.',
    'After completing his MBBS from MGM Institute, Navi Mumbai, he pursued a Post Graduate Diploma in Family Medicine from CMC Vellore, gaining a strong foundation in comprehensive patient care. He further developed his expertise in diabetes management through a Fellowship in Diabetology from the Royal Liverpool Academy, UK.',
    'His approach focuses on comprehensive diabetes care that goes beyond blood sugar control—emphasising early detection of complications, personalised treatment strategies, lifestyle modification, and long-term health improvement.',
    'Through Majid Healthcare, Dr. Umair M Majid aims to build a trusted centre for diabetes care, combining clinical expertise with advanced assessment facilities to help patients prevent complications and achieve better outcomes.',
  ],
  focusAreas: [
    'Type 1 & Type 2 Diabetes Management',
    'Diabetes Prevention & Lifestyle Modification',
    'Diabetic Foot Assessment & Complication Screening',
    'Neuropathy & Vascular Risk Assessment',
    'Hypertension, Thyroid & Metabolic Health Management',
    'Obesity & Lifestyle-Related Disorders',
    'Preventive Healthcare & Chronic Disease Management',
  ],
};

export const getDoctor = () => Promise.resolve(doctor);
