import PageHero from '../components/common/PageHero';
import { clinicInfo } from '../data/clinicInfo';
import './Legal.css';

export default function Terms() {
  return (
    <>
      <PageHero breadcrumb="Terms & Conditions" eyebrow="Legal" title="Terms & Conditions" />
      <section className="section legal-page">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: July 2026</p>

          <p>
            Please read these Terms &amp; Conditions carefully before using the Majid Healthcare
            website. By using this website, you agree to the terms below.
          </p>

          <h2>1. Website Purpose</h2>
          <p>
            This website provides general information about Majid Healthcare — Family Health
            &amp; Diabetes Centre, its physician, services, and facilities. It is intended to help
            patients learn about the clinic and request appointments; it is not a substitute for
            in-person medical consultation.
          </p>

          <h2>2. Not a Substitute for Medical Advice</h2>
          <p>
            Content on this website, including the Health Articles section, is provided for
            general informational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always seek the advice of Dr. Umair Musaddique Majid or
            another qualified physician regarding any medical condition.
          </p>

          <h2>3. Appointment Requests</h2>
          <p>
            Submitting an appointment request through this website does not guarantee a
            confirmed slot. All appointments are subject to confirmation by phone from our
            clinic team. In case of any medical emergency, do not rely on this website — please
            visit your nearest hospital emergency department immediately.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            We make reasonable efforts to keep information on this website accurate and current,
            including OPD timings and services offered. However, timings and services may change
            without notice — please call the clinic at{' '}
            <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a> to confirm before your
            visit.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and the Majid Healthcare logo,
            is the property of Majid Healthcare and may not be reproduced without permission.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Majid Healthcare shall not be held liable for any direct or indirect damages arising
            from the use of, or inability to use, this website or its content.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These terms are governed by the laws of India, and any disputes shall be subject to
            the jurisdiction of the courts in Kalyan, Maharashtra.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For questions about these Terms &amp; Conditions, please contact us at{' '}
            {clinicInfo.address.full}, or call{' '}
            <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
