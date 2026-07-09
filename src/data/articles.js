// General health education content — informational only, not medical advice.
export const articles = [
  {
    slug: 'understanding-type-2-diabetes',
    title: 'Understanding Type 2 Diabetes: The Basics Every Patient Should Know',
    category: 'Diabetes Care',
    icon: 'FaTint',
    readTime: '5 min read',
    publishedDate: '2026-05-12',
    excerpt:
      'What actually happens in your body with Type 2 diabetes, why early management matters, and the warning signs that shouldn’t be ignored.',
    content: [
      'Type 2 diabetes develops when your body becomes resistant to insulin or doesn’t produce enough of it, causing blood sugar levels to rise over time. Unlike Type 1 diabetes, it usually develops gradually — which is exactly why it often goes unnoticed for years.',
      'Common early signs include increased thirst, frequent urination, unexplained fatigue, and slow-healing wounds. Many people, however, have no noticeable symptoms at all until a routine blood test picks it up.',
      'Left unmanaged, elevated blood sugar can quietly damage blood vessels, nerves, eyes, kidneys, and feet over the years. This is why regular monitoring — even before symptoms appear — matters so much, particularly if diabetes runs in your family.',
      'The good news: Type 2 diabetes is highly manageable with the right combination of medical guidance, diet, physical activity, and consistent monitoring. A structured care plan, reviewed regularly with your physician, is the single biggest factor in staying ahead of complications.',
    ],
  },
  {
    slug: 'diabetic-foot-care-101',
    title: 'Diabetic Foot Care 101: Why Your Feet Deserve Regular Attention',
    category: 'Diabetes Care',
    icon: 'FaShoePrints',
    readTime: '4 min read',
    publishedDate: '2026-04-28',
    excerpt:
      'Diabetes can quietly affect nerve function and circulation in the feet. Here’s why routine foot screening is one of the most overlooked parts of diabetes care.',
    content: [
      'One of the lesser-known effects of long-term high blood sugar is nerve damage (neuropathy), which most commonly affects the feet. Reduced sensation means small injuries — a blister, a cut, a corn — can go unnoticed and worsen before you even realise something is wrong.',
      'Poor circulation, also common in diabetes, slows down healing further, which is why minor foot issues in diabetic patients need to be taken seriously rather than left to heal on their own.',
      'A proper diabetic foot examination typically checks sensory nerve function and blood flow using simple, non-invasive tests. It’s quick, painless, and can catch problems long before they become visible or painful.',
      'A good daily habit: check your feet visually every evening — soles, heels, and between the toes — for cuts, redness, or swelling, and get any diabetic foot symptoms examined promptly rather than waiting for your next routine visit.',
    ],
  },
  {
    slug: 'when-to-see-a-family-physician',
    title: 'When to See a Family Physician (and When You Need a Specialist)',
    category: 'Family Medicine',
    icon: 'FaUserFriends',
    readTime: '4 min read',
    publishedDate: '2026-04-10',
    excerpt:
      'A family physician is often your best first stop for almost any health concern. Here’s how to think about when that’s enough, and when a referral makes sense.',
    content: [
      'A family physician is trained to manage a broad range of everyday health concerns — infections, fevers, minor injuries, chronic condition monitoring, and preventive care — for every age group in the household.',
      'For most common concerns, starting with a family physician means faster access to care, a doctor who already knows your medical history, and a coordinated approach if multiple family members are involved.',
      'Specialist referrals become useful when a condition needs focused, ongoing management beyond general care — which is one reason combining family medicine with a diabetes specialisation, as at Majid Healthcare, works well for patients managing chronic conditions alongside everyday health needs.',
      'When in doubt, book a consultation. A good family physician will always tell you honestly if your case needs specialist attention.',
    ],
  },
  {
    slug: 'diet-tips-for-diabetes-management',
    title: '5 Practical Diet Habits That Help With Diabetes Management',
    category: 'Diet & Nutrition',
    icon: 'FaAppleAlt',
    readTime: '3 min read',
    publishedDate: '2026-03-22',
    excerpt:
      'Managing diabetes through diet doesn’t mean drastic restriction — it means consistency. A few practical habits go a long way.',
    content: [
      '1. Keep meal timing consistent. Eating at roughly the same times each day helps keep blood sugar levels more predictable and easier to manage.',
      '2. Balance your plate. Pairing carbohydrates with protein and fibre slows down sugar absorption compared to eating carbohydrates alone.',
      '3. Watch portion sizes, not just food type. Even “healthy” foods can raise blood sugar if portions are too large.',
      '4. Stay consistent with hydration and limit sugary beverages, which cause rapid blood sugar spikes.',
      '5. Don’t go it alone. Dietary needs vary by individual — a personalised nutrition plan, reviewed periodically with your physician, is far more effective than generic advice found online.',
    ],
  },
  {
    slug: 'importance-of-regular-health-checkups',
    title: 'Why Regular Health Check-Ups Matter, Even When You Feel Fine',
    category: 'Preventive Health',
    icon: 'FaVials',
    readTime: '3 min read',
    publishedDate: '2026-03-05',
    excerpt:
      'Many common conditions, including diabetes and hypertension, produce no symptoms in their early stages. Routine screening is what catches them.',
    content: [
      'It’s a common misconception that check-ups are only necessary when something feels wrong. In reality, conditions like diabetes, high blood pressure, and cholesterol imbalances often develop silently, with no obvious symptoms for years.',
      'Routine diagnostics — even simple ones like blood sugar, blood pressure, and basic blood work — give your physician a baseline to track changes over time, making it far easier to catch problems early, when they’re most manageable.',
      'This is especially important if you have a family history of diabetes or heart disease, or if you’re over 40 — regular screening should become a standing habit, not an occasional afterthought.',
    ],
  },
  {
    slug: 'benefits-of-teleconsultation',
    title: 'When a Teleconsultation Makes Sense (And When It Doesn’t)',
    category: 'Clinic Services',
    icon: 'FaVideo',
    readTime: '3 min read',
    publishedDate: '2026-02-18',
    excerpt:
      'Teleconsultations are a convenient option for certain visits — but not a replacement for in-person care in every situation.',
    content: [
      'Teleconsultations work well for routine follow-ups, medication reviews, discussing test results, and quick medical queries that don’t require a physical examination.',
      'They save travel time and are particularly useful for patients managing a chronic condition like diabetes, who need frequent but often brief check-ins with their physician.',
      'They’re not a substitute for an in-person visit when a physical examination is needed — for new symptoms, foot examinations, or any condition your physician needs to assess directly.',
      'If you’re unsure which is right for your situation, call the clinic — the front desk can help you decide whether your concern is suited to a phone/video consultation or needs an in-person visit.',
    ],
  },
];

export const getArticles = () => Promise.resolve(articles);
export const getArticleBySlug = (slug) => Promise.resolve(articles.find((a) => a.slug === slug));
