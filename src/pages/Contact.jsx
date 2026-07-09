import { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPrescriptionBottleAlt } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import FormField from '../components/common/FormField';
import Button from '../components/common/Button';
import InfoBanner from '../components/common/InfoBanner';
import SectionHeading from '../components/common/SectionHeading';
import { clinicInfo } from '../data/clinicInfo';
import { submitContactMessage } from '../utils/mockApi';
import './Contact.css';

const initialForm = { name: '', phone: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.';
    if (!form.message.trim()) next.message = 'Please enter your message.';
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');
    await submitContactMessage(form);
    setStatus('success');
  };

  return (
    <>
      <PageHero
        breadcrumb="Contact Us"
        eyebrow="Get in Touch"
        title="Contact Majid Healthcare"
        description="Have a question before your visit? Reach out — we're happy to help."
      />

      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <SectionHeading eyebrow="Visit or Call" title="Clinic Information" />
            <ul className="contact-info__list">
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <div>
                  <h3>Address</h3>
                  <p>{clinicInfo.address.full}</p>
                </div>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>
                  </p>
                </div>
              </li>
              <li>
                <FaClock aria-hidden="true" />
                <div>
                  <h3>OPD Timings</h3>
                  <p>
                    Monday – Saturday
                    <br />
                    10:00 AM – 1:00 PM &amp; 6:00 PM – 10:00 PM
                  </p>
                  <p className="contact-info__note">{clinicInfo.closedNote}</p>
                </div>
              </li>
              <li>
                <FaPrescriptionBottleAlt aria-hidden="true" />
                <div>
                  <h3>{clinicInfo.pharmacy.name}</h3>
                  <p>{clinicInfo.pharmacy.note}</p>
                </div>
              </li>
            </ul>

            <InfoBanner>{clinicInfo.emergencyNote}</InfoBanner>
          </div>

          {status === 'success' ? (
            <div className="contact-form contact-form--success">
              <FaCheckCircle aria-hidden="true" className="contact-form__success-icon" />
              <h3>Message received</h3>
              <p>
                This is a demo contact form — no message has actually been sent yet. Once backend
                integration is live, our team will get back to you soon. For anything urgent,
                please call us at <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>.
              </p>
              <Button
                variant="ghost"
                onClick={() => {
                  setForm(initialForm);
                  setStatus('idle');
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <SectionHeading eyebrow="Send a Message" title="Ask us a question" />
              <FormField
                label="Full Name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                error={errors.name}
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                error={errors.phone}
              />
              <FormField
                label="Email (optional)"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <FormField
                label="Message"
                name="message"
                as="textarea"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                error={errors.message}
              />
              <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="section-alt contact-map">
        <iframe
          title="Majid Healthcare location on map"
          src={clinicInfo.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
