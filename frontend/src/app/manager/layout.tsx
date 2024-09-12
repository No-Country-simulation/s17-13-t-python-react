import NavbarManager from './_components/NavbarManager';
import { ReactNode } from 'react';

export default function BookManager({ children }: { children: ReactNode }) {
  return (
    <section className="h-full bg-white">
      <div className="mx-auto grid max-w-2xl gap-8 px-4 py-8 lg:py-16">
        <NavbarManager />
        {children}
      </div>
    </section>
  );
}
