import type { Metadata } from 'next';
import { Archivo, Archivo_Black } from 'next/font/google';
import './globals.css';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-archivo-black',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-archivo',
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
        className={`${archivo.variable} ${archivoBlack.variable} min-h-full bg-background text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
