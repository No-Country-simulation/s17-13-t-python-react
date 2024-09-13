import NavbarManager from './_components/NavbarManager';
import { ReactNode } from 'react';

export default function BookManagerLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-[calc(100dvh-4rem)]">
      <div className="mx-auto flex h-full max-w-2xl flex-col gap-8 px-4 py-8 lg:py-16">
        {/* <NavbarManager /> */}
        <div className="h-full py-8">{children}</div>
      </div>
    </section>
  );
}
