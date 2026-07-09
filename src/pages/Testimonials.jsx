import { FaStar, FaComments, FaHeart } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import EmptyState from '../components/common/EmptyState';
import Button from '../components/common/Button';
import CtaBanner from '../components/common/CtaBanner';
import { testimonialsSummary, reviews } from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <>
      <PageHero
        breadcrumb="Testimonials"
        eyebrow="Patient Trust"
        title="What Patients Say"
        description="An honest, growing record of patient experience at Majid Healthcare."
      />

      <section className="section testimonials-page">
        <div className="container">
          <div className="testimonials-summary">
            <div className="testimonials-summary__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} aria-hidden="true" />
              ))}
            </div>
            <h2>{testimonialsSummary.rating.toFixed(1)} out of 5</h2>
            <p>
              Based on {testimonialsSummary.reviewCount} verified reviews on{' '}
              {testimonialsSummary.source}
            </p>
          </div>

          {reviews.length === 0 ? (
            <EmptyState
              icon={FaComments}
              title="We're collecting detailed patient stories"
              description="Majid Healthcare's Google listing is new and already holds a perfect 5.0★ rating. We're gathering more in-depth patient testimonials as the clinic grows — check back soon, or be one of the first to share your experience with us."
              action={
                <Button to="/contact" variant="primary" icon={FaHeart}>
                  Share Your Experience
                </Button>
              }
            />
          ) : (
            <div className="grid testimonials-grid">
              {reviews.map((review) => (
                <article className="testimonial-card" key={review.id}>
                  <p>&ldquo;{review.quote}&rdquo;</p>
                  <span>{review.name}</span>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Experienced care at Majid Healthcare?"
        description="Your feedback helps other patients in Kalyan West find the right care. We'd love to hear from you."
      />
    </>
  );
}
