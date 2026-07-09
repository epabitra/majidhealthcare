import { FaArrowRight, FaUserMd } from 'react-icons/fa';
import Button from '../common/Button';
import SectionHeading from '../common/SectionHeading';
import { doctor } from '../../data/doctor';
import receptionImage from '../../assets/images/clinic/reception-waiting-area.webp';
import './DoctorHighlight.css';

export default function DoctorHighlight() {
  return (
    <section className="section doctor-highlight">
      <div className="container doctor-highlight__inner">
        <div className="doctor-highlight__media">
          <img src={receptionImage} alt="Reception and waiting area at Majid Healthcare" />
        </div>

        <div className="doctor-highlight__content">
          <SectionHeading eyebrow="Meet Your Physician" title={doctor.name} />
          <p className="doctor-highlight__title">
            <FaUserMd aria-hidden="true" /> {doctor.title} · {doctor.experienceYears}+ Years
            Experience
          </p>
          <ul className="doctor-highlight__credentials">
            {doctor.credentials.map((c) => (
              <li key={c.short}>{c.full}</li>
            ))}
          </ul>
          <Button to="/doctor" variant="ghost" icon={FaArrowRight}>
            Read Full Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
