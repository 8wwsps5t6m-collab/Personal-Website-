import { education } from '@/data/content';
import FadeIn from './FadeIn';

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="font-display text-4xl md:text-5xl">Education</h2>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <FadeIn key={item.school} delayMs={index * 90}>
            <article className="h-full rounded-2xl border border-divider bg-white/60 p-6">
              <h3 className="font-display text-3xl">{item.school}</h3>
              <p className="mt-2 text-lg text-primary">{item.degree}</p>
              <p className="mt-3 text-sm text-secondary">{item.date}</p>
              <p className="mt-2 text-secondary">{item.detail}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
