// Mock submission layer. No backend exists yet — these functions simulate
// network latency so the UI (loading/success/error states) is already wired
// up correctly. Swap the body for a real fetch()/axios call when the API
// is ready; component code does not need to change.

const simulateRequest = (payload) =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, payload }), 900);
  });

export const submitAppointmentRequest = (formData) => simulateRequest(formData);
export const submitContactMessage = (formData) => simulateRequest(formData);
