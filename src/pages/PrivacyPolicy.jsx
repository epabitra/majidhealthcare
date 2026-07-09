import PageHero from '../components/common/PageHero';
import { clinicInfo } from '../data/clinicInfo';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero breadcrumb="Privacy Policy" eyebrow="Legal" title="Privacy Policy" />
      <section className="section legal-page">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: July 2026</p>

          <p>
            Majid Healthcare (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;the clinic&rdquo;)
            respects your privacy. This policy explains what information we collect through this
            website, why, and how it is handled.
          </p>

          <h2>1. Information We Collect</h2>
          <p>Through this website, we may collect information you voluntarily provide, such as:</p>
          <ul>
            <li>Your name, phone number, and email address, when submitted via our Appointment or Contact forms</li>
            <li>Any details you choose to include about your reason for visiting or your message to us</li>
          </ul>
          <p>
            We do not collect sensitive medical information through this website. Detailed
            medical history is only collected in person at the clinic, as part of your
            consultation record.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to appointment requests and contact form submissions</li>
            <li>To confirm, reschedule, or follow up on OPD visits</li>
            <li>To improve our services and this website</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties for
            marketing purposes.
          </p>

          <h2>3. Cookies &amp; Third-Party Services</h2>
          <p>
            This website may use basic cookies for functionality, and embeds a Google Maps view
            on our Contact page to help you find our clinic. Google's use of data through that
            embed is governed by Google's own privacy policy.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to protect information submitted through this website.
            However, no method of transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal information
            you've submitted to us by contacting the clinic directly at{' '}
            <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with a revised &ldquo;Last updated&rdquo; date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            {clinicInfo.address.full}, or call{' '}
            <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
