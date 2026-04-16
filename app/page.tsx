import About from '@/components/About';
import Background from '@/components/Background';
import BrandPartnersBand from '@/components/BrandPartnersBand';
import Certifications from '@/components/Certifications';
import Connect from '@/components/Connect';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import FashionBackground from '@/components/FashionBackground';
import Hero from '@/components/Hero';
import Involvement from '@/components/Involvement';
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
        <About />
        <FashionBackground />
        <StatsRow />
        <div className="section-divider mx-auto max-w-6xl" />
        <Experience />
        <BrandPartnersBand />
        <div className="section-divider mx-auto max-w-6xl" />
        <Education />
        <div className="section-divider mx-auto max-w-6xl" />
        <Certifications />
        <div className="section-divider mx-auto max-w-6xl" />
        <Involvement />
        <div className="section-divider mx-auto max-w-6xl" />
        <Background />
        <div className="section-divider mx-auto max-w-6xl" />
      </main>
      <Connect />
    </div>
  );
}
