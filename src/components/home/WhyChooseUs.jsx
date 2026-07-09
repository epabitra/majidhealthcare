import { FaUserMd, FaClinicMedical, FaHandHoldingMedical, FaClock } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';
import './WhyChooseUs.css';

const points = [
  {
    icon: FaUserMd,
    title: 'Internationally Trained Physician',
    description:
      'CMC Vellore family medicine diploma paired with a UK Fellowship in Diabetology — a rare, focused credential set for a neighbourhood clinic.',
  },
  {
    icon: FaClinicMedical,
    title: 'Family Medicine + Diabetes, Under One Roof',
    description:
      'One consultation covers everyday family health and specialised diabetes management, so you don’t need to juggle multiple clinics.',
  },
  {
    icon: FaHandHoldingMedical,
    title: 'Day-Care & Diagnostic Support',
    description:
      'From minor procedures to on-site diagnostics, we handle more than a typical consultation-only clinic.',
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
          description="Majid Healthcare isn't trying to be everything — it's built to do family medicine and diabetes care exceptionally well."
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
