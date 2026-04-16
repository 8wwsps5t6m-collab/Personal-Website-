import FadeIn from './FadeIn';

interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <FadeIn className="mb-6" delayMs={40} offsetX={-18}>
      <p className="font-headings text-xs uppercase tracking-[0.24em] text-accent">
        {number} — {title}
      </p>
    </FadeIn>
  );
}
