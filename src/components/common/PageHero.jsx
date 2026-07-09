import { Link } from 'react-router-dom';
import './PageHero.css';

export default function PageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {breadcrumb && (
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>{breadcrumb}</span>
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
