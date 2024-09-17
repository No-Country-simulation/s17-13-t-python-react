import { ReactNode } from 'react';
import NavbarManager from '../_components/NavbarManager';

export default function SubViewLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="grid h-full w-full gap-8 rounded-xl bg-[#e7e0cf10] px-6 py-12 backdrop-blur-[50px] md:rounded-[35px] md:p-12">
        <NavbarManager />
        {children}
      </div>
    </>
  );
}
