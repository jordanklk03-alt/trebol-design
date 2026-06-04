import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trébol Design - Transformamos tu Visión en Realidad',
  description: 'Agencia de diseño web y desarrollo digital. Creamos landing pages modernas y efectivas para tu negocio.',
  keywords: 'diseño web, desarrollo web, landing pages, diseño digital, República Dominicana',
  openGraph: {
    title: 'Trébol Design',
    description: 'Transformamos tu Visión en Realidad',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
