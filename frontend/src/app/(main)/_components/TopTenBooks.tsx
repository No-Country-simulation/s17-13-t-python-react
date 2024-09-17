import { Suspense } from 'react';
import { getTopTenBooks } from '@/libs/actions';
import TopTenBooksList from './TopTenBooksList';

export default async function TopTenBooks() {
  const books = await getTopTenBooks();

  return (
    <section
      id="TopTen"
      className="relative flex items-center justify-center gap-6 py-9 text-[#232020] after:absolute after:inset-0 after:left-2/4 after:-z-10 after:w-dvw after:-translate-x-2/4 md:flex-col md:gap-12 md:bg-[#E7E0CF] md:after:bg-[#E7E0CF] lg:grid lg:grid-cols-2"
    >
      <div className="hidden md:block">
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
