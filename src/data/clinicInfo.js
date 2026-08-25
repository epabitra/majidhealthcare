// Central clinic profile. Every field here is sourced from the verified
// research brief / storefront signage. Swap the `get*` functions for real
// API calls later without touching any component.

export const clinicInfo = {
  name: 'Majid Healthcare',
  fullName: 'Majid Healthcare — Family Health & Diabetes Centre',
  tagline: 'Comprehensive Diabetes Care Beyond Blood Sugar.',
  shortDescription:
    'A dedicated diabetes care centre in Kalyan West, led by Dr. Umair M Majid — providing evidence-based diabetes management, advanced screening for diabetic complications, and personalised long-term care.',
  phone: '+91 99304 60918',
  phoneDisplay: '099304 60918',
  phoneHref: 'tel:+919930460918',
  email: null, // Not publicly available — confirm with client
  address: {
    line1: '003, Haji Majid Commercial Complex',
    line2: 'Dr. Ambedkar Road, Kalyan West',
    city: 'Kalyan',
    state: 'Maharashtra',
    pincode: '421301',
    full: '003, Haji Majid Commercial Complex, Dr. Ambedkar Rd, Kalyan West, Kalyan, Maharashtra 421301',
  },
  hours: [
    { session: 'Morning OPD', days: 'Monday – Saturday', time: '10:00 AM – 1:00 PM' },
    { session: 'Evening OPD', days: 'Monday – Saturday', time: '6:00 PM – 10:00 PM' },
  ],
  closedNote: 'Closed Sundays & public holidays. Timings may vary — please call ahead to confirm.',
  registrationNo: '2017/05/1989',
  rating: 5.0,
  reviewCount: 3,
  ratingSource: 'Google Business Profile',
  mapEmbedSrc:
    'https://maps.google.com/maps?q=' +
    encodeURIComponent(
      'Majid Healthcare, Haji Majid Commercial Complex, Dr. Ambedkar Rd, Kalyan West, Kalyan, Maharashtra 421301'
    ) +
    '&output=embed',
  emergencyNote:
    'Majid Healthcare is a specialized outpatient and day-care centre focused on diabetes care, preventive health, and planned medical services. We do not operate a 24×7 emergency or trauma facility. In case of a medical emergency, please visit the nearest hospital emergency department or call emergency services immediately.',
  pharmacy: {
    name: 'Majid Chemist & General Store',
    note: 'A partner chemist and general store is located right next door for your convenience.',
  },
};

export const getClinicInfo = () => Promise.resolve(clinicInfo);
