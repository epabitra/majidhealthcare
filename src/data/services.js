// Services exactly as listed on the clinic's own storefront signage.
export const services = [
  {
    id: 'family-opd',
    icon: 'FaUserFriends',
    title: 'Family OPD',
    short: 'Outpatient consultations for every member of the family.',
    description:
      'Comprehensive outpatient consultations for common illnesses, chronic conditions, and preventive check-ups — for every member of the family, from children to seniors.',
  },
  {
    id: 'day-care-services',
    icon: 'FaProcedures',
    title: 'Day Care Services',
    short: 'Same-day treatments that don’t need overnight admission.',
    description:
      'Same-day / short-stay care for minor procedures and treatments that are completed within a few hours, without the need for overnight hospital admission.',
  },
  {
    id: 'diabetes-care',
    icon: 'FaTint',
    title: 'Diabetes Care',
    short: 'Ongoing diabetes management guided by UK fellowship training.',
    description:
      'Structured, ongoing diabetes management and monitoring — from initial diagnosis to long-term control — guided by Dr. Majid’s Fellowship in Diabetology from the Royal Liverpool Academy, UK.',
  },
  {
    id: 'diabetic-foot-care',
    icon: 'FaShoePrints',
    title: 'Diabetes Foot Care',
    short: 'Neuropathy & doppler screening to catch complications early.',
    description:
      'Dedicated diabetic foot examinations — including sensory neuropathy testing and doppler screening — designed to catch complications early, before they become serious.',
  },
  {
    id: 'minor-surgical-wound-care',
    icon: 'FaBandAid',
    title: 'Minor Surgical Procedures & Wound Care',
    short: 'In-clinic minor procedures and professional wound dressing.',
    description:
      'In-clinic minor surgical procedures along with professional wound assessment, dressing, and follow-up care.',
  },
  {
    id: 'diagnostics',
    icon: 'FaVials',
    title: 'Diagnostic Services',
    short: 'On-site day-care diagnostics and screening tests.',
    description:
      'On-site day-care diagnostics, from routine health screening to targeted tests that support diagnosis and ongoing diabetes monitoring.',
  },
  {
    id: 'diet-nutrition',
    icon: 'FaAppleAlt',
    title: 'Diet & Nutrition',
    short: 'Personalised dietary guidance for diabetes and family wellness.',
    description:
      'Personalised dietary guidance to support diabetes management, weight control, and overall family wellness — tailored to each patient’s condition and lifestyle.',
  },
  {
    id: 'teleconsultation',
    icon: 'FaVideo',
    title: 'Teleconsultation',
    short: 'Consult Dr. Majid remotely by phone or video.',
    description:
      'Consult Dr. Majid remotely by phone or video call when an in-person visit isn’t possible — ideal for routine follow-ups and quick medical queries.',
  },
];

export const getServices = () => Promise.resolve(services);
export const getServiceById = (id) => Promise.resolve(services.find((s) => s.id === id));
