import { ReactNode } from 'react';
import NavbarManager from '../_components/NavbarManager';

export default function SubViewLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarManager />
      {children}
    </>
  );
}
