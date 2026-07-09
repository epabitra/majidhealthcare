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
        title="Our Services"
        description="Family medicine, diabetes care, and day-care diagnostics — every service we offer, in one place."
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
              For current payment modes, insurance, or cashless treatment queries, please call the
              clinic directly at {clinicInfo.phoneDisplay} — this can vary and is best confirmed
              before your visit.
            </InfoBanner>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
