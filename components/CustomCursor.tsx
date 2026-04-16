'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);

      const target = event.target as HTMLElement | null;
      const interactiveTarget = target?.closest(
        'a, button, [data-interactive="true"], input, textarea, select'
      );
      setIsActive(Boolean(interactiveTarget));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={`custom-cursor ${isActive ? 'custom-cursor--active' : ''}`}
      aria-hidden="true"
    />
  );
}
