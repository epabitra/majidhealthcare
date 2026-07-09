import { FaUserMd, FaGraduationCap, FaStethoscope, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import CtaBanner from '../components/common/CtaBanner';
import { doctor } from '../data/doctor';
import { clinicInfo } from '../data/clinicInfo';
import doctorRoomImg from '../assets/images/clinic/patient-waiting-area.webp';
import './Doctor.css';

export default function Doctor() {
  return (
    <>
      <PageHero
        breadcrumb="Our Doctor"
        eyebrow="Meet the Doctor"
        title={doctor.name}
        description={doctor.title}
      />

      <section className="section doctor-profile">
        <div className="container doctor-profile__inner">
          <div className="doctor-profile__sidebar">
            <div className="doctor-card">
              <div className="doctor-card__avatar">
                <FaUserMd aria-hidden="true" />
              </div>
              <h3>{doctor.name}</h3>
              <p className="doctor-card__title">{doctor.title}</p>
              <ul className="doctor-card__facts">
                <li>
                  <FaStethoscope aria-hidden="true" /> {doctor.experienceYears}+ years of
                  experience
                </li>
                <li>
                  <FaGraduationCap aria-hidden="true" /> {doctor.credentials.length} formal
                  qualifications
                </li>
              </ul>
              <div className="doctor-card__actions">
                <Button to="/appointment" variant="primary" icon={FaCalendarCheck}>
                  Book Appointment
                </Button>
                <Button href={clinicInfo.phoneHref} variant="ghost" icon={FaPhoneAlt}>
                  {clinicInfo.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>

          <div className="doctor-profile__content">
            <SectionHeading eyebrow="Background" title="Training & Experience" />
            {doctor.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <h3 className="doctor-profile__subheading">Qualifications</h3>
            <ul className="doctor-profile__credentials">
              {doctor.credentials.map((c) => (
                <li key={c.short}>
                  <FaGraduationCap aria-hidden="true" />
                  <span>{c.full}</span>
                </li>
              ))}
            </ul>

            <h3 className="doctor-profile__subheading">Areas of Focus</h3>
            <div className="doctor-profile__focus">
              {doctor.focusAreas.map((area) => (
                <span className="doctor-profile__focus-tag" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt section doctor-gallery-note">
        <div className="container doctor-gallery-note__inner">
          <img src={doctorRoomImg} alt="Consultation area at Majid Healthcare" />
          <div>
            <SectionHeading
              eyebrow="Where You'll Be Seen"
              title="A calm, well-organised consultation space"
              description="Every consultation takes place at the Majid Healthcare clinic in Kalyan West, where diagnostic support and day-care facilities are available on-site."
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Book a consultation with ${doctor.name}`}
        description="Choose a convenient OPD slot, morning or evening, six days a week."
      />
    </>
  );
}
