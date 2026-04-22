import type { Metadata } from 'next';
import {
  DM_Serif_Display,
  Outfit,
  Space_Grotesk,
} from 'next/font/google';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-headings',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Hudson Cryder | Marketing & Content Creator',
  description:
    'Marketing student at the University of South Carolina, building content, brand partnerships, and creative projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${dmSerifDisplay.variable} ${spaceGrotesk.variable} ${outfit.variable} min-h-full bg-background text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
