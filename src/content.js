export const site = {
  name: 'Pas-à-Pas Tutoring',
  tagline: 'Personalized learning, lasting confidence.',
}

export const navLinks = [
  { label: 'Services', href: 'services' },
  { label: 'Bio', href: 'bio' },
  { label: 'Pricing & Booking', href: 'pricing' },
  // { label: 'Book', href: 'book' },
]

export const services = [
  {
    title: 'One-on-One Tutoring',
    description:
      'Tailored sessions focused on your goals, pace and learning style: from homework help to exam prep.',
    accent: 'bg-sage',
    icon: 'hand',
  },
  {
    title: 'Study Skills & Organization',
    description:
      'Build sustainable habits: note-taking, time management and strategies that stick beyond the session.',
    accent: 'bg-[#FFDBDB]',
    icon: 'sprout',
  },
  {
    title: 'Test Preparation',
    description:
      'Structured review plans, practice drills and confidence-building for standardized and classroom exams.',
    accent: 'bg-[#BFD6F2]',
    icon: 'book',
  },
  {
    title: 'Subject Coaching',
    description:
      'Deep support in math, biological sciences, computer science and French with clear explanations and examples.',
    accent: 'bg-peach',
    icon: 'dna',
  },
  {
    title: 'High School Subjects',
    description:
      'Algebra I, Algebra II \nGeometry, Trigonometry, Pre-Calculus \nFall 2026: AP Calculus \nAP Biology \n AP French',
    accent: 'bg-lavender',
    icon: 'sigma',
  },
  {
    title: 'College Subjects',
    description:
      'Cell Biology, Genetics \nFrench \nIntro to Programming (Python, C++) \n Intro to Data Science (EDA, Stats, Applied ML)\nData Structures, Algorithms\nDiscrete Structures, Applied Linear Algebra',
    accent: 'bg-[#FFFBD4]',
    icon:'grad',
  },
]

export const bio = {
  heading: 'Meet Your Tutor',
  paragraphs: [
    'French American and life-long learner, adept at simplifying complex topics into easy to understand language. I help my students build clarity, confidence and independence in their learning. My academic background includes:',
    '- MS in Molecular Biology',
    '- BS in Molecular Biology with Chemistry Minor',
    '- Post-Bacc in Computer Science',
    '- Full Stack Bootcamp',
    '- Tutor, Learning Assistance Resource Center, SJSU',
    '- Graduate Teaching Assistant, SJSU',
    '- Native, fluent French',
    'My philosophy is simple: meet each student where they are, celebrate small wins and create a calm, judgment-free space where curiosity can grow.',
  ],
}

export const pricingTiers = [
  {
    name: 'Introductory Chat',
    price: '',
    period: 'Complimentary',
    description: "We'll discuss your or your student's learning goals, tutoring session agenda/expectations and any questions you may have.",
    features: ['15-minute session', 'Evening scheduling',],
    highlighted: false,
  },
  {
    name: 'Single Session',
    price: '$60',
    period: 'per hour',
    description: 'Ideal for a focused topic, assignment review, or check-ins before exams.',
    features: ['60-minute session', 'Flexible scheduling', 'Progress Survey', 'Session recaps'],
    highlighted: true,
  },
  {
    name: 'Package Bundle',
    price: '$216',
    period: '4 sessions',
    description: 'A popular option for steady progress across a unit or semester.',
    features: [
      '4 × 60-minute sessions',
      'Priority scheduling',
      'Progress Survey', 
      'Session recaps',
    ],
    highlighted: false,
  },
  // {
  //   name: 'Monthly Retainer',
  //   price: '$x',
  //   period: 'per month',
  //   description: 'Ongoing support with weekly sessions and accountability between meetings.',
  //   features: [
  //     'x sessions per month',
  //     'Async question support',
  //     'Custom study plan',
  //   ],
  //   highlighted: false,
  // },
]

export const booking = {
  heading: 'Schedule Your Session',
  intro:
    'Pick a time that works for you. Sessions are held online via Google Meet — you will receive everything you need right after booking.',
  postBooking:
    'An automated Zoom link and confirmation will be sent immediately to your email. Add the invite to your calendar and you are all set.',
}

export const footer = {
  companyName: 'Pas-à-Pas Tutoring',
}


