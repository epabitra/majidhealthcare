// Central clinic profile. Every field here is sourced from the verified
// research brief / storefront signage. Swap the `get*` functions for real
// API calls later without touching any component.

export const clinicInfo = {
  name: 'Majid Healthcare',
  fullName: 'Majid Healthcare — Family Health & Diabetes Centre',
  tagline: 'Your Comprehensive Family Health & Diabetes Care Destination',
  shortDescription:
    'A focused family medicine and diabetes care clinic in Kalyan West, led by Dr. Umair Musaddique Majid — offering OPD consultations, day-care diagnostics, and specialised diabetes management.',
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
    'Majid Healthcare is an OPD & day-care clinic and does not operate a 24×7 emergency or trauma unit. For medical emergencies, please go to your nearest hospital emergency department immediately.',
  pharmacy: {
    name: 'Majid Chemist & General Store',
    note: 'A partner chemist and general store is located right next door for your convenience.',
  },
};

export const getClinicInfo = () => Promise.resolve(clinicInfo);
