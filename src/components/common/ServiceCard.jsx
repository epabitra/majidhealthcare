import resolveIcon from '../../utils/iconMap';
import './ServiceCard.css';

export default function ServiceCard({ service, onClick }) {
  const Icon = resolveIcon(service.icon);

  return (
    <article className="service-card" onClick={onClick} role={onClick ? 'button' : undefined}>
      <div className="service-card__icon">
        <Icon aria-hidden="true" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
    </article>
  );
}
