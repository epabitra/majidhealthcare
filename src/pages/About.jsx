import { FaCheckCircle, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/common/CtaBanner';
import { clinicInfo } from '../data/clinicInfo';
import { doctor } from '../data/doctor';
import storefrontImg from '../assets/images/clinic/storefront-consultation.webp';
import communityImg from '../assets/images/gallery/community-health-camp.webp';
import './About.css';

const approachPoints = [
  {
    title: 'Personalized diabetes management',
    description:
      'Every patient’s diabetes journey is different. We focus on individualized treatment plans based on health goals, lifestyle, risk factors, and clinical needs.',
  },
  {
    title: 'Complication prevention through early screening',
    description:
      'We emphasize proactive assessment for diabetes-related complications through foot evaluation, neuropathy screening, vascular assessment, and cardiovascular risk evaluation.',
  },
  {
    title: 'Evidence-based and transparent care',
    description:
      'We believe in clear communication, appropriate treatment decisions, and timely referrals whenever specialized care is required.',
  },
  {
    title: 'Continuous support beyond consultations',
    description:
      'Diabetes is a long-term condition. Our approach focuses on consistent monitoring, education, and helping patients make sustainable health improvements.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About Majid Healthcare"
        title="Building a Centre of Excellence in Diabetes Care"
        description="Majid Healthcare is committed to delivering comprehensive diabetes care through clinical expertise, advanced screening, personalized treatment, and a patient-first approach."
      />

      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__media">
            <img src={storefrontImg} alt="Patients consulting at Majid Healthcare" />
          </div>
          <div className="about-story__content">
            <SectionHeading
              eyebrow="Our Story"
              title="A trusted centre for comprehensive diabetes care"
            />
            <p>
              Majid Healthcare was founded with a vision to build a trusted centre dedicated to
              comprehensive diabetes care and long-term health management. We believe diabetes
              care goes beyond controlling blood sugar levels — effective management requires
              early identification of risks, prevention of complications, personalized treatment
              strategies, and continuous support throughout a patient&apos;s journey.
            </p>
            <p>
              Led by <strong>{doctor.name}</strong> (MBBS, PGDFM, Fellowship in Diabetology) with
              over {doctor.experienceYears} years of clinical experience, Majid Healthcare
              combines clinical expertise with advanced assessment facilities to provide
              structured, evidence-based diabetes care — including diabetic foot assessment,
              neuropathy screening, vascular assessment, cardiovascular risk evaluation, and
              individualized treatment planning.
            </p>
            <p>
              Our vision is to develop Majid Healthcare into a centre of excellence in diabetes
              care, bringing together expertise, technology, education, and preventive healthcare
              to help people with diabetes achieve better health outcomes and quality of life.
            </p>
            <div className="about-story__badge">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{clinicInfo.address.full}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt about-approach">
        <div className="container">
          <SectionHeading
            eyebrow="Our Approach"
            title="Comprehensive Care. Early Detection. Long-Term Outcomes."
            description="Diabetes care requires more than medication—it requires understanding the individual, identifying risks early, and preventing complications before they affect quality of life."
            center
          />
          <div className="grid about-approach__grid">
            {approachPoints.map((point) => (
              <div className="about-approach__item" key={point.title}>
                <FaCheckCircle aria-hidden="true" />
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-community">
        <div className="container about-community__inner">
          <div className="about-community__content">
            <SectionHeading
              eyebrow="Community Outreach"
              title="Free medical camps for the neighbourhood"
              description="Beyond regular OPD care, Majid Healthcare has organised free community medical camps offering blood tests, sugar and BP checks, doctor consultations, and medicines — bringing basic screening within reach for people who might otherwise skip it."
            />
          </div>
          <div className="about-community__media">
            <img src={communityImg} alt="Free medical camp organised by Majid Healthcare" />
          </div>
        </div>
      </section>

      <section className="section section-alt about-trust">
        <div className="container about-trust__inner">
          <div className="about-trust__card">
            <FaAward aria-hidden="true" />
            <div>
              <h3>Registered Practice</h3>
              <p>Registration No. {clinicInfo.registrationNo}</p>
            </div>
          </div>
          <div className="about-trust__card">
            <FaCheckCircle aria-hidden="true" />
            <div>
              <h3>{clinicInfo.rating.toFixed(1)}★ Google Rating</h3>
              <p>Based on verified patient reviews on {clinicInfo.ratingSource}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to know more before you visit?"
        description="Read about Dr. Majid's full qualifications, or get in touch with any questions about our services."
      />
    </>
  );
}
