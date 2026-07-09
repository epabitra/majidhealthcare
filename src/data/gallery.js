import clinicStorefront from '../assets/images/hero/clinic-storefront.webp';
import storefrontConsultation from '../assets/images/clinic/storefront-consultation.webp';
import receptionArea from '../assets/images/clinic/reception-waiting-area.webp';
import patientWaitingArea from '../assets/images/clinic/patient-waiting-area.webp';
import communityCamp from '../assets/images/gallery/community-health-camp.webp';
import clinicEvening from '../assets/images/gallery/clinic-entrance-evening.webp';
import clinicSignage from '../assets/images/gallery/clinic-signage-close.webp';

export const galleryImages = [
  {
    id: 'storefront',
    src: clinicStorefront,
    category: 'Clinic',
    caption: 'Majid Healthcare — Family Health & Diabetes Centre, Kalyan West',
  },
  {
    id: 'reception',
    src: receptionArea,
    category: 'Facility',
    caption: 'Our clean, calm reception and waiting area',
  },
  {
    id: 'patients-waiting',
    src: patientWaitingArea,
    category: 'Facility',
    caption: 'Patients at our clinic during OPD hours',
  },
  {
    id: 'storefront-consultation',
    src: storefrontConsultation,
    category: 'Clinic',
    caption: 'Consultations in progress at Majid Healthcare',
  },
  {
    id: 'clinic-evening',
    src: clinicEvening,
    category: 'Clinic',
    caption: 'Majid Healthcare during evening OPD hours',
  },
  {
    id: 'clinic-signage',
    src: clinicSignage,
    category: 'Clinic',
    caption: 'Our signage lists every service we offer, at a glance',
  },
  {
    id: 'community-camp',
    src: communityCamp,
    category: 'Community',
    caption: 'Free community medical camp — blood tests, sugar & BP checks, and consultations',
  },
];

export const getGalleryImages = () => Promise.resolve(galleryImages);
