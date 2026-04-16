import { MapPin, Music2 } from 'lucide-react';
import { personalInfo } from '@/data/content';
import FadeIn from './FadeIn';

interface SocialIconProps {
  size?: number;
}

function InstagramIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-3.34-3.34A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialItems = [
  { href: personalInfo.socials.tiktok, label: 'TikTok', icon: Music2 },
  { href: personalInfo.socials.instagram, label: 'Instagram', icon: InstagramIcon },
  { href: personalInfo.socials.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pb-24 pt-28"
    >
      <div className="grid w-full gap-16 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <FadeIn>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-secondary">
            Digital Resume
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.88] tracking-tight md:text-7xl">
            {personalInfo.name.toUpperCase()}
          </h1>
          <p className="mt-6 max-w-xl text-xs uppercase tracking-[0.24em] text-secondary">
            {personalInfo.tagline}
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-secondary">
            <MapPin size={15} />
            {personalInfo.location}
          </p>
          <div className="mt-8 flex items-center gap-4">
            {socialItems.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="border border-black p-3 text-secondary transition-colors hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="justify-self-start md:justify-self-end" delayMs={150}>
          <div className="flex h-52 w-52 items-center justify-center border border-divider p-6 text-center text-xs uppercase tracking-wide text-secondary md:h-64 md:w-64">
            Photo placeholder — replace later
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
