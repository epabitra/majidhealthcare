import { FaUserMd, FaClinicMedical, FaHandHoldingMedical, FaClock } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';
import './WhyChooseUs.css';

const points = [
  {
    icon: FaUserMd,
    title: 'Internationally Trained Diabetologist',
    description:
      'PG Diploma in Family Medicine from CMC Vellore paired with a UK Fellowship in Diabetology — a rare, focused credential set for a neighbourhood centre.',
  },
  {
    icon: FaClinicMedical,
    title: 'Complications Screened, Not Just Sugar Managed',
    description:
      'Structured assessments for diabetic foot, neuropathy, vascular health, and cardiovascular risk — so complications are caught early, not after they progress.',
  },
  {
    icon: FaHandHoldingMedical,
    title: 'Day-Care & Diagnostic Support',
    description:
      'From advanced foot-care procedures to on-site diagnostics, we handle more than a typical consultation-only clinic.',
  },
  {
    icon: FaClock,
    title: 'Two Convenient OPD Sessions',
    description:
      'Morning and evening OPD, six days a week — built around the schedules of working patients and families.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Focused care, backed by real credentials"
          description="Majid Healthcare isn't trying to be everything — it's built to be a centre of excellence in diabetes care, done exceptionally well."
          center
        />
        <div className="grid why-choose__grid">
          {points.map((point) => (
            <div className="why-choose__card" key={point.title}>
              <div className="why-choose__icon">
                <point.icon aria-hidden="true" />
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
