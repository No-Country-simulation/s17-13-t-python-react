import React, { Suspense } from 'react';
import { getTopTenBooks } from '@/libs/actions';
import TopTenBooksList from './TopTenBooksList';

export default async function TopTenBooks() {
  const books = await getTopTenBooks();

  return (
    <section
      id="TopTen"
      className="flex flex-col items-center justify-center gap-6 bg-[#E7E0CF] px-9 py-9 text-[#232020] lg:grid lg:grid-cols-2"
    >
      <div>
        <h2 className="mb-2 text-xl font-bold">Top 10</h2>
        <p className="text-base font-normal">
          ¡Descubrí los imprescindibles del momento con nuestro Top Ten! En esta sección encontrarás
          los libros más impactantes y recomendados del año. Estos títulos ofrecen una variedad de
          géneros y perspectivas que capturarán tu imaginación y te invitarán a reflexionar.
          Sumérgete en nuestra lista y encuentra tu próxima lectura favorita.
        </p>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <TopTenBooksList books={books} />
      </Suspense>
    </section>
  );
}