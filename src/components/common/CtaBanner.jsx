import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import Button from './Button';
import { clinicInfo } from '../../data/clinicInfo';
import './CtaBanner.css';

export default function CtaBanner({
  title = 'Ready to consult Dr. Majid?',
  description = 'Book your OPD slot online or call the clinic directly — we’ll help you find a convenient time.',
}) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-banner__actions">
          <Button to="/appointment" variant="accent" size="lg" icon={FaCalendarCheck}>
            Book Appointment
          </Button>
          <Button href={clinicInfo.phoneHref} variant="outline" size="lg" icon={FaPhoneAlt}>
            {clinicInfo.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
