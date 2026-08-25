import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import InfoBanner from '../components/common/InfoBanner';
import CtaBanner from '../components/common/CtaBanner';
import resolveIcon from '../utils/iconMap';
import { services } from '../data/services';
import { clinicInfo } from '../data/clinicInfo';
import './Services.css';

export default function Services() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What We Treat"
        title="Comprehensive Diabetes Care & Preventive Health Services"
        description="At Majid Healthcare, we provide structured diabetes care focused on blood sugar management, early detection of complications, preventive health, and long-term wellbeing."
      />

      <section className="section services-detail">
        <div className="container">
          <div className="services-detail__list">
            {services.map((service, index) => {
              const Icon = resolveIcon(service.icon);
              return (
                <article className="service-detail" id={service.id} key={service.id}>
                  <div className="service-detail__number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="service-detail__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="service-detail__body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    {service.image && (
                      <div className="service-detail__media">
                        <img src={service.image} alt={service.imageAlt} loading="lazy" />
                      </div>
                    )}
                    {service.equipment && (
                      <div className="service-detail__equipment">
                        {service.equipment.map((item) => (
                          <span className="service-detail__equipment-tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Please Note"
            title="Emergency & Insurance Information"
            center
          />
          <div className="services-notes">
            <InfoBanner>{clinicInfo.emergencyNote}</InfoBanner>
            <InfoBanner tone="info">
              For information regarding payment options please contact our centre directly at{' '}
              {clinicInfo.phoneDisplay} before your visit, as available options may vary.
            </InfoBanner>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
