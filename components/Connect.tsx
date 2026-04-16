import { personalInfo } from '@/data/content';
import FadeIn from './FadeIn';
import MagneticLink from './MagneticLink';
import SectionLabel from './SectionLabel';

export default function Connect() {
  return (
    <footer id="connect" className="dark-band py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionLabel number="06" title="CONNECT" />
        <FadeIn>
          <h2 className="font-display text-5xl text-onDark md:text-6xl">Let&apos;s Connect</h2>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover-underline mt-6 inline-block font-display text-3xl text-onDark md:text-4xl"
            data-interactive="true"
          >
            {personalInfo.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-onDark">
            <MagneticLink href={personalInfo.socials.tiktok} className="text-onDark">
              TIKTOK
            </MagneticLink>
            <MagneticLink href={personalInfo.socials.instagram} className="text-onDark">
              INSTAGRAM
            </MagneticLink>
            <MagneticLink href={personalInfo.socials.linkedin} className="text-onDark">
              LINKEDIN
            </MagneticLink>
            <MagneticLink href={`mailto:${personalInfo.email}`} className="text-onDark">
              EMAIL
            </MagneticLink>
          </div>
          <p className="mt-10 text-sm text-secondary">© 2026 Hudson Cryder</p>
        </FadeIn>
      </div>
    </footer>
  );
}
