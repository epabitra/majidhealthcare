import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { clinicInfo } from '../../data/clinicInfo';
import { footerLinks } from '../../data/navLinks';
import logo from '../../assets/images/logo/majid-healthcare-logo.webp';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo-wrap">
            <img src={logo} alt={clinicInfo.fullName} className="footer__logo" />
          </div>
          <p>{clinicInfo.shortDescription}</p>
          <div className="footer__social">
            <a
              href="#"
              aria-label="Majid Healthcare on Facebook"
              onClick={(e) => e.preventDefault()}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Majid Healthcare on Instagram"
              onClick={(e) => e.preventDefault()}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Clinic</h4>
          <ul>
            {footerLinks.clinic.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>For Patients</h4>
          <ul>
            {footerLinks.patients.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4>Visit Us</h4>
          <ul>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{clinicInfo.address.full}</span>
            </li>
            <li>
              <FaPhoneAlt aria-hidden="true" />
              <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>
            </li>
            <li>
              <FaClock aria-hidden="true" />
              <span>Mon–Sat · 10 AM–1 PM &amp; 6 PM–10 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} {clinicInfo.fullName}. All rights reserved.
          </p>
          <div className="footer__legal">
            {footerLinks.legal.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
