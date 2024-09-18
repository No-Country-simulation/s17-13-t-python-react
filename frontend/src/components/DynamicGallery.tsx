import React from 'react';
import Title from './Typography/Title';
import { GetBookResponse } from '@/app/manager/_validators/bookSchema';
import ListBook from './ListBook';
import Carousel from './Carousel/Carousel';

interface Props {
  carouselTitle?: string;
  books: GetBookResponse[];
}

export default function DynamicGallery({ carouselTitle, books }: Props) {
  return (
    <section className="overflow-hidden py-20 md:py-28">
      {carouselTitle && (
        <Title
          level={2}
          title={carouselTitle}
          customClass="mx-auto max-w-page pb-8 md:pb-16 text-[2.1875rem] font-semibold"
        />
      )}
      {books.length <= 4 ? <ListBook book={books} /> : <Carousel books={books} />}
    </section>
  );
}
