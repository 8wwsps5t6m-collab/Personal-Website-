import { fashionBackground } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';

export default function FashionBackground() {
  return (
    <section id="fashion-background" className="dark-band py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionLabel number="02" title="RAISED IN THE INDUSTRY" />
        <FadeIn>
          <h2 className="font-display text-4xl text-onDark md:text-5xl">
            {fashionBackground.headline}
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-onDark md:text-lg">
            {fashionBackground.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {fashionBackground.brands.map((brand, index) => (
              <div key={brand} className="flex items-center">
                <span className="font-headings text-xs font-medium uppercase tracking-[0.22em] text-secondary/90 transition-all duration-200 hover:text-onDark">
                  {brand.toUpperCase()}
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
