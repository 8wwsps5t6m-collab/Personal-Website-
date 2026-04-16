import { experience } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';
import TiltCard from './TiltCard';

export default function Experience() {
  const featuredExperience = experience[0];

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionLabel number="04" title="EXPERIENCE" />
      <div className="mt-5">
        {featuredExperience && (
          <FadeIn delayMs={80}>
            <TiltCard className="border-accent bg-surface p-8 md:p-10">
              {featuredExperience.type === 'current' && (
                <span className="mb-4 inline-flex rounded-full border border-accent px-3 py-1 font-headings text-[10px] uppercase tracking-[0.2em] text-primary">
                  Current
                </span>
              )}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-3xl leading-tight text-primary md:text-4xl">
                    {featuredExperience.role}
                  </h3>
                  <p className="mt-2 text-secondary">{featuredExperience.org}</p>
                </div>
                <p className="font-headings text-xs uppercase tracking-[0.22em] text-secondary">
                  {featuredExperience.date}
                </p>
              </div>
              <p className="mt-6 max-w-4xl leading-relaxed text-secondary">
                {featuredExperience.description}
              </p>
            </TiltCard>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
