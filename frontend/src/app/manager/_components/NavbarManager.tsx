'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiGoogletagmanager } from 'react-icons/si';

export default function NavbarManager() {
  const currentPath = usePathname();
  const activeLink = (path: string) => (currentPath === path ? 'text-auxiliary' : '');
  const anchorStyle = 'inline-flex items-center text-lg hover:text-light hover:font-semibold';

  return (
    <nav className="flex rounded-lg border-gray-200 dark:border-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link href="/manager/genre" className={`${anchorStyle} ${activeLink('/bookManager')}`}>
            <SiGoogletagmanager className="mr-2" size={18} />
            Genero
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="mx-1 block h-3 w-3 rtl:rotate-180"
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
            <Link href="/manager/author" className={`${anchorStyle} ${activeLink('/bookManager')}`}>
              Autor
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="mx-1 block h-3 w-3 rtl:rotate-180"
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
            <Link href="/manager/book" className={`${anchorStyle} ${activeLink('/bookManager')}`}>
              Libro
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="mx-1 block h-3 w-3 rtl:rotate-180"
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
            <Link href="/manager/review" className={`${anchorStyle} ${activeLink('/bookManager')}`}>
              Reseñas
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
