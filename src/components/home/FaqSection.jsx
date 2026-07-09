import SectionHeading from '../common/SectionHeading';
import FaqAccordion from '../common/FaqAccordion';
import { faqs } from '../../data/faqs';
import './FaqSection.css';

export default function FaqSection() {
  return (
    <section className="section faq-section">
      <div className="container faq-section__inner">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently Asked Questions"
          description="Quick answers to what patients most often ask before their first visit."
        />
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
