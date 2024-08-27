import Link from 'next/link';
import React from 'react';

const stylesLink = 'cursor-pointer rounded-2xl px-3 py-2 transition-all hover:bg-[#47242A]';

export default function Navbar() {
  return (
    <header className="w-full bg-[#62262E] px-8 py-5 text-[#FDF8FF]">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Logo
        </Link>

        <ul role="list" className="flex items-center justify-between gap-4">
          <li>
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
    </header>
  );
}

// #FDF8FF;
