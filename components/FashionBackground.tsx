import { fashionBackground } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';

export default function FashionBackground() {
  return (
    <section id="fashion-background" className="dark-band py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionLabel number="02" title="RAISED IN THE INDUSTRY" />
        <FadeIn>
          <h2 className="font-display text-4xl text-onDark md:text-6xl">
            {fashionBackground.headline}
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-onDark">
            {fashionBackground.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {fashionBackground.brands.map((brand, index) => (
              <div key={brand} className="flex items-center">
                <span className="font-headings text-xs uppercase tracking-[0.24em] text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:text-onDark">
                  {brand}
                </span>
                {index < fashionBackground.brands.length - 1 && (
                  <span className="mx-3 h-4 w-px bg-accent" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
