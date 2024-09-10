'use client';

import { useState } from 'react';
import CarouselBook from './CarouselBook/CarouselBook';
import BookOverview from './BookOverview';
import BookOptionsBar from './BookOptionsBar';
import BookReview from './BookReview';
import Carousel from './Carousel/Carousel';

export default function DetailBook({ book }: { book: any }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = (isOpen: boolean) => {
    setModalOpen(isOpen);
  };

  return (
    <>
      {isModalOpen && (
        <section className="top-30 absolute left-0 z-40 w-full bg-white outline-slate-800">
          <CarouselBook setOpenModal={(isOpen) => handleModal(isOpen)} />
        </section>
      )}
      <section className="mt-8">
        <BookOverview book={book} setOpenModal={(isOpen) => handleModal(isOpen)} />
        <section className="p-12">
          <BookOptionsBar />
        </section>
        <BookReview />
        <Carousel
          carouselTitle="Del mismo autor"
          books={[{ name: 'Bodas de odio', url: '/bibliozBook/book-2.png' }]}
        />
        <Carousel carouselTitle="Porque también te puede interesar" />
      </section>
    </>
  );
}
