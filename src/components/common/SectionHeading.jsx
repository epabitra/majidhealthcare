export default function SectionHeading({ eyebrow, title, description, center = false, id }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={id} style={{ marginTop: eyebrow ? 'var(--space-4)' : 0 }}>
        {title}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
