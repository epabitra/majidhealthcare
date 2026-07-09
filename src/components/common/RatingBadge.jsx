import { FaStar } from 'react-icons/fa';
import './RatingBadge.css';

export default function RatingBadge({ rating, reviewCount, source, size = 'md' }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <div className={`rating-badge rating-badge--${size}`}>
      <div className="rating-badge__stars" aria-hidden="true">
        {stars.map((filled, i) => (
          <FaStar key={i} className={filled ? 'is-filled' : 'is-empty'} />
        ))}
      </div>
      <span className="rating-badge__text">
        <strong>{rating.toFixed(1)}</strong> · {reviewCount} review{reviewCount === 1 ? '' : 's'}
        {source ? ` on ${source}` : ''}
      </span>
    </div>
  );
}
