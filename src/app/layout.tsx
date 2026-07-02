import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Kausalya Singuru | Engineering Leadership Portfolio',
    template: '%s | Kausalya Singuru',
  },
  description:
    'Engineering leader with 20+ years of experience delivering electrified propulsion, systems engineering, controls, system integration, calibration, and verification & validation solutions from concept through production.',

  keywords: [
    'Kausalya Singuru',
    'Systems Engineering',
    'Verification and Validation',
    'Vehicle Controls',
    'Controls Engineering',
    'System Integration',
    'Calibration',
    'Electrified Propulsion',
    'Electric Drive Unit',
    'Automotive Engineering',
    'MBSE',
    'Engineering Leadership',
    'Vehicle Dynamics',
    'Autonomous Systems',
    'HIL',
    'SIL',
    'MIL',
  ],

  authors: [
    {
      name: 'Kausalya Singuru',
    },
  ],

  creator: 'Kausalya Singuru',

  openGraph: {
    title: 'Kausalya Singuru | Engineering Leadership Portfolio',
    description:
      'Showcasing expertise in Systems Engineering, Controls, Integration, Verification & Validation, and Electrified Propulsion.',
    type: 'website',
    locale: 'en_US',
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}