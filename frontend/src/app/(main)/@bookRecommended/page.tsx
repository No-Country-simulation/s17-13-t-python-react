import { GetBookResponse } from '@/app/manager/_validators/bookSchema';
import DynamicGallery from '@/components/DynamicGallery';
import fetcher from '@/utils/fetcher';
import React from 'react';

export default async function BookRecommended() {
  const books = await fetcher<GetBookResponse[]>('/servicesBook/randomBooks');

  if (typeof books === 'string') {
    return <p>{books}</p>;
  }

  return <DynamicGallery books={books} carouselTitle="Tus recomendados" />;
}
