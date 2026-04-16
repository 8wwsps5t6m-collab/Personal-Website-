export type ExperienceType = 'current' | 'partnership';

export interface ExperienceItem {
  role: string;
  org: string;
  date: string;
  description: string;
  type: ExperienceType;
}

export interface EducationItem {
  school: string;
  degree: string;
  date: string;
  detail: string;
}

export interface InvolvementItem {
  role: string;
  org: string;
  date: string;
  description: string;
}

export interface WorkHistoryItem {
  role: string;
  org: string;
  date: string;
  description: string;
}

export interface InterestItem {
  title: string;
  description: string;
}

export const personalInfo = {
  name: 'Hudson Cryder',
  tagline: 'Marketing · Content Creation · Brand Strategy',
  bioParts: [
    'Marketing student at the University of South Carolina, originally from Montclair, New Jersey.',
    'I create lifestyle and fashion content for an audience of 50,000+ across social platforms, partner with brands on paid and gifted campaigns, and explore how AI and emerging tools can reshape the way creators and marketers work.',
    'Focused on building a foundation in the marketing industry from the ground up — through content, partnerships, and the things I\'m building on the side.',
  ],
  location: 'Columbia, SC · Montclair, NJ',
  email: 'hudsoncryder@gmail.com',
  socials: {
    tiktok: 'https://www.tiktok.com/@hudson.cryder',
    instagram: 'https://www.instagram.com/hudsoncryder_',
    linkedin: 'https://www.linkedin.com/in/hudson-cryder-3912253a9',
  },
};

export const focusAreas: string[] = [
  'Marketing',
  'Content Creation',
  'Brand Partnerships',
  'AI & Emerging Tools',
  'Fashion & Lifestyle',
  'Entrepreneurship',
  'Fitness & Self-Improvement',
];

export const experience: ExperienceItem[] = [
  {
    role: 'Content Creator',
    org: '@hudson.cryder · TikTok & Social Platforms',
    date: '2023 — Present',
    description:
      'Building a lifestyle, fashion, and productivity-focused content brand with 50,000+ followers. Creating short-form video content, managing brand relationships, and executing paid and gifted campaigns.',
    type: 'current',
  },
  {
    role: 'Brand Partner',
    org: 'Based Body Works · Paid Collaboration',
    date: '2025',
    description:
      'Created sponsored content promoting wellness products to a lifestyle-focused audience.',
    type: 'partnership',
  },
  {
    role: 'Brand Partner',
    org: 'Anchor Charging · Paid Collaboration',
    date: '2025',
    description:
      'Produced branded content integrating portable charging products into everyday lifestyle content.',
    type: 'partnership',
  },
  {
    role: 'Gifted Collaborations',
    org: 'Scuffers · W by Jake Paul · Eme Studios · Aelfric Eden',
    date: '2024 — 2025',
    description:
      'Selected by fashion and lifestyle brands for gifted partnerships based on audience alignment and content quality.',
    type: 'partnership',
  },
];

export const education: EducationItem[] = [
  {
    school: 'University of South Carolina',
    degree: 'B.S. Marketing',
    date: '2025 — May 2029',
    detail: 'Darla Moore School of Business',
  },
  {
    school: 'Montclair High School',
    degree: 'AP & Honors Coursework',
    date: 'Graduated 2025',
    detail: 'Montclair, New Jersey',
  },
];

export const involvement: InvolvementItem[] = [
  {
    role: 'Member',
    org: 'Sigma Phi Epsilon · SC Alpha Chapter',
    date: '2025 — Present',
    description:
      'Active member of the SC Alpha chapter at the University of South Carolina.',
  },
];

export const workHistory: WorkHistoryItem[] = [
  {
    role: 'Beach Club Staff',
    org: 'Local Beach Club',
    date: '2018 — 2024',
    description:
      'Worked across multiple roles from age 12 through high school graduation.',
  },
  {
    role: 'Delivery Driver',
    org: 'Local Restaurant',
    date: '2024',
    description: 'Handled delivery operations during high school.',
  },
  {
    role: 'Busser',
    org: 'Restaurant',
    date: '2023',
    description: 'Front-of-house support and customer service.',
  },
];

export const interests: InterestItem[] = [
  {
    title: 'Building Things',
    description:
      'I\'m drawn to entrepreneurship and the process of building. Currently exploring how AI tools can help creators and marketers move faster and think bigger.',
  },
  {
    title: 'Fitness & Self-Improvement',
    description:
      'Consistent training, reading, and the daily practice of getting better. I believe in compounding effort over time — in the gym and out of it.',
  },
  {
    title: 'Style & Culture',
    description:
      'Fashion, lifestyle, and the visual language of personal brand. It\'s where my content lives and where I think there\'s the most overlap with marketing.',
  },
];
