import { interests } from '@/data/content';
import FadeIn from './FadeIn';

export default function Interests() {
  return (
    <section id="interests" className="mx-auto w-full max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="font-display text-4xl md:text-5xl">What I&apos;m About</h2>
      </FadeIn>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {interests.map((item, index) => (
          <FadeIn key={item.title} delayMs={index * 80}>
            <article className="h-full rounded-2xl border border-divider bg-white/50 p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-3xl">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-secondary">{item.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
