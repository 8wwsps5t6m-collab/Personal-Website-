import { experience } from '@/data/content';
import FadeIn from './FadeIn';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-32">
      <FadeIn>
        <h2 className="font-display text-4xl uppercase tracking-tight md:text-6xl">
          Experience
        </h2>
      </FadeIn>
      <div className="relative mt-14 space-y-8 border-l border-black pl-7">
        {experience.map((item, index) => (
          <FadeIn key={`${item.role}-${item.org}`} delayMs={index * 70}>
            <article className="relative border border-divider bg-white p-6">
              <span className="absolute -left-[35px] top-8 h-3.5 w-3.5 border border-black bg-white" />
              {item.type === 'current' && (
                <span className="mb-3 inline-flex border border-black px-2 py-1 text-[10px] uppercase tracking-wider text-primary">
                  Current
                </span>
              )}
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-secondary">{item.org}</p>
                </div>
                <p className="text-xs uppercase tracking-wide text-secondary">{item.date}</p>
              </div>
              <p className="mt-4 text-secondary">{item.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
