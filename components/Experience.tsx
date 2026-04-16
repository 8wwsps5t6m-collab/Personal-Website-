import { experience } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';
import TiltCard from './TiltCard';

export default function Experience() {
  const [featuredExperience, ...otherExperience] = experience;

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionLabel number="03" title="EXPERIENCE" />
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {featuredExperience && (
          <FadeIn className="md:col-span-2" delayMs={50}>
            <TiltCard className="group border-accent bg-surface">
              {featuredExperience.type === 'current' && (
                <span className="mb-3 inline-flex rounded-full border border-accent px-3 py-1 font-headings text-[10px] uppercase tracking-[0.2em] text-primary">
                  Current
                </span>
              )}
              <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                <div>
                  <h3 className="font-headings text-base uppercase tracking-[0.17em] text-primary">
                    {featuredExperience.role}
                  </h3>
                  <p className="mt-1 text-secondary">{featuredExperience.org}</p>
                </div>
                <p className="font-headings text-xs uppercase tracking-[0.22em] text-secondary">
                  {featuredExperience.date}
                </p>
              </div>
              <p className="mt-4 leading-relaxed text-secondary">
                {featuredExperience.description}
              </p>
            </TiltCard>
          </FadeIn>
        )}

        {otherExperience.map((item, index) => (
          <FadeIn key={`${item.role}-${item.org}`} delayMs={120 + index * 80}>
            <TiltCard className="group bg-surface">
              <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                <div>
                  <h3 className="font-headings text-sm uppercase tracking-[0.16em] text-primary">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-secondary">{item.org}</p>
                </div>
                <p className="font-headings text-xs uppercase tracking-[0.2em] text-secondary">
                  {item.date}
                </p>
              </div>
              <p className="mt-4 text-secondary">{item.description}</p>
            </TiltCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
