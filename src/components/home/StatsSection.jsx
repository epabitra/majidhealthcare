import StatsBar from '../common/StatsBar';
import './StatsSection.css';

const stats = [
  { value: '9+', label: 'Years of Clinical Experience' },
  { value: '8', label: 'Core Clinical Services' },
  { value: '5.0★', label: 'Google Patient Rating' },
  { value: '6', label: 'Days of OPD Every Week' },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <StatsBar stats={stats} />
      </div>
    </section>
  );
}
