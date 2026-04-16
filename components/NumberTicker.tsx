'use client';

import { useEffect, useRef, useState } from 'react';

interface NumberTickerProps {
  value: number;
  suffix?: string;
  durationMs?: number;
}

export default function NumberTicker({
  value,
  suffix = '',
  durationMs = 1400,
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        let animationFrame = 0;
        const start = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
        observer.disconnect();

        return () => cancelAnimationFrame(animationFrame);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [durationMs, value]);

  return (
    <span ref={elementRef}>
      {displayValue}
      {suffix}
    </span>
  );
}
