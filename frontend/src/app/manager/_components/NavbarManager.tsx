'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarManager() {
  const currentPath = usePathname();
  const activeLink = (path: string) => (currentPath === path ? 'text-auxiliary' : '');
  const anchorStyle =
    'inline-flex items-center text-gray-400 text-sm font-medium hover:text-auxiliary';

    console.log(currentPath);
    
  return (
    <nav
      className="flex rounded-lg border-gray-200 px-5 py-3 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link href="/bookManager" className={`${anchorStyle} ${activeLink('/bookManager')}`}>
            <svg
              className="me-2.5 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="mx-1 block h-3 w-3 text-gray-400 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link href="#" className={`${anchorStyle} ${activeLink('/bookManager')}`}>
              Templates
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="mx-1 block h-3 w-3 text-gray-400 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link href="#" className={`${anchorStyle} ${activeLink('/bookManager')}`}>
              Templates
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
