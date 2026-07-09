import { FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import './InfoBanner.css';

export default function InfoBanner({ icon, children, tone = 'warning' }) {
  const Icon = icon || (tone === 'info' ? FaInfoCircle : FaExclamationTriangle);
  return (
    <div className={`info-banner info-banner--${tone}`}>
      <Icon aria-hidden="true" className="info-banner__icon" />
      <p>{children}</p>
    </div>
  );
}
