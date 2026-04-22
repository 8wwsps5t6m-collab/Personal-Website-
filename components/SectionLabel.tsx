import FadeIn from './FadeIn';

interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <FadeIn className="mb-4" delayMs={40} offsetX={-18}>
      <p className="font-headings text-[10px] uppercase tracking-[0.24em] text-secondary/80">
        {number} — {title}
      </p>
    </FadeIn>
  );
}
