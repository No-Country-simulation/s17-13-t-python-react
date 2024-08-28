import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

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
      <body className={`min-h-dvh bg-secondary text-primary grid grid-rows-[auto_1fr_auto] ${roboto.className}`}>
        {children}
        <div>

        </div>
        <Footer />
      </body>
    </html>
  );
}
