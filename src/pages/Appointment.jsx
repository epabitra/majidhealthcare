import { useState } from 'react';
import { FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import FormField from '../components/common/FormField';
import Button from '../components/common/Button';
import InfoBanner from '../components/common/InfoBanner';
import { clinicInfo } from '../data/clinicInfo';
import { services } from '../data/services';
import { submitAppointmentRequest } from '../utils/mockApi';
import './Appointment.css';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  session: '',
  date: '',
  message: '',
};

export default function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your full name.';
    if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.';
    if (!form.session) next.session = 'Please choose a preferred OPD session.';
    if (!form.date) next.date = 'Please choose a preferred date.';
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
    await submitAppointmentRequest(form);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <>
        <PageHero
          breadcrumb="Appointment"
          eyebrow="Request Received"
          title="Thank you, we've received your request"
        />
        <section className="section">
          <div className="container appointment-success">
            <FaCheckCircle aria-hidden="true" className="appointment-success__icon" />
            <h2>We'll confirm your slot shortly</h2>
            <p>
              This is a demo booking form — no request has actually been sent yet. Once backend
              integration is live, our team will call you at {form.phone || 'the number you provided'} to
              confirm your {form.session ? form.session.toLowerCase() : ''} OPD slot on{' '}
              {form.date || 'your preferred date'}.
            </p>
            <p>
              For an appointment right now, please call us directly at{' '}
              <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>.
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setForm(initialForm);
                setStatus('idle');
              }}
            >
              Submit Another Request
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        breadcrumb="Appointment"
        eyebrow="Book Your Visit"
        title="Book an Appointment"
        description="Fill in your details and we'll get in touch to confirm your OPD slot. For urgent needs, calling us directly is always fastest."
      />

      <section className="section appointment-section">
        <div className="container appointment-layout">
          <form className="appointment-form" onSubmit={handleSubmit} noValidate>
            <InfoBanner tone="info">
              This form is a frontend preview — no data is sent anywhere yet. It's built and
              ready for backend integration.
            </InfoBanner>

            <div className="appointment-form__grid">
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
                label="Reason for Visit"
                name="service"
                as="select"
                value={form.service}
                onChange={handleChange}
                placeholder="Select a service"
                options={services.map((s) => ({ value: s.id, label: s.title }))}
              />
              <FormField
                label="Preferred OPD Session"
                name="session"
                as="select"
                required
                value={form.session}
                onChange={handleChange}
                placeholder="Select a session"
                error={errors.session}
                options={[
                  { value: 'morning', label: 'Morning · 10:00 AM – 1:00 PM' },
                  { value: 'evening', label: 'Evening · 6:00 PM – 10:00 PM' },
                ]}
              />
              <FormField
                label="Preferred Date"
                name="date"
                type="date"
                required
                value={form.date}
                onChange={handleChange}
                error={errors.date}
              />
            </div>

            <FormField
              label="Additional Notes (optional)"
              name="message"
              as="textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your concern, if you'd like."
            />

            <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Request Appointment'}
            </Button>
          </form>

          <aside className="appointment-sidebar">
            <h3>Prefer to call?</h3>
            <ul>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href={clinicInfo.phoneHref}>{clinicInfo.phoneDisplay}</a>
              </li>
              <li>
                <FaClock aria-hidden="true" />
                <span>Mon–Sat, 10 AM–1 PM &amp; 6 PM–10 PM</span>
              </li>
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{clinicInfo.address.full}</span>
              </li>
            </ul>
            <p className="appointment-sidebar__note">{clinicInfo.emergencyNote}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
