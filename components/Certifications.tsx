import { certifications } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto w-full max-w-6xl px-6 py-24">
      <SectionLabel number="05" title="CERTIFICATIONS" />
      <div className="mt-5 space-y-4">
        {certifications.map((item, index) => (
          <FadeIn key={item.title} delayMs={index * 80}>
            <article className="warm-card p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-headings text-sm uppercase tracking-[0.18em] text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-secondary">{item.issuer}</p>
                </div>
                <p className="font-headings text-xs uppercase tracking-[0.2em] text-secondary">
                  {item.date}
                </p>
              </div>
              <p className="mt-4 leading-relaxed text-secondary">{item.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
