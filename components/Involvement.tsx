import { involvement } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';

export default function Involvement() {
  return (
    <section id="involvement" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionLabel number="06" title="INVOLVEMENT" />
      <div className="mt-5 space-y-4">
        {involvement.map((item, index) => (
          <FadeIn key={item.org} delayMs={index * 80}>
            <article className="warm-card p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-headings text-sm uppercase tracking-[0.18em] text-primary">
                    {item.role}
                  </h3>
                  <p className="text-secondary">{item.org}</p>
                </div>
                <p className="font-headings text-xs uppercase tracking-wide text-secondary">
                  {item.date}
                </p>
              </div>
              <p className="mt-3 text-secondary">{item.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
