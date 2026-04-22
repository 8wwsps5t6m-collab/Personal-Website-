'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/content';
import MagneticLink from './MagneticLink';
import { useEffect, useState } from 'react';

export default function Hero() {
  const animatedName = personalInfo.name.split('');
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const seenIntro = sessionStorage.getItem('intro-seen-overlay-v1') === 'true';
    const completedIntro = sessionStorage.getItem('intro-complete') === 'true';

    if (seenIntro && completedIntro) {
      setShowHero(true);
      return;
    }

    const handleIntroComplete = () => {
      sessionStorage.setItem('intro-complete', 'true');
      setShowHero(true);
    };

    window.addEventListener('intro-complete', handleIntroComplete);
    return () => window.removeEventListener('intro-complete', handleIntroComplete);
  }, []);

  const heroItem = {
    hidden: { y: 20, opacity: 0 },
    visible: (delayIndex: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, delay: delayIndex * 0.1, ease: 'easeOut' },
    }),
  };

  return (
    <section id="top" className="grain-hero relative mx-auto flex h-screen w-full max-w-7xl items-center px-6 pt-16">
      <div className="relative z-10 grid w-full items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
        <div>
          <motion.h1
            className="font-display text-4xl leading-[0.9] tracking-tight text-primary md:text-6xl lg:text-7xl"
            style={{ textShadow: '0 2px 10px rgba(26,23,20,0.09)' }}
            initial="hidden"
            animate={showHero ? 'visible' : 'hidden'}
            custom={0}
            variants={heroItem}
          >
            {animatedName.map((letter, index) => (
              <span key={`${letter}-${index}`}>
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial="hidden"
            animate={showHero ? 'visible' : 'hidden'}
            custom={2}
            variants={heroItem}
          >
            <p className="mt-4 max-w-xl font-headings text-xs uppercase tracking-[0.2em] text-secondary md:text-sm">
              Marketing, content, and strategy
            </p>
            <p className="mt-3 font-headings text-[10px] uppercase tracking-[0.24em] text-secondary">
              {personalInfo.location}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <MagneticLink href={personalInfo.socials.tiktok}>TIKTOK</MagneticLink>
              <MagneticLink href={personalInfo.socials.instagram}>INSTAGRAM</MagneticLink>
              <MagneticLink href={personalInfo.socials.linkedin}>LINKEDIN</MagneticLink>
              <MagneticLink href={`mailto:${personalInfo.email}`}>EMAIL</MagneticLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto md:mx-0"
          initial="hidden"
          animate={showHero ? 'visible' : 'hidden'}
          custom={1}
          variants={heroItem}
        >
          <Image
            src="/hudson-headshot.png"
            alt="Hudson Cryder in Florence"
            width={300}
            height={300}
            className="h-[200px] w-[200px] rounded-full border-[3px] border-accent object-cover md:h-[300px] md:w-[300px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
