'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { personalInfo } from '@/data/content';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'INDUSTRY', href: '#fashion-background' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONNECT', href: '#connect' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const completedIntro = sessionStorage.getItem('intro-complete') === 'true';
    if (completedIntro) {
      setShowNavigation(true);
      return;
    }

    const handleIntroComplete = () => {
      sessionStorage.setItem('intro-complete', 'true');
      setShowNavigation(true);
    };

    window.addEventListener('intro-complete', handleIntroComplete);
    return () => window.removeEventListener('intro-complete', handleIntroComplete);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-500 ${
        showNavigation ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-start justify-between px-6 py-4">
        <a href="#" className="font-headings text-xs uppercase tracking-[0.2em] text-primary">
          {personalInfo.name}
        </a>

        <nav className="hidden items-center gap-6 font-headings text-[10px] uppercase tracking-[0.18em] text-primary md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover-underline">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-primary md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle mobile navigation"
          data-interactive="true"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-secondaryBackground px-6 py-8 md:hidden">
          <div className="mb-12 flex justify-end">
            <button
              type="button"
              className="text-onDark"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close mobile navigation"
              data-interactive="true"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-7 font-display text-4xl text-onDark">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover-underline w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
