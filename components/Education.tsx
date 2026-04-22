import { education } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
      <SectionLabel number="05" title="EDUCATION" />
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {education.map((item, index) => (
          <FadeIn key={item.school} delayMs={index * 90} className="h-full">
            <article className="warm-card h-full p-6">
              <h3 className="font-headings text-sm uppercase tracking-[0.18em] text-primary">
                {item.school}
              </h3>
              <p className="mt-2 text-base text-primary">{item.degree}</p>
              <p className="mt-3 font-headings text-xs uppercase tracking-[0.2em] text-secondary">
                {item.date}
              </p>
              <p className="mt-3 font-display text-lg italic text-secondary">{item.detail}</p>
            </article>
          </FadeIn>
        ))}
      </div>
      <FadeIn delayMs={260}>
        <p className="mt-5 text-sm text-secondary">
          Member — Sigma Phi Epsilon, SC Alpha Chapter · University of South Carolina
        </p>
      </FadeIn>
    </section>
  );
}
