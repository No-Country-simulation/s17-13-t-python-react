import { ReactNode } from 'react';
import BackgroundBook from '@/components/BackgroundBook';

export default function BookManagerLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] text-secondary">
      <BackgroundBook />
      <div className="mx-auto flex h-full max-w-5xl flex-col gap-8 px-4 py-8 lg:py-16">
        <div className="h-full py-8">{children}</div>
      </div>
    </section>
  );
}
