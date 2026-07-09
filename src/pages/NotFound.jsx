import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import Button from '../components/common/Button';
import { clinicInfo } from '../data/clinicInfo';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist or may have moved. Let's get you back on
          track.
        </p>
        <div className="not-found__actions">
          <Button to="/" variant="primary" icon={FaHome}>
            Back to Home
          </Button>
          <Button href={clinicInfo.phoneHref} variant="ghost" icon={FaPhoneAlt}>
            Call the Clinic
          </Button>
        </div>
      </div>
    </section>
  );
}
