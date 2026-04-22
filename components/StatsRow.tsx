import FadeIn from './FadeIn';
import NumberTicker from './NumberTicker';

const stats = [
  { value: 70000, suffix: '+', label: 'audience across platforms', useGrouping: true },
  { value: 6, suffix: '+', label: 'brand campaigns executed', useGrouping: true },
  { value: 2023, suffix: '', label: 'creating since', useGrouping: false },
];

export default function StatsRow() {
  return (
    <section className="dark-band py-10 md:py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 md:grid-cols-3 md:gap-5">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delayMs={index * 100}>
            <article className="border border-dividerDark p-5">
              <p className="font-display text-5xl italic text-onDark md:text-6xl">
                <NumberTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  useGrouping={stat.useGrouping}
                />
              </p>
              <p className="mt-3 font-headings text-xs uppercase tracking-[0.24em] text-secondary">
                {stat.label}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
