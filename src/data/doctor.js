export const doctor = {
  slug: 'dr-umair-musaddique-majid',
  name: 'Dr. Umair Musaddique Majid',
  title: 'Consultant Family Physician & Diabetologist',
  experienceYears: 9,
  registrationNo: '2017/05/1989',
  credentials: [
    { short: 'MBBS', full: 'MBBS — Mumbai University' },
    { short: 'PG Dip. Family Medicine', full: 'PG Diploma in Family Medicine — CMC Vellore' },
    {
      short: 'Fellowship in Diabetology',
      full: 'Fellowship in Diabetology — Royal Liverpool Academy, UK',
    },
    {
      short: 'CCDIP',
      full: 'CCDIP — Certificate Course in Diabetes (American Diabetes Association affiliation)',
    },
  ],
  bio: [
    'Dr. Umair Musaddique Majid is the consultant family physician and diabetologist at Majid Healthcare, with over 9 years of clinical experience treating patients across all ages.',
    'After completing his MBBS in Mumbai, he pursued a PG Diploma in Family Medicine from CMC Vellore — one of India’s most respected medical institutions — before going on to complete a Fellowship in Diabetology from the Royal Liverpool Academy in the UK.',
    'This combination of family medicine grounding and international diabetes specialisation shapes how the clinic is run: patients get a physician who treats the whole family for everyday health concerns, backed by focused, up-to-date expertise in diabetes care, diabetic foot screening, and long-term disease management.',
  ],
  focusAreas: [
    'Family medicine & general OPD consultations',
    'Type 1 & Type 2 diabetes management',
    'Diabetic foot screening & wound care',
    'Preventive health & diagnostics',
  ],
};

export const getDoctor = () => Promise.resolve(doctor);
