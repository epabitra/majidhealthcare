import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../common/ServiceCard';
import Button from '../common/Button';
import { services } from '../../data/services';
import './ServicesPreview.css';

export default function ServicesPreview() {
  return (
    <section className="section section-alt services-preview">
      <div className="container">
        <SectionHeading
          eyebrow="What We Treat"
          title="Our Services"
          description="Everything shown on our clinic signage, delivered with the same care every time."
          center
        />
        <div className="grid services-preview__grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
        <div className="services-preview__cta">
          <Button to="/services" variant="primary" icon={FaArrowRight}>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
