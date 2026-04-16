'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const easing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function IntroSequence() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('intro-seen') === 'true';
    if (seen) {
      sessionStorage.setItem('intro-complete', 'true');
      setIsVisible(false);
      window.dispatchEvent(new Event('intro-complete'));
      return;
    }

    setIsVisible(true);
    sessionStorage.setItem('intro-seen', 'true');
    sessionStorage.removeItem('intro-complete');
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = '';
      return () => {
        document.body.style.overflow = '';
      };
    }

    document.body.style.overflow = 'hidden';
    const hideTimer = window.setTimeout(() => setIsVisible(false), 4000);

    return () => {
      window.clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        sessionStorage.setItem('intro-complete', 'true');
        window.dispatchEvent(new Event('intro-complete'));
      }}
    >
      {isVisible && (
        <motion.section
          id="intro-overlay"
          className="intro-sequence fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: easing }}
        >
          <div className="intro-mesh absolute inset-0" />

          <motion.div
            className="absolute inset-0 bg-secondaryBackground"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ times: [0, 0.875, 1], duration: 4, ease: easing }}
          />

          <motion.div
            className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-onDark"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ times: [0, 0.75, 1], duration: 3.5, ease: easing }}
          >
            <motion.div
              className="mb-6 h-px bg-onDark/80"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easing }}
              style={{ width: 'min(40vw, 560px)', transformOrigin: 'center center' }}
            />

            <div className="text-center">
              <motion.h1
                className="font-display text-6xl leading-none md:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: easing }}
              >
                HUDSON
              </motion.h1>

              <motion.h1
                className="mt-2 font-display text-6xl leading-none md:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: easing }}
              >
                CRYDER
              </motion.h1>
            </div>

            <motion.p
              className="mt-7 font-headings text-xs uppercase tracking-[0.24em] text-onDark/60"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.8, ease: easing }}
            >
              Marketing · Content · Strategy · AI
            </motion.p>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
