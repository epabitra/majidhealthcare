import './StatsBar.css';

export default function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      {stats.map((stat) => (
        <div className="stats-bar__item" key={stat.label}>
          <span className="stats-bar__value">{stat.value}</span>
          <span className="stats-bar__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
