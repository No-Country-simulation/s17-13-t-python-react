import SearchBar from '@/components/SearchBar';
import fetcher from '@/utils/fetcher';
import { GetBookResponse } from '../manager/_validators/bookSchema';
import { Suspense } from 'react';
import ListBookSkeleton from '@/components/Skeleton/ListBookSkeleton';
import DynamicBooks from './_components/DynamicBooks';
import DynamicGallery from '@/components/DynamicGallery';
import Modal from './_components/Modal';
import TopTenBooks from './_components/TopTenBooks';

export default async function Home() {
  const newBooks = await fetcher<GetBookResponse[]>('/servicesBook/newBook');
  const topBooks = await fetcher<GetBookResponse[]>('/servicesBook/topRated');
  const mostWantedBooks = await fetcher<GetBookResponse[]>('/servicesBook/wantedBooks');

  return (
    <div className="max-w-page px-6 md:px-8">
      <SearchBar />

      <Modal />

      <Suspense fallback={<ListBookSkeleton />}>
        <DynamicBooks />
      </Suspense>

      {typeof topBooks !== 'string' && (
        <Suspense fallback={<ListBookSkeleton />}>
          <TopTenBooks books={topBooks} />
        </Suspense>
      )}

      {typeof newBooks !== 'string' && (
        <Suspense fallback={<ListBookSkeleton />}>
          <DynamicGallery books={newBooks} carouselTitle="Agregados recientemente" />
        </Suspense>
      )}

      {typeof mostWantedBooks !== 'string' && (
        <Suspense fallback={<ListBookSkeleton />}>
          <DynamicGallery books={mostWantedBooks} carouselTitle="Los mas buscados" />
        </Suspense>
      )}
    </div>
  );
}
