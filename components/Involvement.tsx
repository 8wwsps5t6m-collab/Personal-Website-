import { involvement } from '@/data/content';
import FadeIn from './FadeIn';

export default function Involvement() {
  return (
    <section id="involvement" className="mx-auto w-full max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="font-display text-4xl md:text-5xl">Involvement</h2>
      </FadeIn>
      <div className="mt-10 space-y-4">
        {involvement.map((item, index) => (
          <FadeIn key={item.org} delayMs={index * 80}>
            <article className="rounded-2xl border border-divider bg-white/60 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-medium">{item.role}</h3>
                  <p className="text-secondary">{item.org}</p>
                </div>
                <p className="text-sm text-secondary">{item.date}</p>
              </div>
              <p className="mt-3 text-secondary">{item.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
