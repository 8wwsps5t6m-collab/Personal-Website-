'use client';

import { useState } from 'react';

interface MagneticLinkProps {
  href: string;
  children: string;
  className?: string;
}

export default function MagneticLink({
  href,
  children,
  className = '',
}: MagneticLinkProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    const maxDistance = 30;
    const distance = Math.sqrt(x * x + y * y);

    if (distance > maxDistance) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    setOffset({ x: x * 0.35, y: y * 0.35 });
  };

  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className={`hover-underline inline-block font-headings text-sm uppercase tracking-[0.22em] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 220ms ease-out',
      }}
      data-interactive="true"
    >
      {children}
    </a>
  );
}
