import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';
import './globals.css';

import Navbar from '@/components/Navbar';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BiblioZ',
  description: 'Aplicativo para recomendar libros',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`grid-layout min-h-dvh bg-secondary text-primary ${roboto.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  );
}
