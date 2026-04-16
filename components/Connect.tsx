import { Mail, Music2 } from 'lucide-react';
import { personalInfo } from '@/data/content';
import FadeIn from './FadeIn';

interface SocialIconProps {
  size?: number;
}

function InstagramIcon({ size = 24 }: SocialIconProps) {
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

function LinkedinIcon({ size = 24 }: SocialIconProps) {
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

export default function Connect() {
  return (
    <footer id="connect" className="border-t border-divider py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl">Let&apos;s Connect</h2>
          <div className="mt-8 flex items-center gap-4">
            {socialItems.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-divider p-3 text-secondary transition-colors hover:border-black hover:text-primary"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-8 inline-flex items-center gap-2 text-lg text-secondary transition-colors hover:text-primary"
          >
            <Mail size={18} />
            {personalInfo.email}
          </a>
          <p className="mt-10 text-sm text-secondary">
            © 2026 Hudson Cryder · Built with care.
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
