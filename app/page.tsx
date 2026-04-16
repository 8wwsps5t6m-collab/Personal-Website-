import About from '@/components/About';
import Background from '@/components/Background';
import Connect from '@/components/Connect';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Interests from '@/components/Interests';
import Involvement from '@/components/Involvement';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="bg-background text-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Involvement />
        <Interests />
        <Background />
      </main>
      <Connect />
    </div>
  );
}
