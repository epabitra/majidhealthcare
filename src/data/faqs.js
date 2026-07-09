export const faqs = [
  {
    question: 'Do I need to book an appointment before visiting?',
    answer:
      'Walk-ins are welcome during OPD hours, but booking ahead through our Appointments page or by phone helps us reduce your waiting time, especially in the evening session.',
  },
  {
    question: 'What are your OPD timings?',
    answer:
      'We see patients Monday to Saturday in two sessions — 10:00 AM to 1:00 PM, and 6:00 PM to 10:00 PM. We are closed on Sundays and public holidays. Timings can occasionally vary, so a quick call ahead is a good idea.',
  },
  {
    question: 'Does Dr. Majid treat all family members, or only diabetes patients?',
    answer:
      'Both. Dr. Majid is a trained family physician as well as a diabetologist, so the clinic handles everyday family health concerns — fevers, infections, general check-ups — alongside specialised, long-term diabetes care.',
  },
  {
    question: 'What does a diabetic foot examination involve?',
    answer:
      'It typically includes sensory neuropathy testing and doppler screening to check circulation and nerve health in the feet — a routine but important check for anyone managing diabetes long-term, to catch complications early.',
  },
  {
    question: 'Can I consult Dr. Majid without visiting the clinic in person?',
    answer:
      'Yes — teleconsultations are available by phone or video for routine follow-ups and quick medical queries. Call the clinic to arrange one.',
  },
  {
    question: 'Are diagnostic tests available on-site?',
    answer:
      'Yes, Majid Healthcare offers day-care diagnostic services on-site as part of its OPD and diabetes care workflow. Call ahead to confirm which specific tests are available on the day you plan to visit.',
  },
  {
    question: 'Do you accept insurance or cashless treatment?',
    answer:
      'Please contact the clinic directly to confirm current payment modes and any insurance or cashless arrangements, as this can change.',
  },
  {
    question: 'What should I do in a medical emergency?',
    answer:
      'Majid Healthcare is an OPD and day-care clinic, not a 24×7 emergency facility. In a medical emergency, please go to your nearest hospital emergency department immediately rather than waiting for OPD hours.',
  },
];

export const getFaqs = () => Promise.resolve(faqs);
