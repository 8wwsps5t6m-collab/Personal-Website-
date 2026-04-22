import { personalInfo } from '@/data/content';
import FadeIn from './FadeIn';
import MagneticLink from './MagneticLink';
import SectionLabel from './SectionLabel';

export default function Connect() {
  return (
    <footer id="connect" className="dark-band py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <SectionLabel number="05" title="CONNECT" />
        <FadeIn>
          <h2 className="font-display text-4xl text-onDark md:text-5xl">Let&apos;s Connect</h2>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover-underline mt-4 inline-block font-display text-2xl text-onDark md:text-3xl"
            data-interactive="true"
          >
            {personalInfo.email}
          </a>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-onDark">
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
          <p className="mt-5 text-sm text-secondary">© 2026 Hudson Cryder</p>
        </FadeIn>
      </div>
    </footer>
  );
}
