// No individual review text is publicly available for this clinic yet
// (see research brief, Section 8) — only the aggregate Google rating is
// verified. We surface that honestly instead of inventing patient quotes.
// Replace `reviews` with real, client-approved testimonials once collected.

export const testimonialsSummary = {
  rating: 5.0,
  reviewCount: 3,
  source: 'Google Business Profile',
};

export const reviews = [];

export const getTestimonials = () => Promise.resolve({ ...testimonialsSummary, reviews });
