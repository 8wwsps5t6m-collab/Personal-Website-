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

export interface FocusAreaItem {
  label: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const personalInfo = {
  name: 'Hudson Cryder',
  tagline: 'Marketing · Content Creation · Brand Strategy',
  bioParts: [
    'Marketing student at the University of South Carolina\'s Darla Moore School of Business, originally from Montclair, New Jersey.',
    'I grew up in the fashion industry — modeling in catalog campaigns for J. Crew, Gap, Vineyard Vines, and Burton from age six, with a front-row perspective on global brand operations through a parent who serves as a senior executive at a major luxury house.',
    'Today I operate at the intersection of content strategy, brand development, and emerging technology — creating for an audience of 70,000+ while studying the systems that connect creators, brands, and consumers.',
    'Currently focused on how AI and digital tools are reshaping that relationship, and building the skill set to work across all three.',
  ],
  location: 'Columbia, SC · Montclair, NJ',
  email: 'hudsoncryder@gmail.com',
  socials: {
    tiktok: 'https://www.tiktok.com/@hudson.cryder',
    instagram: 'https://www.instagram.com/hudsoncryder_',
    linkedin: 'https://www.linkedin.com/in/hudson-cryder-3912253a9',
  },
};

export const focusAreas: FocusAreaItem[] = [
  {
    label: 'Digital Marketing & Brand Strategy',
    description:
      'Studying marketing at USC\'s Darla Moore School of Business with a focus on how brands build relevance in attention-driven markets. Interested in the structural relationship between audience behavior, content strategy, and long-term brand equity.',
  },
  {
    label: 'Content & Audience Development',
    description:
      '70,000+ followers built through systematic content iteration across TikTok and Instagram. A background in professional modeling and proximity to global brand strategy informs how I think about visual storytelling, audience development, and the relationship between content and commerce.',
  },
  {
    label: 'Brand Partnerships & Campaign Execution',
    description:
      'Managing end-to-end brand collaborations from inbound negotiation through deliverable and performance reporting. Understanding how sponsored content integrates into an organic content strategy without eroding audience trust.',
  },
  {
    label: 'AI & Digital Innovation',
    description:
      'Pursuing formal AI literacy certification at USC while applying generative AI and automation tools to real content and marketing workflows. Focused on how these tools compress the gap between strategy and execution for creators and brands.',
  },
  {
    label: 'Entrepreneurship & Builder Mindset',
    description:
      'Oriented toward building at the intersection of content, marketing, and technology. More interested in connecting systems than occupying a single role — finding where creator tools, brand infrastructure, and AI capability overlap.',
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Content Creator',
    org: '@hudson.cryder · TikTok & Instagram',
    date: '2023 — Present',
    description:
      'Building and managing a content brand across platforms — developing audience growth strategy, producing short-form video, and translating engagement data into content decisions.',
    type: 'current',
  },
  {
    role: 'Brand Partner',
    org: 'Based Body Works · Paid Campaign',
    date: '2025',
    description:
      'Developed sponsored content strategy for a wellness brand, integrating product messaging into organic content formats.',
    type: 'partnership',
  },
  {
    role: 'Brand Partner',
    org: 'Anchor Charging · Paid Campaign',
    date: '2025',
    description:
      'Executed a paid content campaign positioning a tech product within lifestyle content — bridging product utility and audience relevance.',
    type: 'partnership',
  },
  {
    role: 'Gifted Collaborations',
    org: 'Scuffers · W by Jake Paul · Eme Studios · Aelfric Eden',
    date: '2024 — 2025',
    description:
      'Selected by streetwear brands for product-based partnerships driven by content quality and demographic alignment.',
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

export const certifications: CertificationItem[] = [
  {
    title: 'Artificial Intelligence Literacy, Certificate',
    issuer: 'University of South Carolina',
    date: '2026',
    description:
      'Formal certification in AI fundamentals, applications, and strategic implementation — focused on how AI tools reshape decision-making in marketing and business.',
  },
];

export const fashionBackground = {
  headline: 'Raised in the Industry',
  description:
    'Before creating content, I was in front of the camera — modeling in national print and catalog campaigns for major American brands from age six through fourteen. Growing up with a parent operating at the executive level of a global luxury house gave me an understanding of how brands are built, positioned, and scaled that most people only read about in textbooks.',
  brands: ['J. Crew', 'Gap', 'Vineyard Vines', 'Burton'],
};

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
    org: 'Montclair, NJ',
    date: '2018 — 2024',
    description:
      'Six years across multiple roles starting at age 12. Customer service, operations, and learning what it means to show up.',
  },
  {
    role: 'Delivery Driver',
    org: 'Local Restaurant · Montclair, NJ',
    date: '2024',
    description: 'Logistics and time management under pressure.',
  },
  {
    role: 'Busser',
    org: 'Restaurant · Montclair, NJ',
    date: '2023',
    description: 'Front-of-house operations and customer-facing work.',
  },
];

export const interests: InterestItem[] = [
  // Intentionally left as an empty export to preserve data architecture compatibility.
];
