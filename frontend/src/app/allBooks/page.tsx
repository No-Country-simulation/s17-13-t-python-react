import SearchBar from '@/components/SearchBar';
import ListBookSkeleton from '@/components/Skeleton/ListBookSkeleton';
import React, { Suspense } from 'react';

import DynamicGallery from '@/components/DynamicGallery';
import fetcher from '@/utils/fetcher';
import { GetBookResponse } from '../manager/_validators/bookSchema';

export default async function page() {
  const chosenForYou = await fetcher<GetBookResponse[]>('/servicesBook/randomBooks');
  const newBooks = await fetcher<GetBookResponse[]>('/servicesBook/newBook');
  // const trueStories = await fetcher<GetBookResponse[]>('/servicesBook/');
  const bibliOzFavorites = await fetcher<GetBookResponse[]>('/servicesBook/wantedBooks');

  return (
    <div className="max-w-page px-6 md:px-8">
      <SearchBar />

      {typeof chosenForYou !== 'string' && (
        <Suspense fallback={<ListBookSkeleton />}>
          <DynamicGallery books={chosenForYou} carouselTitle="Nuestros elegidos para vos" />
        </Suspense>
      )}

      {typeof newBooks !== 'string' && (
        <Suspense fallback={<ListBookSkeleton />}>
          <DynamicGallery books={newBooks} carouselTitle="Lo nuevo en BibliOz" />
        </Suspense>
      )}

      {/*
      typeof trueStories !== 'string' && (
        <Suspense fallback={<ListBookSkeleton />}>
          <DynamicGallery books={trueStories} carouselTitle="Basados en historias reales" />
        </Suspense>
      ) 
       */}

      {typeof bibliOzFavorites !== 'string' && (
        <Suspense fallback={<ListBookSkeleton />}>
          <DynamicGallery books={bibliOzFavorites} carouselTitle="Favoritos en BibliOz" />
        </Suspense>
      )}
    </div>
  );
}
