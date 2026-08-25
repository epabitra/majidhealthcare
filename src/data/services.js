import diabeticFootProcedureRoom from '../assets/images/clinic/diabetic-foot-procedure-room.jpg';
import dayCareRoom from '../assets/images/clinic/day-care-room.jpg';

// Services as redefined by the clinic for its diabetes-centre positioning.
export const services = [
  {
    id: 'diabetes-care',
    icon: 'FaTint',
    title: 'Diabetes Care',
    short: 'Diagnosis through long-term follow-up, with medication and lifestyle guidance.',
    description:
      'Comprehensive diabetes management from diagnosis to long-term follow-up, including treatment planning, medication optimization, lifestyle guidance, and regular monitoring to help patients achieve better health outcomes.',
  },
  {
    id: 'diabetes-complication-screening',
    icon: 'FaClipboardCheck',
    title: 'Diabetes Complication Screening',
    short: 'Structured assessments to catch diabetes-related complications early.',
    description:
      'Early identification of diabetes-related complications through structured assessments for neuropathy, vascular health, cardiovascular risk, and other diabetes-associated concerns.',
  },
  {
    id: 'diabetic-foot-care-limb-protection',
    icon: 'FaShoePrints',
    title: 'Diabetic Foot Care & Limb Protection',
    short: 'Foot examination, neuropathy testing, doppler & scanning to protect mobility.',
    description:
      'Specialized diabetic foot evaluation focused on preventing complications and protecting mobility. Services include diabetic foot examination, sensory neuropathy assessment, vibration perception testing, lower limb arterial Doppler, and advanced foot scanning.',
    image: diabeticFootProcedureRoom,
    imageAlt: 'Diabetic foot care procedure room at Majid Healthcare',
    equipment: [
      'Lower Limb Automatic Arterial Doppler',
      'HCP Foot Sensory Test',
      'VPT Diabetic Neuropathy Test',
      'Foot Scanner',
    ],
  },
  {
    id: 'lifestyle-disease-management',
    icon: 'FaWeight',
    title: 'Lifestyle Disease Management',
    short: 'Managing hypertension, obesity, thyroid and metabolic conditions.',
    description:
      'Comprehensive management of conditions commonly associated with diabetes, including hypertension, obesity, thyroid disorders, and metabolic health concerns.',
  },
  {
    id: 'day-care-services',
    icon: 'FaProcedures',
    title: 'Day Care Services',
    short: 'Short-stay care and procedures without overnight admission.',
    description:
      'Short-stay medical care for selected treatments, observation, procedures, and supportive therapies without overnight hospital admission.',
    image: dayCareRoom,
    imageAlt: 'Day Care Room at Majid Healthcare',
  },
  {
    id: 'diagnostic-health-assessment',
    icon: 'FaVials',
    title: 'Diagnostic & Health Assessment Services',
    short: 'ECG, diabetes monitoring, and coordinated lab testing.',
    description:
      'Essential diagnostic support including ECG, diabetes monitoring investigations, preventive health assessments, and coordinated laboratory testing through trusted diagnostic partners.',
  },
  {
    id: 'nutrition-lifestyle-guidance',
    icon: 'FaAppleAlt',
    title: 'Nutrition & Lifestyle Guidance',
    short: 'Personalised diet and lifestyle counselling for sustainable results.',
    description:
      'Personalized diet and lifestyle counselling to support diabetes management, weight control, and sustainable long-term health improvement.',
  },
  {
    id: 'general-preventive-healthcare',
    icon: 'FaClinicMedical',
    title: 'General & Preventive Healthcare',
    short: 'Outpatient consultations for everyday and preventive health needs.',
    description:
      'Outpatient consultations for common health concerns, preventive health needs, and ongoing management of general medical conditions.',
  },
  {
    id: 'teleconsultation-followup-care',
    icon: 'FaVideo',
    title: 'Teleconsultation & Follow-up Care',
    short: 'Remote consultations for routine follow-ups and treatment reviews.',
    description:
      'Convenient remote consultations for routine follow-ups, treatment reviews, and continued support for ongoing health management.',
  },
];

export const getServices = () => Promise.resolve(services);
export const getServiceById = (id) => Promise.resolve(services.find((s) => s.id === id));
