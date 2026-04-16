'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -5;
    const rotateY = ((x / rect.width) - 0.5) * 5;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  return (
    <div style={{ perspective: '1000px' }} data-interactive="true">
      <div
        className={clsx('warm-card transform-gpu p-5', className)}
        style={{ transform, transition: 'transform 220ms ease-out' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTransform('rotateX(0deg) rotateY(0deg)')}
      >
        {children}
      </div>
    </div>
  );
}
