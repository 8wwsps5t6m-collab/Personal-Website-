import { workHistory } from '@/data/content';
import FadeIn from './FadeIn';

export default function Background() {
  return (
    <section id="background" className="mx-auto w-full max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="font-display text-4xl md:text-5xl">Background</h2>
        <p className="mt-3 text-secondary">
          Where I started — work that built the foundation.
        </p>
      </FadeIn>
      <div className="mt-10 space-y-4">
        {workHistory.map((item, index) => (
          <FadeIn key={`${item.role}-${item.date}`} delayMs={index * 70}>
            <article className="rounded-xl border border-divider/70 bg-white/40 p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-base font-medium text-primary">{item.role}</h3>
                  <p className="text-sm text-secondary">{item.org}</p>
                </div>
                <p className="text-sm text-secondary">{item.date}</p>
              </div>
              <p className="mt-3 text-sm text-secondary">{item.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
