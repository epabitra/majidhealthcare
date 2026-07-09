import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { clinicInfo } from '../../data/clinicInfo';
import './MobileCtaBar.css';

export default function MobileCtaBar() {
  return (
    <div className="mobile-cta" role="navigation" aria-label="Quick actions">
      <a href={clinicInfo.phoneHref} className="mobile-cta__btn mobile-cta__btn--call">
        <FaPhoneAlt aria-hidden="true" />
        Call Now
      </a>
      <Link to="/appointment" className="mobile-cta__btn mobile-cta__btn--book">
        <FaCalendarCheck aria-hidden="true" />
        Book Appointment
      </Link>
    </div>
  );
}
