'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Category from './Category';

const stylesLink = 'cursor-pointer rounded-2xl px-3 py-2 transition-all hover:bg-[#47242A]';

export default function Navbar() {
  const [showCategory, setShowCategory] = useState(false);
  const timerRef = useRef<number | null>(null);

  //////////////////////////////

  const handleMouseEnter = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    setShowCategory(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => setShowCategory(false), 300);
  };

  //////////////////////////////

  return (
    <header className="relative w-full bg-[#62262E] px-8 py-5 text-[#FDF8FF]">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Logo
        </Link>

        <ul role="list" className="flex items-center justify-between gap-4">
          <li
            onClick={() => setShowCategory((show) => !show)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a className={stylesLink}>Categoría</a>
          </li>

          <li>
            <Link href="/allBooks" className={stylesLink}>
              Todos los libros
            </Link>
          </li>

          <li>
            <a href="/#TopTen" className={stylesLink}>
              Top ten
            </a>
          </li>

          <li>
            <a href="/#recentlyAdded" className={stylesLink}>
              Agregados recientemente
            </a>
          </li>

          <li>
            <Link href="/myFavorites" className={stylesLink}>
              Mis favoritos
            </Link>
          </li>

          <li>
            <Link href="/login" className={stylesLink}>
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </nav>

      {showCategory && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Category />
        </div>
      )}
    </header>
  );
}
