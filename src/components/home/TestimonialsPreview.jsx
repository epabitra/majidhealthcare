import { FaStar, FaGoogle } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { testimonialsSummary } from '../../data/testimonials';
import './TestimonialsPreview.css';

export default function TestimonialsPreview() {
  return (
    <section className="section testimonials-preview">
      <div className="container testimonials-preview__inner">
        <div className="testimonials-preview__rating">
          <div className="testimonials-preview__stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} aria-hidden="true" />
            ))}
          </div>
          <span className="testimonials-preview__score">
            {testimonialsSummary.rating.toFixed(1)} / 5
          </span>
          <p>
            <FaGoogle aria-hidden="true" /> Rated by patients on {testimonialsSummary.source}
          </p>
        </div>

        <div className="testimonials-preview__content">
          <SectionHeading
            eyebrow="Patient Trust"
            title="A growing record of patient trust"
            description="Majid Healthcare currently holds a perfect 5.0★ rating on Google. We're gathering more detailed patient stories as the clinic grows — check back soon, or share your own experience with us."
          />
          <Button to="/testimonials" variant="ghost">
            View Testimonials Page
          </Button>
        </div>
      </div>
    </section>
  );
}
