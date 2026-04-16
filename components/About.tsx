import { focusAreas, personalInfo } from '@/data/content';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-32">
      <FadeIn>
        <h2 className="font-display text-4xl uppercase tracking-tight md:text-6xl">
          About
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-secondary">
          {personalInfo.bioParts.map((part) => (
            <p key={part}>{part}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="border border-black px-3 py-2 text-xs uppercase tracking-wider text-primary"
            >
              {area}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
