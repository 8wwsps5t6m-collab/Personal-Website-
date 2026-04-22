import About from '@/components/About';
import Connect from '@/components/Connect';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import FashionBackground from '@/components/FashionBackground';
import Hero from '@/components/Hero';
import IntroSequence from '@/components/IntroSequence';
import Navigation from '@/components/Navigation';
import StatsRow from '@/components/StatsRow';

export default function Home() {
  return (
    <div className="editorial-frame bg-background text-primary">
      <Navigation />
      <main className="relative z-10">
        <IntroSequence />
        <Hero />
        <div className="section-divider mx-auto max-w-6xl" />
        <div className="transition-cream-to-dark" aria-hidden="true" />
        <About />
        <FashionBackground />
        <StatsRow />
        <div className="transition-dark-to-cream" aria-hidden="true" />
        <div className="section-divider mx-auto max-w-6xl" />
        <Experience />
        <div className="section-divider mx-auto max-w-6xl" />
        <Education />
        <div className="section-divider mx-auto max-w-6xl" />
      </main>
      <div className="transition-cream-to-dark" aria-hidden="true" />
      <Connect />
    </div>
  );
}
