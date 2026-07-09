import { FaCalendarCheck, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import Button from '../common/Button';
import RatingBadge from '../common/RatingBadge';
import { clinicInfo } from '../../data/clinicInfo';
import heroImage from '../../assets/images/hero/clinic-storefront.webp';
import './Hero.css';

const highlights = [
  'CMC Vellore trained family physician',
  'UK Fellowship in Diabetology',
  '9+ years of clinical experience',
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Family Health &amp; Diabetes Centre · Kalyan West</span>
          <h1>{clinicInfo.tagline}</h1>
          <p className="hero__lead">
            Consult <strong>Dr. Umair Musaddique Majid</strong> — a CMC Vellore-trained family
            physician with a UK Fellowship in Diabetology — for everyday family health concerns
            and dedicated, long-term diabetes care.
          </p>

          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>
                <FaCheckCircle aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <Button to="/appointment" variant="primary" size="lg" icon={FaCalendarCheck}>
              Book Appointment
            </Button>
            <Button href={clinicInfo.phoneHref} variant="ghost" size="lg" icon={FaPhoneAlt}>
              Call {clinicInfo.phoneDisplay}
            </Button>
          </div>

          <div className="hero__meta">
            <RatingBadge
              rating={clinicInfo.rating}
              reviewCount={clinicInfo.reviewCount}
              source={clinicInfo.ratingSource}
            />
            <span className="hero__hours">Mon–Sat · 10 AM–1 PM &amp; 6 PM–10 PM</span>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__image-frame">
            <img
              src={heroImage}
              alt="Majid Healthcare — Family Health & Diabetes Centre storefront in Kalyan West"
            />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-value">9+</span>
            <span className="hero__badge-label">Years of Clinical Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
