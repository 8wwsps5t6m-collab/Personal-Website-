'use client';

import { motion } from 'framer-motion';

const brands = [
  'BASED BODY WORKS',
  'ANCHOR CHARGING',
  'SCUFFERS',
  'W BY JAKE PAUL',
  'EME STUDIOS',
  'AELFRIC EDEN',
  'J. CREW',
  'GAP',
  'VINEYARD VINES',
  'BURTON',
];

export default function BrandPartnersBand() {
  const marqueeContent = [...brands, ...brands];

  return (
    <section className="dark-band py-10">
      <div className="mx-auto w-full max-w-6xl border-y border-dividerDark py-7">
        <motion.div
          className="flex w-max items-center gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {marqueeContent.map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="font-display text-4xl italic text-onDark md:text-5xl"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
