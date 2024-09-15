'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Category from './Category';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuthStore } from '@/app/store/authStore';

const stylesLink = 'cursor-pointer rounded-2xl px-3 py-2 transition-all hover:bg-[#47242A]';

export default function Navbar() {
  const [showCategory, setShowCategory] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const timerRef = useRef<number | null>(null);

  const { isLogged } = useAuthStore();

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

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  //////////////////////////////

  return (
    <header className="relative w-full bg-[#62262E] px-8 py-5 text-[#FDF8FF] shadow-[0px_4px_4px_0px_#00000040]">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-semibold">
          <img src="/logo.svg" alt="BibliOz logo" className="px-5" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex items-center justify-center">
            {isOpenMenu ? <IoIosClose className="h-[2rem] w-[1.8rem]" /> : <GiHamburgerMenu />}
          </button>
        </div>

        <ul
          role="list"
          className={`hidden items-center justify-between gap-4 md:flex ${
            isOpenMenu ? 'block' : 'hidden'
          }`}
        >
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
            {isLogged ? (
              <Link href="/profile" className={stylesLink}>
                Mi perfil
              </Link>
            ) : (
              <Link href="/login" className={stylesLink}>
                Iniciar sesión
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {isOpenMenu && (
        <ul className="absolute left-14 top-24 mx-4 flex w-[19.5rem] max-w-[90%] flex-col items-start gap-4 bg-[#62262E] p-4 shadow-lg md:hidden">
          <li onClick={() => setShowCategory((show) => !show)}>
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
            {isLogged ? (
              <Link href="/profile" className={stylesLink}>
                Mi perfil
              </Link>
            ) : (
              <Link href="/login" className={stylesLink}>
                Iniciar sesión
              </Link>
            )}
          </li>
        </ul>
      )}

      {showCategory && (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Category />
        </div>
      )}
    </header>
  );
}
