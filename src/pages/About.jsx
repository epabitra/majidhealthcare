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
  'Family medicine and diabetes care delivered by the same physician, so your history is never lost between visits.',
  'Same-day diagnostics and day-care procedures to reduce unnecessary referrals for routine needs.',
  'Two OPD sessions a day, six days a week, built around working patients’ schedules.',
  'Honest, focused care — we tell you clearly when something is beyond our scope and needs a specialist referral.',
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About Majid Healthcare"
        title="A focused family health & diabetes clinic in Kalyan West"
        description="Majid Healthcare was built around one idea: that a patient's family doctor and their diabetes specialist should, ideally, be the same trusted person."
      />

      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__media">
            <img src={storefrontImg} alt="Patients consulting at Majid Healthcare" />
          </div>
          <div className="about-story__content">
            <SectionHeading
              eyebrow="Our Story"
              title="Built by a physician, for the neighbourhood he practices in"
            />
            <p>
              Majid Healthcare — Family Health &amp; Diabetes Centre operates out of Haji Majid
              Commercial Complex on Dr. Ambedkar Road, Kalyan West, offering OPD consultations and
              day-care diagnostic services under the direct care of{' '}
              <strong>{doctor.name}</strong>.
            </p>
            <p>
              Rather than positioning itself as a large, multi-department hospital, the clinic
              stays deliberately focused: everyday family medicine, paired with specialised
              diabetes management backed by international training. That focus is what lets one
              physician give consistent, personal attention to every patient who walks in.
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
            title="What guides how we practice"
            center
          />
          <div className="grid about-approach__grid">
            {approachPoints.map((point) => (
              <div className="about-approach__item" key={point}>
                <FaCheckCircle aria-hidden="true" />
                <p>{point}</p>
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
