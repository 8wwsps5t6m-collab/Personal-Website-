'use client';

import { Plus } from 'lucide-react';
import { focusAreas, personalInfo } from '@/data/content';
import FadeIn from './FadeIn';
import SectionLabel from './SectionLabel';
import { useState } from 'react';

export default function About() {
  const [openCard, setOpenCard] = useState<string | null>(focusAreas[0]?.label ?? null);

  return (
    <section id="about" className="dark-band py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionLabel number="01" title="ABOUT" />
        <FadeIn>
          <div className="mt-2 max-w-4xl border border-accent p-5 text-base leading-relaxed text-onDark md:text-lg">
            {personalInfo.bioParts.map((part) => (
              <p key={part} className="mb-4 last:mb-0">
                {part}
              </p>
            ))}
          </div>
        </FadeIn>

        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, index) => {
            const isOpen = openCard === area.label;

            return (
              <FadeIn key={area.label} delayMs={index * 80}>
                <button
                  type="button"
                  onClick={() => setOpenCard((current) => (current === area.label ? null : area.label))}
                  className="flex h-full min-h-[88px] w-full flex-col border border-accent p-4 text-left text-onDark transition-colors duration-300 ease-out hover:bg-accent hover:text-primary"
                  data-interactive="true"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-headings text-xs uppercase tracking-[0.18em]">{area.label}</p>
                    <Plus
                      size={14}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mb-2 text-sm normal-case tracking-normal">{area.description}</p>
                    </div>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
